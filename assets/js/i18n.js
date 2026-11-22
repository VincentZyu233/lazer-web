/* Lazer — four-language layer.
   Chinese source strings stay in the HTML; this file swaps them at runtime. */

const LANGUAGE_LABELS = {
  'zh-CN': '中文',
  'zh-Hant': '繁體',
  ja: '日本語',
  en: 'EN'
};

const META = {
  'zh-CN': {
    title: 'Lazer — 把每一首歌，放回盒子里',
    description: 'Lazer 是用 Flutter 手写的多平台音乐客户端，平台能力由 Lua 插件提供，搜索、歌单、评论、歌词与播放共用一套核心。'
  },
  'zh-Hant': {
    title: 'Lazer — 把每一首歌，放回盒子裡',
    description: 'Lazer 是用 Flutter 手寫的多平台音樂用戶端，平台能力由 Lua 外掛提供，搜尋、歌單、評論、歌詞與播放共用一套核心。'
  },
  ja: {
    title: 'Lazer — すべての歌を、ケースの中へ。',
    description: 'Lazer は Flutter で手書きされたマルチプラットフォーム音楽クライアント。プラットフォーム対応は Lua プラグインが担い、検索、プレイリスト、コメント、歌詞、再生はひとつのコアを共有します。'
  },
  en: {
    title: 'Lazer — Put every song back in its case.',
    description: 'Lazer is a multi-platform music client, handwritten in Flutter. Lua plugins supply the platform layer, while search, playlists, comments, lyrics, and playback share one core.'
  }
};

