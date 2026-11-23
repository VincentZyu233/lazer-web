// Verifies every entry in public/plugin/plugins.json before it ships.
//
// The client refuses a package unless its bytes hash to the listed sha256 and
// the manifest version equals the listed version, so a stale listing is not a
// cosmetic problem: the plugin simply cannot be installed. This check catches
// the two ways that happens in practice — a marketplace ZIP that is missing or
// has the wrong hash, and a `download` URL that tracks a moving target.
//
// Usage: node scripts/check-plugins.mjs [--remote]

import { createHash } from 'node:crypto';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const marketOrigin = 'https://lazer.naominet.dev';
const platforms = new Set(['windows', 'macos', 'linux', 'android', 'ios', 'web']);
const remote = process.argv.includes('--remote');

const errors = [];
const warnings = [];

const say = (list, message) => list.push(message);

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

async function checkLocal(download, checksum, id) {
  const url = new URL(download);
  const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
  const file = path.join(root, 'public', relative);
  let bytes;
  try {
    bytes = await readFile(file);
  } catch {
    say(errors, `${id}: 市场托管文件缺失 public/${relative}（download 指向 ${url.pathname}）`);
    return;
  }
  const actual = sha256(bytes);
  if (actual !== checksum.toLowerCase()) {
    say(errors, `${id}: public/${relative} 的 sha256 是 ${actual}，清单写的是 ${checksum}`);
  }
}

async function checkRemote(download, checksum, id) {
  let response;
  try {
    response = await fetch(download, { redirect: 'follow' });
  } catch (failure) {
    say(warnings, `${id}: 无法访问 download（${failure.message}），跳过远端校验`);
    return;
  }
  if (!response.ok) {
    say(errors, `${id}: download 返回 HTTP ${response.status}`);
    return;
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  const actual = sha256(bytes);
  if (actual !== checksum.toLowerCase()) {
    say(errors, `${id}: 远端包 sha256 是 ${actual}，清单写的是 ${checksum}`);
  }
}

const index = JSON.parse(await readFile(path.join(root, 'public/plugin/plugins.json'), 'utf8'));

if (index.schemaVersion !== 1) say(errors, `schemaVersion 必须是 1，当前 ${index.schemaVersion}`);
if (!Array.isArray(index.plugins) || index.plugins.length === 0) {
  say(errors, 'plugins 必须是非空数组');
}

const seen = new Set();
for (const plugin of index.plugins ?? []) {
  const id = plugin.id;
  if (typeof id !== 'string' || !/^[a-z][a-z0-9_.-]{2,79}$/.test(id)) {
    say(errors, `${id}: id 必须是小写字母开头的 3-80 位标识`);
    continue;
  }
  if (seen.has(id)) say(errors, `${id}: id 重复`);
  seen.add(id);

  for (const field of ['name', 'summary', 'author', 'type', 'version', 'updatedAt']) {
    if (plugin[field] == null) say(errors, `${id}: 缺少 ${field}`);
  }
  if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(String(plugin.version))) {
    say(errors, `${id}: version 必须是语义化版本，当前 ${plugin.version}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(plugin.updatedAt))) {
    say(errors, `${id}: updatedAt 必须是 YYYY-MM-DD，当前 ${plugin.updatedAt}`);
  }
  if (!Array.isArray(plugin.platforms) || plugin.platforms.length === 0) {
    say(errors, `${id}: platforms 必须是非空数组`);
  } else {
    for (const platform of plugin.platforms) {
      if (!platforms.has(platform)) say(errors, `${id}: 未知平台 ${platform}`);
    }
  }
  if (!/^[a-fA-F0-9]{64}$/.test(String(plugin.sha256 ?? ''))) {
    say(errors, `${id}: sha256 必须是 64 位十六进制（客户端缺校验值会直接拒绝安装）`);
    continue;
  }

  let download;
  try {
    download = new URL(String(plugin.download));
  } catch {
    say(errors, `${id}: download 不是合法 URL`);
    continue;
  }
  if (download.protocol !== 'https:' || download.username || download.password) {
    say(errors, `${id}: download 必须是公开的 HTTPS 地址`);
    continue;
  }
  if (download.search || download.hash) {
    say(warnings, `${id}: download 带查询串/锚点，哈希校验可能随链接失效`);
  }
  if (download.host === new URL(marketOrigin).host) {
    await checkLocal(plugin.download, plugin.sha256, id);
  } else if (/\/releases\/latest\//.test(download.pathname)) {
    // The client pins both sha256 and version, so a URL that follows "latest"
    // starts failing the moment upstream publishes a release — even though
    // the listing still looks correct.
    say(
      errors,
      `${id}: download 指向 releases/latest，上游一发版就会与清单的 version/sha256 失配；` +
        `请改用 /releases/download/v${plugin.version}/ 或把 ZIP 托管到市场`,
    );
  } else if (remote) {
    await checkRemote(plugin.download, plugin.sha256, id);
  }
}

for (const warning of warnings) console.warn(`warn  ${warning}`);
for (const error of errors) console.error(`error ${error}`);

if (errors.length > 0) {
  console.error(`\n插件清单校验失败：${errors.length} 个问题。`);
  process.exit(1);
}
console.log(`插件清单校验通过：${seen.size} 个条目${remote ? '（含远端下载校验）' : ''}。`);
