/* Lazer plugin market — language layer.
   The page's Chinese copy lives in plugin/index.html; this module swaps it at runtime. */

const LANGUAGE_LABELS = {
  'zh-CN': '中文',
  'zh-Hant': '繁體',
  ja: '日本語',
  en: 'EN'
};

const META = {
  'zh-CN': {
    title: 'Lazer — 插件市场',
    description: 'Lazer 插件市场：客户端读取 /plugin/plugins.json，把社区做的歌词、主题、音频与联动插件接进播放器。'
  },
  'zh-Hant': {
    title: 'Lazer — 外掛市集',
    description: 'Lazer 外掛市集：用戶端讀取 /plugin/plugins.json，把社群做的歌詞、主題、音訊與連動外掛接進播放器。'
  },
  ja: {
    title: 'Lazer — プラグインマーケット',
    description: 'Lazer のプラグインマーケット。クライアントは /plugin/plugins.json を読み込み、コミュニティ製の歌詞・テーマ・オーディオ・連携プラグインをプレーヤーにつなぎます。'
  },
  en: {
    title: 'Lazer — Plugin Market',
    description: 'The Lazer plugin market. The client reads /plugin/plugins.json and patches community-built lyric, theme, audio, and integration plugins into the player.'
  }
};

const TRANSLATIONS = {
  'zh-Hant': {
    skip: '跳到正文',
    brandHomeAria: 'Lazer 首頁',
    navAria: '主導覽',
    navHome: '主頁',
    navMarket: '市場',
    navGuide: '上架',
    navSpec: '規範',
    mobileSubmit: '上架',
    heroTitleA: '在訊號鏈上，',
    heroTitleB: '再接一台機器。',
    heroLede: 'Lazer 外掛市集。用戶端直接讀取 /plugin/plugins.json，把社群做的歌詞、主題、音訊和連動外掛接進同一台播放器。',
    ctaSubmit: '提交外掛 PR',
    ctaBrowse: '瀏覽外掛',
    ctaJson: '檢視 plugins.json',
    statPlugins: '上架外掛',
    statOpen: '開源',
    statClosed: '閉源',
    statUpdated: '最近更新',
    scrollDown: '向下瀏覽',
    sectionMarket: '01 / MARKET — 外掛索引',
    marketTitleA: '給播放器，',
    marketTitleB: '再接幾個功能。',
    marketDesc: '上架的外掛都來自合併過的 Pull Request。開源外掛要帶公開倉庫，閉源外掛每次發版都提一次 PR。',
    searchPlaceholder: '搜尋外掛、作者或標籤',
    filterAll: '全部',
    filterOpen: '開源',
    filterClosed: '閉源',
    sortLabel: '排序',
    sortDefault: '預設',
    sortUpdated: '更新時間',
    listPlugin: '外掛 / 描述',
    listType: '類型',
    listVersion: '版本',
    listUpdated: '更新',
    listAction: '操作',
    loading: '正在讀取 /plugin/plugins.json…',
    loadError: 'plugins.json 讀取失敗。',
    retry: '重試',
    emptyTitle: '沒有符合的外掛。',
    emptyHint: '換個關鍵字，或者提交第一個。',
    viewJson: '檢視原始 JSON',
    sectionGuide: '02 / SUBMIT — 上架規則',
    guideTitleA: '上架，',
    guideTitleB: '就一個 PR。',
    guideDesc: '市集沒有自動提交入口。Fork 倉庫，改 public/plugin/plugins.json，按上架模板發一個 Pull Request；合併之後用戶端就能讀到你的外掛。',
    guidePrimary: '檢視上架文件',
    guideSecondary: '編輯 plugins.json',
    packageLabel: '可選 / ZIP 託管',
    packageDesc: '作者也可以把外掛 ZIP 上傳到市集：放進 public/plugin/<作者>/<外掛 id>/<版本>/，download 填市集地址就行。',
    rule1Title: '開源外掛',
    rule1Body: '必須帶公開可存取的倉庫連結和許可證。用戶端可以直接從倉庫的 Releases 取更新，不用為每個版本重複提交。',
    rule2Title: '閉源外掛',
    rule2Body: '可以不帶倉庫連結，但每次更新都要提 PR，改 plugins.json 裡的版本號、下載地址和校驗值。',
    rule3Title: '審核上架',
    rule3Body: '維護者會看欄位是否完整、許可證和下載地址。合併後 main 由 Vercel 自動建置，/plugin/plugins.json 隨即生效。',
    contractLabel: '用戶端契約',
    contractSchemaLink: '檢視上架文件',
    footerPlugins: '外掛市集',
    footerListen: '聽歌',
    footerLyrics: '歌詞',
    footerInterface: '介面',
    footerDocs: '文件 ↗'
  },
  ja: {
    skip: '本文へスキップ',
    brandHomeAria: 'Lazer ホーム',
    navAria: 'メインナビゲーション',
    navHome: 'ホーム',
    navMarket: 'マーケット',
    navGuide: '掲載',
    navSpec: '仕様',
    mobileSubmit: '掲載',
    heroTitleA: '信号経路の先に、',
    heroTitleB: 'もう一台つなごう。',
    heroLede: 'Lazer のプラグインマーケット。クライアントは /plugin/plugins.json を直接読み込み、コミュニティ製の歌詞・テーマ・オーディオ・連携プラグインを同じプレーヤーにつなぎます。',
    ctaSubmit: 'プラグインを申請',
    ctaBrowse: 'プラグインを見る',
    ctaJson: 'plugins.json を見る',
    statPlugins: '掲載プラグイン',
    statOpen: 'オープンソース',
    statClosed: 'クローズドソース',
    statUpdated: '最終更新',
    scrollDown: '下へスクロール',
    sectionMarket: '01 / MARKET — プラグイン索引',
    marketTitleA: 'プレーヤーに、',
    marketTitleB: '機能をもうひとつ。',
    marketDesc: '掲載中のプラグインはすべてマージ済みの Pull Request から来ています。オープンソースは公開リポジトリが必須で、クローズドはリリースごとに PR が必要です。',
    searchPlaceholder: 'プラグイン、作者、タグを検索',
    filterAll: 'すべて',
    filterOpen: 'オープンソース',
    filterClosed: 'クローズド',
    sortLabel: '並び順',
    sortDefault: '既定',
    sortUpdated: '更新日',
    listPlugin: 'プラグイン / 説明',
    listType: '種別',
    listVersion: 'バージョン',
    listUpdated: '更新日',
    listAction: '操作',
    loading: '/plugin/plugins.json を読み込み中…',
    loadError: 'plugins.json の読み込みに失敗しました。',
    retry: '再試行',
    emptyTitle: '一致するプラグインがありません。',
    emptyHint: '別のキーワードを試すか、最初の一本を申請してください。',
    viewJson: '生の JSON を見る',
    sectionGuide: '02 / SUBMIT — 掲載ルール',
    guideTitleA: '掲載は、',
    guideTitleB: 'PR ひとつ。',
    guideDesc: '自動投稿の窓口はありません。リポジトリをフォークし、public/plugin/plugins.json を編集して、掲載テンプレートで Pull Request を送ってください。マージ後、クライアントがあなたのプラグインを読み込みます。',
    guidePrimary: '掲載ガイドを見る',
    guideSecondary: 'plugins.json を編集',
    packageLabel: '任意 / ZIP ホスティング',
    packageDesc: '作者はプラグイン ZIP をマーケットに置くこともできます。public/plugin/<作者>/<プラグイン id>/<バージョン>/ に置き、download にマーケットの URL を記入してください。',
    rule1Title: 'オープンソース',
    rule1Body: '公開リポジトリのリンクとライセンスが必須です。クライアントはリポジトリの Releases から更新を取得できるため、バージョンごとの再申請は不要です。',
    rule2Title: 'クローズドソース',
    rule2Body: 'リポジトリリンクは不要ですが、更新のたびに PR を送り、plugins.json のバージョン、ダウンロード URL、チェックサムを更新する必要があります。',
    rule3Title: '審査と掲載',
    rule3Body: 'メンテナは項目の完全性、ライセンス、ダウンロード URL を確認します。マージ後は Vercel が main をビルドし、/plugin/plugins.json がすぐに反映されます。',
    contractLabel: 'クライアント契約',
    contractSchemaLink: '掲載ガイドを見る',
    footerPlugins: 'プラグインマーケット',
    footerListen: '聴く',
    footerLyrics: '歌詞',
    footerInterface: '画面',
    footerDocs: 'ドキュメント ↗'
  },
  en: {
    skip: 'Skip to content',
    brandHomeAria: 'Lazer home',
    navAria: 'Main navigation',
    navHome: 'Home',
    navMarket: 'Market',
    navGuide: 'Submit',
    navSpec: 'Spec',
    mobileSubmit: 'Submit',
    heroTitleA: 'On the signal chain,',
    heroTitleB: 'plug in another machine.',
    heroLede: 'The Lazer plugin market. The client reads /plugin/plugins.json directly and patches community-built lyric, theme, audio, and integration plugins into the same player.',    ctaSubmit: 'Submit a plugin PR',
    ctaBrowse: 'Browse plugins',
    ctaJson: 'View plugins.json',
    statPlugins: 'Plugins listed',
    statOpen: 'Open source',
    statClosed: 'Closed source',
    statUpdated: 'Last updated',
    scrollDown: 'Scroll down',
    sectionMarket: '01 / MARKET — PLUGIN INDEX',
    marketTitleA: 'For the player,',
    marketTitleB: 'one more feature.',
    marketDesc: 'Every plugin here came from a merged pull request. Open source needs a public repository; closed source files a PR with each release.',
    searchPlaceholder: 'Search plugins, authors, or tags',
    filterAll: 'All',
    filterOpen: 'Open source',
    filterClosed: 'Closed',
    sortLabel: 'Sort',
    sortDefault: 'Default',
    sortUpdated: 'Updated',
    listPlugin: 'PLUGIN / DESCRIPTION',
    listType: 'TYPE',
    listVersion: 'VERSION',
    listUpdated: 'UPDATED',
    listAction: 'ACTION',
    loading: 'Reading /plugin/plugins.json…',
    loadError: 'Could not load plugins.json.',
    retry: 'Retry',
    emptyTitle: 'No plugins match.',
    emptyHint: 'Try another keyword, or submit the first one.',
    viewJson: 'View raw JSON',
    sectionGuide: '02 / SUBMIT — LISTING RULES',
    guideTitleA: 'Listing is,',
    guideTitleB: 'one PR away.',
    guideDesc: 'There is no automatic submission. Fork the repo, edit public/plugin/plugins.json, and open a pull request with the listing template. Once it merges, the client can read your plugin.',
    guidePrimary: 'Read the listing guide',
    guideSecondary: 'Edit plugins.json',
    packageLabel: 'OPTIONAL / ZIP HOSTING',
    packageDesc: 'Authors can also host the plugin ZIP here: drop it under public/plugin/<author>/<plugin-id>/<version>/ and point download at the market URL.',
    rule1Title: 'Open source',
    rule1Body: 'A public repository link and a license are required. The client follows the repository’s Releases, so you do not resubmit for every version.',
    rule2Title: 'Closed source',
    rule2Body: 'No repository link needed, but each release needs a PR that updates the version, download URL, and checksum in plugins.json.',
    rule3Title: 'Review & listing',
    rule3Body: 'Maintainers check that fields are complete, plus licensing and download URLs. Vercel builds main after merge, and /plugin/plugins.json goes live.',
    contractLabel: 'CLIENT CONTRACT',
    contractSchemaLink: 'Read the listing guide',
    footerPlugins: 'Plugin Market',
    footerListen: 'Listen',
    footerLyrics: 'Lyrics',
    footerInterface: 'Interface',
    footerDocs: 'Docs ↗'
  }
};