const TRANSLATIONS = {
  'zh-Hant': {
    'Lazer — 把每一首歌，放回盒子里': 'Lazer — 把每一首歌，放回盒子裡',
    '跳到正文': '跳到正文',
    '听': '聽',
    '歌词': '歌詞',
    '界面': '介面',
    '规格': '規格',
    '获取': '取得',
    '插件': '外掛',
    '把每一首歌，': '把每一首歌，',
    '放回盒子里。': '放回盒子裡。',
    'Lazer 是拿 Flutter 手写出来的音乐客户端。接哪个平台由 Lua 插件决定， 搜索、歌单、评论、歌词和播放共用同一套核心。': 'Lazer 是用 Flutter 手寫出來的音樂用戶端。接哪個平台由 Lua 外掛決定，搜尋、歌單、評論、歌詞和播放共用同一套核心。',
    '加入 QQ 群': '加入 QQ 群',
    '获取 Lazer': '取得 Lazer',
    '网页版': '網頁版',
    '开发预览版': '開發預覽版',
    '镜像源下载': '鏡像源下載',
    '查看源代码': '檢視原始碼',
    '向下阅读': '向下閱讀',
    '一台播放器。': '一台播放器。',
    '平台，': '平台，',
    '交给插件。': '交給外掛。',
    'Lazer 最早只接一个平台。现在平台这部分整个交给 Lua 插件， 播放、歌词、界面和状态仍然是同一套代码。': 'Lazer 一開始只接一個平台。現在平台這部分整個交給 Lua 外掛，播放、歌詞、介面和狀態仍然是同一套程式碼。',
    '任意音乐平台': '任意音樂平台',
    'Lua 平台插件': 'Lua 平台外掛',
    '原生音频引擎': '原生音訊引擎',
    '可扩展平台': '可擴展平台',
    '核心': '核心',
    '一套播放器，一套共享状态': '一套播放器，一套共享狀態',
    '插件运行时': '外掛執行時',
    '平台适配由插件提供': '平台適配由外掛提供',
    '平台支持': '平台支援',
    '随插件扩展，无需重编译': '隨外掛擴展，無需重新編譯',
    '界面语言': '介面語言',
    '简体中文 / 繁體中文 / 日本語 / English': '簡體中文 / 繁體中文 / 日文 / 英文',
    '02 / SIDE A — 听': '02 / SIDE A — 聽',
    '搜索、评论、切歌，': '搜尋、評論、切歌，',
    '都在同一条链路上。': '都在同一條鏈路上。',
    'Lazer 不替你决定听什么。它只负责把从找到这首歌到声音出来这一段路跑顺， 不绕弯，也不掉拍。': 'Lazer 不替你決定聽什麼。它只負責把從找到這首歌到聲音出來這一段路跑順，不繞彎，也不掉拍。',
    '真实曲库': '真實曲庫',
    '搜索、推荐歌单、私人雷达和每日推荐都有。账号、收藏和播放列表，都存在服务本身。': '搜尋、推薦歌單、私人雷達和每日推薦都有。帳號、收藏和播放清單，都存在服務本身。',
    '深入唱片': '深入唱片',
    '歌手主页有热门歌曲和分页专辑；专辑详情有简介和完整曲目，点名字继续往下翻。': '歌手主頁有熱門歌曲和分頁專輯；專輯詳情有簡介和完整曲目，點名字繼續往下翻。',
    '评论现场': '評論現場',
    '热门和最新评论都能翻页，可以点赞也可以取消。不登录能看，想发言再登录。': '熱門和最新評論都能翻頁，可以按讚也可以取消。不登入能看，想發言再登入。',
    '系统媒体控件': '系統媒體控制項',
    'Windows、macOS、Linux、Android 和 iOS 都接进了系统媒体控件；通知、锁屏和灵动岛跟着当前播放位置走。': 'Windows、macOS、Linux、Android 和 iOS 都接進了系統媒體控制項；通知、鎖屏和靈動島跟著目前播放位置走。',
    '先缓冲，再出声': '先緩衝，再出聲',
    '没缓存的歌先缓冲十秒再开始；已下载和已缓存的照旧秒开。切歌不会再从半拍起头。': '沒快取的歌先緩衝十秒再開始；已下載和已快取的照舊秒開。切歌不會再從半拍起頭。',
    '完整功能说明': '完整功能說明',
    '03 / SIDE B — 歌词': '03 / SIDE B — 歌詞',
    '歌词，': '歌詞，',
    '逐字对齐。': '逐字對齊。',
    '只有正在唱的那一行亮着，其他行往后退。 手翻走之后，它会自己跟回正在播放的位置。': '只有正在唱的那一行亮著，其他行往後退。手翻走之後，它會自己跟回目前播放的位置。',
    '逐字弹簧': '逐字彈簧',
    '解析 LRC 与 YRC，逐字强调，字跟着声音弹。': '解析 LRC 與 YRC，逐字強調，字跟著聲音彈。',
    '35% 焦点带': '35% 焦點帶',
    '渐进遮罩与距离模糊，只把正在唱的那一行拉近。': '漸進遮罩與距離模糊，只把正在唱的那一行拉近。',
    '随手带走': '隨手帶走',
    '字号与字重实时预览，多选复制，或把歌词导出成 PNG。': '字號與字重即時預覽，多選複製，或把歌詞匯出成 PNG。',
    '把整座城市调到静音': '把整座城市調到靜音',
    '只留下心跳还在对拍': '只留下心跳還在對拍',
    '让我把这一句，唱给你听': '讓我把這一句，唱給你聽',
    '光从磁带的缝隙漏进来': '光從磁帶的縫隙漏進來',
    '夜晚终于有了回声': '夜晚終於有了回聲',
    '一套页面，': '一套頁面，',
    '换个摆法。': '換個擺法。',
    '桌面、手机、车机和大屏用的是同一套页面和同一份状态， 只是布局尺度不一样。': '桌面、手機、車機和大屏用的是同一套頁面和同一份狀態，只是佈局尺度不一樣。',
    '桌面': '桌面',
    '侧边栏、完整播放条，DPI 可在 80–175% 之间调。窗口怎么拉，布局都不会乱。': '側邊欄、完整播放條，DPI 可在 80–175% 之間調。視窗怎麼拉，佈局都不會亂。',
    '手机': '手機',
    '底部标签栏和迷你播放器，播放页沉浸显示。单手够得到每个操作。': '底部標籤欄和迷你播放器，播放頁沉浸顯示。單手夠得到每個操作。',
    '车机': '車機',
    '进入后自动放大到 135%，触控目标更宽。路上只看必要的操作。': '進入後自動放大到 135%，觸控目標更寬。路上只看必要的操作。',
    '大屏': '大屏',
    '电视和投影自动切到大屏模式。方向键按位置移动，焦点看得见。': '電視和投影自動切到大屏模式。方向鍵按位置移動，焦點看得見。',
    '看不见的地方，': '看不見的地方，',
    '也算数。': '也算數。',
    '这一版跑在哪些平台、用了什么参数，都写在下面。': '這一版跑在哪些平台、用了什麼參數，都寫在下面。',
    '平台': '平台',
    '简体中文 · 繁體中文 · 日本語 · English': '簡體中文 · 繁體中文 · 日文 · 英文',
    '布局': '佈局',
    '桌面 / 移动 / 车机 / 大屏': '桌面 / 行動 / 車機 / 大屏',
    '浏览背景': '瀏覽背景',
    '默认 30fps，隐藏页面停止绘制': '預設 30fps，隱藏頁面停止繪製',
    '播放背景': '播放背景',
    '跟随屏幕刷新率，帧率与精度独立设置': '跟隨螢幕刷新率，影格率與精度獨立設定',
    '缓存策略': '快取策略',
    '默认保留 50 首，最近或智能淘汰': '預設保留 50 首，最近或智慧淘汰',
    '版本': '版本',
    '授权': '授權',
    '下载': '下載',
    '预发布版本可以下载了。选好平台去 GitHub Releases 拿构建产物； 想自己编译，仓库里有完整的构建步骤。': '預發佈版本可以下載了。選好平台去 GitHub Releases 拿建置產物；想自己編譯，倉庫裡有完整的建置步驟。',
    '前往 Releases': '前往 Releases',
    '查看构建产物': '查看建置產物',
    '预发布版。产物由 GitHub Actions 构建，文件名统一为': '預發佈版。產物由 GitHub Actions 建置，檔名統一為',
    '。': '。',
    '点击链接加入群聊【Take lazer】': '點擊連結加入群聊【Take lazer】',
    '反馈一个问题': '回報一個問題',
    '插件市场': '外掛市集',
    '听歌': '聽歌',
    '文档 ↗': '文件 ↗',
    'QQ 群 ↗': 'QQ 群 ↗'
  },
  ja: {
    'Lazer — 把每一首歌，放回盒子里': 'Lazer — すべての歌を、ケースの中へ。',
    '跳到正文': '本文へスキップ',
    '听': '聴く',
    '歌词': '歌詞',
    '界面': '画面',
    '规格': '仕様',
    '获取': '入手',
    '插件': 'プラグイン',
    '把每一首歌，': 'すべての歌を、',
    '放回盒子里。': 'ケースの中へ。',
    'Lazer 是拿 Flutter 手写出来的音乐客户端。接哪个平台由 Lua 插件决定， 搜索、歌单、评论、歌词和播放共用同一套核心。': 'Lazer は Flutter で手書きされた音楽クライアント。どのサービスにつなぐかは Lua プラグインが決め、検索、プレイリスト、コメント、歌詞、再生はひとつのコアを共有します。',
    '加入 QQ 群': 'QQ グループに参加',
    '获取 Lazer': 'Lazer を入手',
    '网页版': 'Web 版',
    '开发预览版': '開発プレビュー版',
    '镜像源下载': 'ミラーから入手',
    '查看源代码': 'ソースコードを見る',
    '向下阅读': '下へスクロール',
    '一台播放器。': '一台のプレーヤー。',
    '平台，': 'プラットフォームは、',
    '交给插件。': 'プラグインへ。',
    'Lazer 最早只接一个平台。现在平台这部分整个交给 Lua 插件， 播放、歌词、界面和状态仍然是同一套代码。': 'Lazer はもともとひとつのサービスにしかつながっていませんでした。いまはプラットフォーム部分を Lua プラグインに任せ、再生、歌詞、画面、状態は同じコードのままです。',
    '任意音乐平台': '任意の音楽プラットフォーム',
    'Lua 平台插件': 'Lua プラットフォームプラグイン',
    '原生音频引擎': 'ネイティブオーディオエンジン',
    '可扩展平台': '拡張可能なプラットフォーム',
    '核心': 'コア',
    '一套播放器，一套共享状态': 'ひとつのプレーヤー、ひとつの共有状態',
    '插件运行时': 'プラグインランタイム',
    '平台适配由插件提供': 'プラットフォーム適配はプラグインが提供',
    '平台支持': 'プラットフォーム対応',
    '随插件扩展，无需重编译': 'プラグインで拡張、再ビルド不要',
    '界面语言': '言語',
    '简体中文 / 繁體中文 / 日本語 / English': '簡体字中国語 / 繁体字中国語 / 日本語 / English',
    '02 / SIDE A — 听': '02 / SIDE A — 聴く',
    '搜索、评论、切歌，': '検索、コメント、曲送り、',
    '都在同一条链路上。': 'どれも同じ経路の上。',
    'Lazer 不替你决定听什么。它只负责把从找到这首歌到声音出来这一段路跑顺， 不绕弯，也不掉拍。': '何を聴くかは、こちらで決めません。この曲を見つけてから音が出るまでの道のりを、遠回りも遅れもなく通すだけです。',
    '真实曲库': 'リアルなカタログ',
    '搜索、推荐歌单、私人雷达和每日推荐都有。账号、收藏和播放列表，都存在服务本身。': '検索、おすすめプレイリスト、プライベートレーダー、デイリーレコメンド。アカウント、お気に入り、プレイリストはサービス側にあります。',
    '深入唱片': '盤面の奥へ',
    '歌手主页有热门歌曲和分页专辑；专辑详情有简介和完整曲目，点名字继续往下翻。': 'アーティストページには人気曲とページ送りのアルバム。アルバム詳細には紹介と全曲目があり、名前を押せばそのまま先へ進めます。',
    '评论现场': 'コメントの現場',
    '热门和最新评论都能翻页，可以点赞也可以取消。不登录能看，想发言再登录。': '人気コメントも最新コメントもページ送りでき、いいねも取り消せます。ログインせずに読めて、書き込むときだけログイン。',
    '系统媒体控件': 'システムメディアコントロール',
    'Windows、macOS、Linux、Android 和 iOS 都接进了系统媒体控件；通知、锁屏和灵动岛跟着当前播放位置走。': 'Windows、macOS、Linux、Android、iOS のシステムメディアコントロールに対応。通知、ロック画面、Dynamic Island が現在の再生位置を追いかけます。',
    '先缓冲，再出声': 'ためてから鳴らす',
    '没缓存的歌先缓冲十秒再开始；已下载和已缓存的照旧秒开。切歌不会再从半拍起头。': 'キャッシュのない曲は 10 秒ためてから再生。ダウンロード済みとキャッシュ済みはこれまで通りすぐ開きます。曲を変えても半拍遅れて始まることはありません。',
    '完整功能说明': 'すべての機能を見る',
    '03 / SIDE B — 歌词': '03 / SIDE B — 歌詞',
    '歌词，': '歌詞は、',
    '逐字对齐。': '一文字ずつ揃う。',
    '只有正在唱的那一行亮着，其他行往后退。 手翻走之后，它会自己跟回正在播放的位置。': 'いま歌われている一行だけが光り、ほかの行は後ろへ下がります。手でめくっても、再生中の位置に自然と戻ります。',
    '逐字弹簧': '一文字ずつのスプリング',
    '解析 LRC 与 YRC，逐字强调，字跟着声音弹。': 'LRC と YRC を解析し、一文字ずつ強調。文字が音に合わせて弾みます。',
    '35% 焦点带': '35% フォーカスバンド',
    '渐进遮罩与距离模糊，只把正在唱的那一行拉近。': 'グラデーションのマスクと距離のぼかしで、いま歌われている一行だけを引き寄せます。',
    '随手带走': '気軽に持ち出せる',
    '字号与字重实时预览，多选复制，或把歌词导出成 PNG。': '文字サイズと太さをその場でプレビュー。複数選択でコピー、歌詞を PNG に書き出せます。',
    '把整座城市调到静音': '街じゅうを消音にして',
    '只留下心跳还在对拍': '心臓の音だけが拍を刻む',
    '让我把这一句，唱给你听': 'この一行を、君に歌わせて',
    '光从磁带的缝隙漏进来': '光がカセットの隙間から漏れてくる',
    '夜晚终于有了回声': '夜にようやく残響が生まれる',
    '一套页面，': 'ひとつの画面に、',
    '换个摆法。': '置き方だけ変える。',
    '桌面、手机、车机和大屏用的是同一套页面和同一份状态， 只是布局尺度不一样。': 'デスクトップ、スマホ、カーナビ、大画面は同じページと同じ状態を使い、違うのはレイアウトの尺度だけです。',
    '桌面': 'デスクトップ',
    '侧边栏、完整播放条，DPI 可在 80–175% 之间调。窗口怎么拉，布局都不会乱。': 'サイドバー、フル再生バー、DPI は 80–175% で調整できます。ウィンドウをどう変えてもレイアウトは崩れません。',
    '手机': 'スマホ',
    '底部标签栏和迷你播放器，播放页沉浸显示。单手够得到每个操作。': '下部タブバーとミニプレーヤー、没入型の再生画面。どの操作にも片手で届きます。',
    '车机': 'カーナビ',
    '进入后自动放大到 135%，触控目标更宽。路上只看必要的操作。': '起動すると 135% に拡大し、タッチターゲットも広くなります。運転中は必要な操作だけ。',
    '大屏': '大画面',
    '电视和投影自动切到大屏模式。方向键按位置移动，焦点看得见。': 'テレビとプロジェクターは自動で大画面モードに。方向キーは位置で移動し、フォーカスは見えたままです。',
    '看不见的地方，': '見えないところも、',
    '也算数。': 'ちゃんと効いてる。',
    '这一版跑在哪些平台、用了什么参数，都写在下面。': 'この版がどのプラットフォームで動き、どんな数値で動いているかを並べておきます。',
    '平台': 'プラットフォーム',
    '简体中文 · 繁體中文 · 日本語 · English': '簡体字中国語 · 繁体字中国語 · 日本語 · English',
    '布局': 'レイアウト',
    '桌面 / 移动 / 车机 / 大屏': 'デスクトップ / モバイル / カーナビ / 大画面',
    '浏览背景': '閲覧時の背景',
    '默认 30fps，隐藏页面停止绘制': '既定 30fps、非表示のページは描画停止',
    '播放背景': '再生時の背景',
    '跟随屏幕刷新率，帧率与精度独立设置': '画面のリフレッシュレートに追従、フレームレートと精度は個別設定',
    '缓存策略': 'キャッシュ戦略',
    '默认保留 50 首，最近或智能淘汰': '既定で 50 曲を保持、最近順またはスマートに削除',
    '版本': 'バージョン',
    '授权': 'ライセンス',
    '下载': 'ダウンロード',
    '预发布版本可以下载了。选好平台去 GitHub Releases 拿构建产物； 想自己编译，仓库里有完整的构建步骤。': 'プレリリース版がダウンロードできます。プラットフォームを選んで GitHub Releases からビルドを受け取ってください。自分でビルドする手順もリポジトリにあります。',
    '前往 Releases': 'Releases へ',
    '查看构建产物': 'ビルド成果物',
    '预发布版。产物由 GitHub Actions 构建，文件名统一为': 'プレリリース版。成果物は GitHub Actions でビルドされ、ファイル名はすべて',
    '。': '。',
    '点击链接加入群聊【Take lazer】': 'クリックしてグループチャット「Take lazer」に参加',
    '反馈一个问题': '問題を報告',
    '插件市场': 'プラグインマーケット',
    '听歌': '聴く',
    '文档 ↗': 'ドキュメント ↗',
    'QQ 群 ↗': 'QQ グループ ↗'
  },
  en: {
    'Lazer — 把每一首歌，放回盒子里': 'Lazer — Put every song back in its case.',
    '跳到正文': 'Skip to content',
    '听': 'Listen',
    '歌词': 'Lyrics',
    '界面': 'Interface',
    '规格': 'Specs',
    '获取': 'Get',
    '插件': 'Plugins',
    '把每一首歌，': 'Put every song,',
    '放回盒子里。': 'back in its case.',
    'Lazer 是拿 Flutter 手写出来的音乐客户端。接哪个平台由 Lua 插件决定， 搜索、歌单、评论、歌词和播放共用同一套核心。': 'Lazer is a music client handwritten in Flutter. Lua plugins decide which service it talks to; search, playlists, comments, lyrics, and playback share one core.',
    '加入 QQ 群': 'Join QQ Group',
    '获取 Lazer': 'Get Lazer',
    '网页版': 'Web player',
    '开发预览版': 'Developer preview',
    '镜像源下载': 'Mirror Download',
    '查看源代码': 'View source',
    '向下阅读': 'Scroll down',
    '一台播放器。': 'One player.',
    '平台，': 'Platforms,\u00A0',
    '交给插件。': 'handed to plugins.',
    'Lazer 最早只接一个平台。现在平台这部分整个交给 Lua 插件， 播放、歌词、界面和状态仍然是同一套代码。': 'Lazer started with a single platform. Now the platform layer belongs to Lua plugins, while playback, lyrics, interface, and state stay in the same code.',
    '任意音乐平台': 'Any music platform',
    'Lua 平台插件': 'Lua platform plugin',
    '原生音频引擎': 'Native audio engine',
    '可扩展平台': 'Extensible platforms',
    '核心': 'Core',
    '一套播放器，一套共享状态': 'One player, one shared state',
    '插件运行时': 'Plugin runtime',
    '平台适配由插件提供': 'Platform adapters provided by plugins',
    '平台支持': 'Platform support',
    '随插件扩展，无需重编译': 'Extend with plugins, no rebuild required',
    '界面语言': 'Language',
    '简体中文 / 繁體中文 / 日本語 / English': 'Simplified Chinese / Traditional Chinese / Japanese / English',
    '02 / SIDE A — 听': '02 / SIDE A — LISTEN',
    '搜索、评论、切歌，': 'Search, comments, skipping —',
    '都在同一条链路上。': 'all on one path.',
    'Lazer 不替你决定听什么。它只负责把从找到这首歌到声音出来这一段路跑顺， 不绕弯，也不掉拍。': 'Lazer does not decide what you listen to. It just keeps the road from finding a song to hearing it straight, with no detours and no dropped beats.',
    '真实曲库': 'A real catalogue',
    '搜索、推荐歌单、私人雷达和每日推荐都有。账号、收藏和播放列表，都存在服务本身。': 'Search, recommended playlists, private radar, and daily mixes. Accounts, favorites, and playlists live on the service itself.',
    '深入唱片': 'Inside the record',
    '歌手主页有热门歌曲和分页专辑；专辑详情有简介和完整曲目，点名字继续往下翻。': 'Artist pages list popular songs and paged albums; album pages carry a bio and the full tracklist. Tap a name and keep going.',
    '评论现场': 'The comment field',
    '热门和最新评论都能翻页，可以点赞也可以取消。不登录能看，想发言再登录。': 'Top and latest comments both page; likes toggle off again. Read without signing in, sign in when you want to say something.',
    '系统媒体控件': 'System media controls',
    'Windows、macOS、Linux、Android 和 iOS 都接进了系统媒体控件；通知、锁屏和灵动岛跟着当前播放位置走。': 'Windows, macOS, Linux, Android, and iOS system media controls; notifications, lock screens, and Dynamic Island follow the current playback position.',
    '先缓冲，再出声': 'Buffer first, then sound',
    '没缓存的歌先缓冲十秒再开始；已下载和已缓存的照旧秒开。切歌不会再从半拍起头。': 'Uncached songs buffer ten seconds before they start; downloaded and cached tracks still open instantly. No more coming in half a beat late.',
    '完整功能说明': 'Full feature notes',
    '03 / SIDE B — 歌词': '03 / SIDE B — LYRICS',
    '歌词，': 'Lyrics,',
    '逐字对齐。': 'word by word.',
    '只有正在唱的那一行亮着，其他行往后退。 手翻走之后，它会自己跟回正在播放的位置。': 'Only the line being sung stays lit; the rest fall back. Scroll away by hand and it finds its way back to the current position.',
    '逐字弹簧': 'Word-by-word spring',
    '解析 LRC 与 YRC，逐字强调，字跟着声音弹。': 'LRC and YRC parsing with word-by-word emphasis, so each character moves with the sound.',
    '35% 焦点带': '35% focus band',
    '渐进遮罩与距离模糊，只把正在唱的那一行拉近。': 'A progressive mask and distance blur pull only the line being sung closer.',
    '随手带走': 'Take it with you',
    '字号与字重实时预览，多选复制，或把歌词导出成 PNG。': 'Preview size and weight in real time, copy multiple lines, or export lyrics as PNG.',
    '把整座城市调到静音': 'Turn the whole city to mute',
    '只留下心跳还在对拍': 'Leave only the heartbeat keeping time',
    '让我把这一句，唱给你听': 'Let me sing this line to you',
    '光从磁带的缝隙漏进来': 'Light leaks through the seam of the tape',
    '夜晚终于有了回声': 'At last, the night has an echo',
    '一套页面，': 'One interface,',
    '换个摆法。': 'laid out differently.',
    '桌面、手机、车机和大屏用的是同一套页面和同一份状态， 只是布局尺度不一样。': 'Desktop, phone, car display, and big screen run the same pages and the same state; only the layout scale changes.',
    '桌面': 'Desktop',
    '侧边栏、完整播放条，DPI 可在 80–175% 之间调。窗口怎么拉，布局都不会乱。': 'Sidebar, full transport bar, DPI adjustable between 80–175%. However the window is sized, the layout holds.',
    '手机': 'Phone',
    '底部标签栏和迷你播放器，播放页沉浸显示。单手够得到每个操作。': 'Bottom tab bar and mini player, plus an immersive Now Playing page. Every action within one thumb.',
    '车机': 'Car display',
    '进入后自动放大到 135%，触控目标更宽。路上只看必要的操作。': 'Opens scaled to 135% with wider touch targets. On the road, only the essential controls.',
    '大屏': 'Big screen',
    '电视和投影自动切到大屏模式。方向键按位置移动，焦点看得见。': 'TVs and projectors switch to big-screen mode on their own. The D-pad moves by position, and focus stays visible.',
    '看不见的地方，': 'The parts you can’t see,',
    '也算数。': 'count too.',
    '这一版跑在哪些平台、用了什么参数，都写在下面。': 'Which platforms this build runs on, and the settings behind it, are listed below.',
    '平台': 'Platform',
    '简体中文 · 繁體中文 · 日本語 · English': 'Simplified Chinese · Traditional Chinese · Japanese · English',
    '布局': 'Layout',
    '桌面 / 移动 / 车机 / 大屏': 'Desktop / Mobile / Car / Big screen',
    '浏览背景': 'Browse background',
    '默认 30fps，隐藏页面停止绘制': '30fps by default; hidden pages stop drawing',
    '播放背景': 'Playback background',
    '跟随屏幕刷新率，帧率与精度独立设置': 'Follows the screen refresh rate; frame rate and precision set independently',
    '缓存策略': 'Cache policy',
    '默认保留 50 首，最近或智能淘汰': 'Keep 50 tracks by default, evict by recency or smart rules',
    '版本': 'Version',
    '授权': 'License',
    '下载': 'Download',
    '预发布版本可以下载了。选好平台去 GitHub Releases 拿构建产物； 想自己编译，仓库里有完整的构建步骤。': 'The pre-release is out. Pick your platform and grab the artifact from GitHub Releases; if you would rather build it yourself, the repo has the full steps.',
    '前往 Releases': 'Go to Releases',
    '查看构建产物': 'View build artifacts',
    '预发布版。产物由 GitHub Actions 构建，文件名统一为': 'Pre-release. Artifacts are built by GitHub Actions, all named',
    '。': '.',
    '点击链接加入群聊【Take lazer】': 'Click to join the group chat [Take lazer]',
    '反馈一个问题': 'Report an issue',
    '插件市场': 'Plugin Market',
    '听歌': 'Listen',
    '文档 ↗': 'Docs ↗',
    'QQ 群 ↗': 'QQ Group ↗'
  }
};

