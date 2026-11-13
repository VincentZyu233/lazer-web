# Lazer 插件市场

`/plugin` 是 Lazer 官网的插件市场页面。Lazer 客户端不内置插件目录，而是直接读取这个地址：

```text
GET /plugin/plugins.json
```

`plugins.json` 是唯一的上架清单。页面和客户端都从这份文件获取插件名称、作者、版本、下载地址与开源仓库链接。

## 仓库内的位置

```text
plugin.html                   # /plugin 页面（cleanUrls）
plugin/
  README.md                   # 本文件：上架与维护说明
public/plugin/
  plugins.json                # 客户端读取的市场清单
  <作者>/<插件 id>/<版本>/     # 可选：市场托管的插件 ZIP
```

Vite 会把 `public/plugin` 下的 `plugins.json` 和托管 ZIP 原样发布到 `/plugin/` 对应路径。

## 上架流程

1. Fork [chuxuehaocai/lazer-web](https://github.com/chuxuehaocai/lazer-web)。
2. 在 `public/plugin/plugins.json` 的 `plugins` 数组里加入或更新你的条目。
3. 确认 JSON 合法，并对照下面的字段说明检查字段。
4. 如果要使用市场托管，把插件 ZIP 一起放到 `public/plugin/<作者>/<插件 id>/<版本>/` 下。
5. 按 [插件上架 PR 模板](../.github/PULL_REQUEST_TEMPLATE/plugin-listing.md) 提交 Pull Request，并在描述里写清楚插件类型与版本。
6. 维护者审核合并后，Vercel 会重新构建站点，`/plugin/plugins.json` 随即更新。

没有自动上架通道。所有新增和变更都必须经过一次合并的 PR。

## 上架规则

### 开源插件

- 必须提供公开可访问的 `repo`（开源仓库链接）。
- 必须填写 `license`（例如 `MIT`、`GPL-3.0-or-later`）。
- 建议 `download` 指向仓库的 latest release 资源，例如：
  `https://github.com/OWNER/REPO/releases/latest/download/PLUGIN.zip`
- 开源仓库的新版本可以直接发布 Release，不必每次更新都改市场清单；只有名称、简介、下载方式等元数据变化时才需要提交 PR。

### 闭源插件

- 不要求公开源码，允许只提供 `download` 下载地址。
- 作者必须在**每一个版本更新**时提交 PR，修改 `plugins.json` 中的 `version`、`download` 和 `updatedAt`。
- 只改下载文件而不改清单，客户端不会看到新版本。
- 建议同时提供 SHA-256 校验值或在下载页公示校验信息（可放在插件主页，不强制作字段）。

### 插件包托管

作者可以选择把 ZIP 包上传到插件市场，由市场页面直接提供下载；也可以继续使用自己的外部下载地址。

市场托管的文件放在：

```text
public/plugin/<作者>/<插件 id>/<版本>/<插件 id>.zip
```

对应的 `download` 填写生产地址，例如：

```json
"download": "https://lazer.naominet.dev/plugin/Kazari/neteast-gateway/1.0.0/neteast-gateway.zip"
```

ZIP 会随 PR 一起提交，不需要额外部署文件服务器。开源和闭源插件都可以使用这种方式；闭源插件仍然需要为每个新版本提交一次 PR。

### 通用要求

- `id` 全局唯一，使用小写字母、数字、点和连字符，例如 `lazer.netease`。
- `version` 使用语义化版本，例如 `1.4.2`。
- `updatedAt` 使用 `YYYY-MM-DD`，代表该版本发布时间。
- `platforms` 只能是 `windows`、`macos`、`linux`、`android`、`ios`。
- 插件必须可卸载、不得修改用户未授权的文件、不得包含恶意代码或静默收集数据。
- 不接受空条目、占位链接、重复条目和失效下载地址。
- 维护者可以下架违反规则的插件，或要求作者补充信息。

## 字段说明

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `id` | 是 | 唯一标识，小写字母、数字、点或连字符 |
| `name` | 是 | 显示名称；字符串或 `{ "zh-CN": "...", "zh-Hant": "...", "ja": "...", "en": "..." }` |
| `summary` | 是 | 一句话简介；格式同 `name` |
| `author` | 是 | 作者或团队名称 |
| `authorUrl` | 否 | 作者主页 |
| `type` | 是 | `open-source` 或 `closed-source` |
| `version` | 是 | 语义化版本 |
| `license` | 开源必填 | 许可证标识 |
| `repo` | 开源必填 | 公开开源仓库链接 |
| `download` | 闭源必填 | 插件包下载地址，可填市场托管 ZIP 或外部地址；开源插件可选 |
| `homepage` | 否 | 插件主页 |
| `platforms` | 是 | 支持的平台数组 |
| `tags` | 否 | 小写标签数组，最多 8 个 |
| `minAppVersion` | 否 | 最低 Lazer 版本 |
| `updatedAt` | 是 | 版本发布日期 `YYYY-MM-DD` |

## 客户端首页能力

插件包中的 `manifest.json` 以及运行时 `describe.providers[*]` 可以声明
`capabilities`。客户端会按当前平台实际声明的能力决定首页要请求和展示哪些内容，
不会因为接口存在就强行显示一个空的模块。

默认首页只保留两类内容：榜单和最近播放。最近播放由客户端本地维护，不需要插件实现。
榜单来自客户端的外部榜单；如果插件声明了 `charts`，还会额外读取插件提供的榜单。

首页扩展模块与能力的对应关系如下：

| 能力 | 首页可展示的内容 | 需要实现的操作 |
| --- | --- | --- |
| `homeFeed` | 每日推荐、精选、新发行和编辑精选 | `homeFeed` |
| `recommendations` | 猜你喜欢以及基于推荐歌曲的首页快捷入口 | `recommendations` |
| `radio` | 私人漫游、心动模式和歌手电台 | `radio`；心动模式还需要可用的喜欢歌单 |
| `charts` | 插件榜单（与客户端外部榜单合并） | `charts`、`playlistSongs` |

能力可以只声明实际支持的部分。例如只实现搜索和歌词的插件，首页不会出现推荐、
心动模式或电台入口；实现 `homeFeed` 但不实现 `radio` 的插件，也不会显示电台模块。
如果 `describe` 返回了 `capabilities`，它会覆盖清单中的同名字段，因此平台可以按账号或
地区返回不同的首页能力。能力名不区分大小写和短横线、下划线等分隔符。

首页数据接口返回空数组也是合法的。插件应在不支持某个模块时省略对应能力，避免客户端
重复请求不存在的接口；客户端会继续显示最近播放和可用的榜单。

### 皮肤与布局接口（预留）

Lazer 正在把通用 UI 抽象为声明式主题和页面布局。当前内置主题为 `builtin.apple`，
内置布局为 `builtin.adaptive` 和 `builtin.television`。后续 Lua 皮肤会提供 JSON 形状的
主题令牌（例如卡片圆角、列表行高、标题字号和玻璃模糊强度）以及布局令牌（例如页面边距、
内容最大宽度和断点）。

皮肤只提供数据，不返回 Flutter Widget、不执行任意 UI 代码，也不能接管焦点、语义树、
输入或权限。未知字段会被忽略，数值会由客户端限制在安全范围内。插件仍应同时声明当前的
`capabilities` 和音乐平台操作。

插件可以在 `describe` 顶层返回 `theme = true`，再由 `theme` 操作返回
`{ theme = { id, name, elements = { ... } }, layout = { id, name, ... } }`。其中
`displayWeight`、`headingWeight`、`titleWeight`、`bodyWeight` 和 `labelWeight` 可覆盖
对应文字层级，宿主会限幅并映射到可用字重。皮肤操作失败只会回退到内置 Apple 主题，
不会阻止音乐平台启动。

插件清单可以额外声明 `permissions.websocket` 域名列表。WebSocket 连接必须由用户在
插件管理中单独授权；Lua 侧使用 `host.websocket({operation, id, url, data})` 打开、发送、
接收和关闭连接。未获授权时运行时不会建立连接。

歌词组件也使用同一组令牌：`lyricWeight`、`lyricTranslationWeight`、字号倍率、行高、
翻译间距、焦点透明度和 `lyricTextAlign` 都可由 Lua 改写。滚动同样开放给主题：
`lyricSpringMassScale`、`lyricSpringStiffnessScale`、`lyricSpringDampingScale` 控制弹簧，
`lyricStaggerDelay`、`lyricStaggerDecay` 控制逐行错峰，`lyricFocusScaleDelta` 控制焦点行与
非焦点行的缩放差。歌词的时序、滚动边界、命中测试和无障碍节点仍由客户端控制。

## 完整示例

```json
{
  "id": "lyric-plus",
  "name": {
    "zh-CN": "歌词增强",
    "zh-Hant": "歌詞增強",
    "ja": "リリック・プラス",
    "en": "Lyric Plus"
  },
  "summary": {
    "zh-CN": "逐字歌词增强：桌面悬浮歌词、双语对照与可调的字体排印。",
    "en": "Word-by-word lyrics, a desktop overlay, bilingual pairing, and adjustable typography."
  },
  "author": "Kazari",
  "type": "open-source",
  "version": "1.4.2",
  "license": "MIT",
  "repo": "https://github.com/OWNER/lyric-plus",
  "download": "https://github.com/OWNER/lyric-plus/releases/latest/download/lyric-plus.zip",
  "platforms": ["windows", "macos", "linux"],
  "tags": ["lyrics", "overlay"],
  "minAppVersion": "2.0.0",
  "updatedAt": "2026-10-18"
}
```

## 本地预览

```powershell
npm install
npm run dev
```

打开 `http://localhost:5173/plugin`，页面会请求 `/plugin/plugins.json`。生产构建使用 `npm run build`，输出到 `dist/`。