const SUPPORTED_LANGUAGES = ['zh-CN', 'zh-Hant', 'ja', 'en'];
const textDefaults = new WeakMap();
const attributeDefaults = new WeakMap();
const listeners = new Set();
let currentLanguage = 'zh-CN';

function normalizeLanguage(value) {
  if (!value) return null;
  const language = String(value).toLowerCase();
  if (language.startsWith('zh')) {
    return /(hant|tw|hk|mo)/.test(language) ? 'zh-Hant' : 'zh-CN';
  }
  if (language.startsWith('ja')) return 'ja';
  if (language.startsWith('en')) return 'en';
  return null;
}

export function getLanguage() {
  return currentLanguage;
}

export function languageLabel(language) {
  return LANGUAGE_LABELS[language] || LANGUAGE_LABELS['zh-CN'];
}

export function onLanguageChange(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function pickLocalized(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return value[currentLanguage] || value['zh-CN'] || Object.values(value).find(Boolean) || '';
}

function translate(key, fallback) {
  const dictionary = TRANSLATIONS[currentLanguage];
  return dictionary && dictionary[key] !== undefined ? dictionary[key] : fallback;
}

export function t(key, fallback = '') {
  return translate(key, fallback);
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dataset.language = currentLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    if (!textDefaults.has(element)) textDefaults.set(element, element.textContent);
    element.textContent = translate(element.dataset.i18n, textDefaults.get(element));
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    let defaults = attributeDefaults.get(element);
    if (!defaults) {
      defaults = {};
      attributeDefaults.set(element, defaults);
    }
    if (defaults[key] === undefined) defaults[key] = element.getAttribute('aria-label') || '';
    element.setAttribute('aria-label', translate(key, defaults[key]));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    let defaults = attributeDefaults.get(element);
    if (!defaults) {
      defaults = {};
      attributeDefaults.set(element, defaults);
    }
    if (defaults[key] === undefined) defaults[key] = element.getAttribute('placeholder') || '';
    element.setAttribute('placeholder', translate(key, defaults[key]));
  });

  const meta = META[currentLanguage] || META['zh-CN'];
  document.title = meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', meta.description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', meta.title);
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', meta.description);
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) {
    ogLocale.setAttribute('content', {
      'zh-CN': 'zh_CN',
      'zh-Hant': 'zh_TW',
      ja: 'ja_JP',
      en: 'en_US'
    }[currentLanguage]);
  }

  const currentLabel = document.querySelector('.lang-current');
  if (currentLabel) currentLabel.textContent = languageLabel(currentLanguage);

  document.querySelectorAll('.lang-options [data-lang]').forEach((button) => {
    button.setAttribute('aria-selected', String(button.dataset.lang === currentLanguage));
  });
}

export function setLanguage(language, options = {}) {
  currentLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : 'zh-CN';
  applyStaticTranslations();

  try {
    localStorage.setItem('lazer-language', currentLanguage);
  } catch (error) {
    /* Storage can be unavailable; the page still switches. */
  }

  if (options.updateUrl !== false) {
    const url = new URL(window.location.href);
    if (currentLanguage === 'zh-CN') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', currentLanguage);
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }

  listeners.forEach((listener) => listener(currentLanguage));
}

export function initLanguage() {
  let saved = null;
  try {
    saved = localStorage.getItem('lazer-language');
  } catch (error) {
    /* Ignore unavailable storage. */
  }
  const queryLanguage = normalizeLanguage(new URLSearchParams(window.location.search).get('lang'));
  setLanguage(queryLanguage || normalizeLanguage(saved) || 'zh-CN', { updateUrl: false });
}

export function initLanguageMenu() {
  const menu = document.querySelector('.lang-menu');
  const trigger = document.querySelector('.lang-trigger');
  if (!menu || !trigger) return;

  trigger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
      menu.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    });
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) {
      menu.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menu.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    }
  });
}