const ATTRIBUTE_TRANSLATIONS = {
  'zh-Hant': {
    'Lazer 首页': 'Lazer 首頁',
    '主导航': '主導覽',
    'CD 折射主视觉': 'CD 折射主視覺',
    '点击链接加入群聊【Take lazer】': '點擊連結加入群聊【Take lazer】',
    '回到顶部': '回到頂部'
  },
  ja: {
    'Lazer 首页': 'Lazer ホーム',
    '主导航': 'メインナビゲーション',
    'CD 折射主视觉': 'CD リフラクションのメインビジュアル',
    '点击链接加入群聊【Take lazer】': 'クリックしてグループチャット「Take lazer」に参加',
    '回到顶部': 'トップへ戻る'
  },
  en: {
    'Lazer 首页': 'Lazer home',
    '主导航': 'Main navigation',
    'CD 折射主视觉': 'CD refraction key visual',
    '点击链接加入群聊【Take lazer】': 'Click to join the group chat [Take lazer]',
    '回到顶部': 'Back to top'
  }
};

const SUPPORTED_LANGUAGES = ['zh-CN', 'zh-Hant', 'ja', 'en'];
const textNodes = [];
const attributeNodes = [];

function collectTranslatableContent() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'TEXTAREA'].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (parent.closest('.lang-menu')) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const value = node.nodeValue;
    const leading = value.slice(0, value.length - value.trimStart().length);
    const trailing = value.slice(value.trimEnd().length);
    const source = value.slice(leading.length, value.length - trailing.length);
    textNodes.push({
      node,
      source,
      core: value.replace(/\s+/g, ' ').trim(),
      leading,
      trailing
    });
  }

  document.querySelectorAll('[aria-label], [title]').forEach((element) => {
    ['aria-label', 'title'].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value || !value.trim()) return;
      attributeNodes.push({
        element,
        attribute,
        core: value.trim(),
        leading: value.slice(0, value.length - value.trimStart().length),
        trailing: value.slice(value.trimEnd().length)
      });
    });
  });
}

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

function translateValue(core, source, language, dictionary) {
  if (language === 'zh-CN') return source;
  return dictionary[core] !== undefined ? dictionary[core] : source;
}

function applyLanguage(language, options = {}) {
  if (!SUPPORTED_LANGUAGES.includes(language)) language = 'zh-CN';
  const dictionary = TRANSLATIONS[language] || {};
  const meta = META[language] || META['zh-CN'];

  document.documentElement.lang = language;
  document.documentElement.dataset.language = language;

  textNodes.forEach(({ node, source, core, leading, trailing }) => {
    node.nodeValue = leading + translateValue(core, source, language, dictionary) + trailing;
  });

  const attributeDictionary = ATTRIBUTE_TRANSLATIONS[language] || {};
  attributeNodes.forEach(({ element, attribute, core, leading, trailing }) => {
    element.setAttribute(attribute, leading + translateValue(core, core, language, attributeDictionary) + trailing);
  });

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
    }[language]);
  }

  const currentLabel = document.querySelector('.lang-current');
  if (currentLabel) currentLabel.textContent = LANGUAGE_LABELS[language];

  document.querySelectorAll('.lang-options [data-lang]').forEach((button) => {
    button.setAttribute('aria-selected', String(button.dataset.lang === language));
  });

  try {
    localStorage.setItem('lazer-language', language);
  } catch (error) {
    /* Storage can be unavailable in private browsing; the page still switches. */
  }

  if (options.updateUrl !== false) {
    const url = new URL(window.location.href);
    if (language === 'zh-CN') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', language);
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }
}

function closeLanguageMenu() {
  const menu = document.querySelector('.lang-menu');
  const trigger = document.querySelector('.lang-trigger');
  if (!menu || !trigger) return;
  menu.classList.remove('is-open');
  trigger.setAttribute('aria-expanded', 'false');
}

function initLanguageMenu() {
  const menu = document.querySelector('.lang-menu');
  const trigger = document.querySelector('.lang-trigger');
  if (!menu || !trigger) return;

  trigger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      applyLanguage(button.dataset.lang);
      closeLanguageMenu();
      trigger.focus();
    });
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) closeLanguageMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLanguageMenu();
      trigger.focus();
    }
  });
}

function init() {
  collectTranslatableContent();
  initLanguageMenu();

  let saved = null;
  try {
    saved = localStorage.getItem('lazer-language');
  } catch (error) {
    /* Ignore unavailable storage. */
  }

  const queryLanguage = normalizeLanguage(new URLSearchParams(window.location.search).get('lang'));
  const initialLanguage = queryLanguage || normalizeLanguage(saved) || 'zh-CN';
  applyLanguage(initialLanguage, { updateUrl: false });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
