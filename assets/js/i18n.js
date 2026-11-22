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
    description: 'Lazer 是一台用 Flutter 手写的多平台音乐客户端，通过 Lua 插件接入不同音乐平台。真实曲库、逐字歌词、评论与播放，共用一套核心。'
  },
  'zh-Hant': {
    title: 'Lazer — 把每一首歌，放回盒子裡',
    description: 'Lazer 是一台用 Flutter 手寫的多平台音樂用戶端，透過 Lua 外掛接入不同音樂平台。真實曲庫、逐字歌詞、評論與播放，共用一套核心。'
  },
  ja: {
    title: 'Lazer — すべての歌を、ケースの中へ。',
    description: 'Lazer は Flutter で手書きされたマルチプラットフォーム音楽クライアント。Lua プラグインでさまざまな音楽サービスに接続します。リアルなカタログ、一文字ずつの歌詞、コメント、再生をひとつのコアで。'
  },
  en: {
    title: 'Lazer — Put every song back in its case.',
    description: 'Lazer is a multi-platform music client, handwritten in Flutter. Lua plugins connect it to different music services, with a real catalogue, word-by-word lyrics, comments, and playback sharing one core.'
  }
};

const TRANSLATIONS = {
  'zh-Hant': {
    '跳到正文': '跳到正文',
    '听': '聽',
    '歌词': '歌詞',
    '界面': '介面',
    '规格': '規格',
    '获取': '取得',
    '插件': '外掛',
    '插件市场': '外掛市集',
    '把每一首歌，': '把每一首歌，',
    '放回盒子里。': '放回盒子裡。',
    'Lazer 是一台用 Flutter 手写的网易云音乐客户端。 真实曲库、逐字歌词、评论与播放，从服务本身直达扬声器。': 'Lazer 是一台用 Flutter 手寫的網易雲音樂用戶端。真實曲庫、逐字歌詞、評論與播放，從服務本身直達喇叭。',
    '加入 QQ 群': '加入 QQ 群',
    '获取 Lazer': '取得 Lazer',
    '网页版': '網頁版',
    '开发预览版': '開發預覽版',
    '镜像源下载': '鏡像源下載',
    '查看源代码': '檢視原始碼',
    '向下阅读': '向下閱讀',
    '没有第三方网关。': '沒有第三方閘道。',
    '只有一条直接的': '只有一條直接的',
    '信号链。': '訊號鏈。',
    'WEAPI / EAPI 就住在客户端里。搜索、歌单、歌手、专辑、评论与歌词， 都从服务本身取回；再交给原生音频引擎，按下播放键，声音就已经在路上。': 'WEAPI / EAPI 就住在用戶端裡。搜尋、歌單、歌手、專輯、評論與歌詞，都從服務本身取回；再交給原生音訊引擎，按下播放鍵，聲音就已經在路上。',
    '网易云音乐服务': '網易雲音樂服務',
    'WEAPI / EAPI 原生实现': 'WEAPI / EAPI 原生實作',
    '原生音频引擎': '原生音訊引擎',
    '第三方网关': '第三方閘道',
    '平台': '平台',
    '界面语言': '介面語言',
    '简体中文 / 繁體中文 / 日本語 / English': '簡體中文 / 繁體中文 / 日文 / 英文',
    '页面与状态': '頁面與狀態',
    '一套页面树，一套共享状态': '一套頁面樹，一套共享狀態',
    '播放链路': '播放鏈路',
    '第三方网关中转': '第三方閘道轉送',
    '02 / SIDE A — 听': '02 / SIDE A — 聽',
    '所有需要的，': '所有需要的，',
    '都在播放链路里。': '都在播放鏈路裡。',
    '从第一下搜索，到最后一秒缓存。Lazer 不替你决定听什么， 只把每一次寻找、播放和停留，做得足够顺手。': '從第一下搜尋，到最後一秒快取。Lazer 不替你決定聽什麼，只把每一次尋找、播放和停留，做得足夠順手。',
    '真实曲库': '真實曲庫',
    '搜索、推荐歌单、私人雷达与每日推荐。账号、收藏与播放列表，都落在真实服务上。': '搜尋、推薦歌單、私人雷達與每日推薦。帳號、收藏與播放清單，都落在真實服務上。',
    '深入唱片': '深入唱片',
    '歌手主页带热门歌曲与分页专辑；专辑详情有简介和完整曲目，点名字就继续往下走。': '歌手主頁帶熱門歌曲與分頁專輯；專輯詳情有簡介和完整曲目，點名字就繼續往下走。',
    '评论现场': '評論現場',
    '热门与最新评论、分页加载、点赞与取消点赞。游客可以看，想说话就登录。': '熱門與最新評論、分頁載入、按讚與取消按讚。遊客可以看，想說話就登入。',
    '每个系统都认识它': '每個系統都認識它',
    'Windows、macOS、Linux、Android 与 iOS 系统媒体控件；通知、锁屏与灵动岛跟着唱到哪一句。': 'Windows、macOS、Linux、Android 與 iOS 系統媒體控制項；通知、鎖屏與靈動島跟著唱到哪一句。',
    '先把开头留住': '先把開頭留住',
    '没缓存的歌先攒够十秒再开口；已下载和已缓存的歌照旧秒开。切歌不再从半拍开始。': '沒快取的歌先攢夠十秒再開口；已下載和已快取的歌照舊秒開。切歌不再從半拍開始。',
    '完整功能说明': '完整功能說明',
    '03 / SIDE B — 歌词': '03 / SIDE B — 歌詞',
    '歌词，': '歌詞，',
    '不是字幕。': '不是字幕。',
    '该亮的那一句留在焦点里。其他字退到后面，不抢拍、不迷路。 手动翻过歌词，它会自己回到音乐身边。': '該亮的那一句留在焦點裡。其他字退到後面，不搶拍、不迷路。手動翻過歌詞，它會自己回到音樂身邊。',
    '逐字弹簧': '逐字彈簧',
    'LRC / YRC 解析，逐字强调，让字跟着声音的弹性走。': 'LRC / YRC 解析，逐字強調，讓字跟著聲音的彈性走。',
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
    '换一种姿势。': '換一種姿勢。',
    '桌面、手机、车机与大屏共享同一套页面与状态。 不是四份互相追赶的界面，而是同一张唱片，换一个摆放方式。': '桌面、手機、車機與大屏共享同一套頁面與狀態。不是四份互相追趕的介面，而是同一張唱片，換一個擺放方式。',
    '桌面': '桌面',
    '侧边栏、完整播放条、可调的 80–175% DPI。窗口多大，布局都保持清醒。': '側邊欄、完整播放條、可調的 80–175% DPI。視窗多大，佈局都保持清醒。',
    '手机': '手機',
    '底部标签栏与迷你播放器，沉浸式正在播放页。单手也能够到每个动作。': '底部標籤欄與迷你播放器，沉浸式正在播放頁。單手也能夠到每個動作。',
    '车机': '車機',
    '进入即放大到 135%，触控目标更宽。路况之外，只留下必要的操作。': '進入即放大到 135%，觸控目標更寬。路況之外，只留下必要的操作。',
    '大屏': '大屏',
    '电视与投影自动进入大屏模式。方向键按位置移动，焦点永远看得见。': '電視與投影自動進入大屏模式。方向鍵按位置移動，焦點永遠看得見。',
    '看不见的地方，': '看不見的地方，',
    '也算数。': '也算數。',
    '不是堆参数，是把每个会影响听感的细节，单独放到台面上。': '不是堆參數，是把每個會影響聽感的細節，單獨放到台面上。',
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
    '把它带回': '把它帶回',
    '你的桌面。': '你的桌面。',
    '预发布版本已准备好。选择你的平台，从 GitHub Releases 获取构建产物； 需要自行编译时，仓库里也有完整的构建说明。': '預發佈版本已準備好。選擇你的平台，從 GitHub Releases 取得建置產物；需要自行編譯時，倉庫裡也有完整的建置說明。',
    '前往 Releases': '前往 Releases',
    '查看构建产物': '查看建置產物',
    '预发布版。产物由 GitHub Actions 构建，文件名统一为': '預發佈版。產物由 GitHub Actions 建置，檔名統一為',
    '点击链接加入群聊【Take lazer】': '點擊連結加入群聊【Take lazer】',
    '反馈一个问题': '回報一個問題',
    '听歌': '聽歌',
    '文档 ↗': '文件 ↗',
    'Lazer 是一台用 Flutter 手写的音乐客户端。通过 Lua 插件接入不同平台， 真实曲库、逐字歌词、评论与播放，共用一套核心。': 'Lazer 是一台用 Flutter 手寫的音樂用戶端。透過 Lua 外掛接入不同平台，真實曲庫、逐字歌詞、評論與播放，共用一套核心。',
    '一台播放器。': '一台播放器。',
    '平台，': '平台，',
    '交给插件。': '交給外掛。',
    'Lazer 已经从一个单平台客户端，长成通过 Lua 插件接入多个平台的播放器。 平台能力交给插件，播放、歌词、界面与状态共用同一套核心。': 'Lazer 已經從一個單平台用戶端，長成透過 Lua 外掛接入多個平台的播放器。平台能力交給外掛，播放、歌詞、介面與狀態共用同一套核心。',
    '任意音乐平台': '任意音樂平台',
    'Lua 平台插件': 'Lua 平台外掛',
    '可扩展平台': '可擴展平台',
    '核心': '核心',
    '插件运行时': '外掛執行時',
    '平台支持': '平台支援',
    '一套播放器，一套共享状态': '一套播放器，一套共享狀態',
    '平台适配由插件提供': '平台適配由外掛提供',
    '随插件扩展，无需重编译': '隨外掛擴展，無需重新編譯',
    'QQ 群 ↗': 'QQ 群 ↗'
  },
  ja: {
    '跳到正文': '本文へスキップ',
    '听': '聴く',
    '歌词': '歌詞',
    '界面': '画面',
    '规格': '仕様',
    '获取': '入手',
    '插件': 'プラグイン',
    '插件市场': 'プラグインマーケット',
    '把每一首歌，': 'すべての歌を、',
    '放回盒子里。': 'ケースの中へ。',
    'Lazer 是一台用 Flutter 手写的网易云音乐客户端。 真实曲库、逐字歌词、评论与播放，从服务本身直达扬声器。': 'Lazer は Flutter で手書きされた NetEase Cloud Music クライアント。リアルなカタログ、一文字ずつの歌詞、コメント、再生まで、サービスからスピーカーへ直接届きます。',
    '加入 QQ 群': 'QQ グループに参加',
    '获取 Lazer': 'Lazer を入手',
    '网页版': 'Web 版',
    '开发预览版': '開発プレビュー版',
    '镜像源下载': 'ミラーから入手',
    '查看源代码': 'ソースコードを見る',
    '向下阅读': '下へスクロール',
    '没有第三方网关。': 'サードパーティのゲートウェイはありません。',
    '只有一条直接的': '直接つながる',
    '信号链。': '信号経路だけ。',
    'WEAPI / EAPI 就住在客户端里。搜索、歌单、歌手、专辑、评论与歌词， 都从服务本身取回；再交给原生音频引擎，按下播放键，声音就已经在路上。': 'WEAPI / EAPI はクライアントの中にいます。検索、プレイリスト、アーティスト、アルバム、コメント、歌詞はすべてサービスから直接取得し、ネイティブのオーディオエンジンへ。再生ボタンを押せば、音はもう届いています。',
    '网易云音乐服务': 'NetEase Cloud Music サービス',
    'WEAPI / EAPI 原生实现': 'WEAPI / EAPI ネイティブ実装',
    '原生音频引擎': 'ネイティブオーディオエンジン',
    '第三方网关': 'サードパーティゲートウェイ',
    '平台': 'プラットフォーム',
    '界面语言': '言語',
    '简体中文 / 繁體中文 / 日本語 / English': '簡体字中国語 / 繁体字中国語 / 日本語 / English',
    '页面与状态': 'ページと状態',
    '一套页面树，一套共享状态': 'ひとつのページツリー、ひとつの共有状態',
    '播放链路': '再生経路',
    '第三方网关中转': 'サードパーティゲートウェイ経由',
    '02 / SIDE A — 听': '02 / SIDE A — 聴く',
    '所有需要的，': '必要なものは、',
    '都在播放链路里。': 'すべて再生経路の中に。',
    '从第一下搜索，到最后一秒缓存。Lazer 不替你决定听什么， 只把每一次寻找、播放和停留，做得足够顺手。': '最初の検索から、最後の一秒のキャッシュまで。何を聴くかは決めない。探す、再生する、立ち止まる。その一つひとつを、ただ心地よく。',
    '真实曲库': 'リアルなカタログ',
    '搜索、推荐歌单、私人雷达与每日推荐。账号、收藏与播放列表，都落在真实服务上。': '検索、おすすめプレイリスト、プライベートレーダー、デイリーレコメンド。アカウント、お気に入り、プレイリストも、すべて本物のサービス上に。',
    '深入唱片': '盤面の奥へ',
    '歌手主页带热门歌曲与分页专辑；专辑详情有简介和完整曲目，点名字就继续往下走。': 'アーティストページには人気曲とページ送りのアルバム。アルバム詳細には紹介と全曲目。名前を押せば、そのまま奥へ。',
    '评论现场': 'コメントの現場',
    '热门与最新评论、分页加载、点赞与取消点赞。游客可以看，想说话就登录。': '人気コメントと最新コメント、ページ送り、いいねと取り消し。ゲストでも読める。話したければログイン。',
    '每个系统都认识它': 'どの OS にも馴染む',
    'Windows、macOS、Linux、Android 与 iOS 系统媒体控件；通知、锁屏与灵动岛跟着唱到哪一句。': 'Windows、macOS、Linux、Android、iOS のシステムメディアコントロール。通知、ロック画面、Dynamic Island が、歌われている一行を追いかけます。',
    '先把开头留住': 'イントロを先に確保',
    '没缓存的歌先攒够十秒再开口；已下载和已缓存的歌照旧秒开。切歌不再从半拍开始。': 'キャッシュのない曲は、10 秒分をためてから再生。ダウンロード済みとキャッシュ済みはこれまで通りすぐに開く。曲を変えても、半拍遅れて始まらない。',
    '完整功能说明': 'すべての機能を見る',
    '03 / SIDE B — 歌词': '03 / SIDE B — 歌詞',
    '歌词，': '歌詞は、',
    '不是字幕。': '字幕じゃない。',
    '该亮的那一句留在焦点里。其他字退到后面，不抢拍、不迷路。 手动翻过歌词，它会自己回到音乐身边。': '光るべき一行はフォーカスの中に。ほかの文字は後ろへ退がり、拍子を奪わず、迷わない。手で歌詞をめくっても、音楽のそばへ自然に戻ります。',
    '逐字弹簧': '一文字ずつのスプリング',
    'LRC / YRC 解析，逐字强调，让字跟着声音的弹性走。': 'LRC / YRC を解析し、一文字ずつ強調。文字が音の弾みに合わせて動きます。',
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
    '换一种姿势。': '別の姿勢を。',
    '桌面、手机、车机与大屏共享同一套页面与状态。 不是四份互相追赶的界面，而是同一张唱片，换一个摆放方式。': 'デスクトップ、スマホ、カーナビ、大画面が同じページと状態を共有。四つの UI が追いかけ合うのではなく、同じ一枚のレコードを置き方を変えるだけ。',
    '桌面': 'デスクトップ',
    '侧边栏、完整播放条、可调的 80–175% DPI。窗口多大，布局都保持清醒。': 'サイドバー、フル再生バー、80–175% の DPI 調整。ウィンドウがどう変わっても、レイアウトは冷静なまま。',
    '手机': 'スマホ',
    '底部标签栏与迷你播放器，沉浸式正在播放页。单手也能够到每个动作。': '下部タブバーとミニプレーヤー、没入型の再生画面。片手でもすべての操作に届きます。',
    '车机': 'カーナビ',
    '进入即放大到 135%，触控目标更宽。路况之外，只留下必要的操作。': '起動すると 135% に拡大し、タッチターゲットも広く。道路の先には、必要な操作だけ。',
    '大屏': '大画面',
    '电视与投影自动进入大屏模式。方向键按位置移动，焦点永远看得见。': 'テレビとプロジェクターは自動で大画面モードに。方向キーは位置で移動し、フォーカスはいつも見える。',
    '看不见的地方，': '見えないところも、',
    '也算数。': 'ちゃんと効いてる。',
    '不是堆参数，是把每个会影响听感的细节，单独放到台面上。': 'スペックを並べるのではなく、聴き心地に影響する細部を一つずつ台の上へ。',
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
    '把它带回': '持ち帰ろう、',
    '你的桌面。': '君のデスクトップへ。',
    '预发布版本已准备好。选择你的平台，从 GitHub Releases 获取构建产物； 需要自行编译时，仓库里也有完整的构建说明。': 'プレリリース版の準備ができました。プラットフォームを選んで GitHub Releases からビルドを受け取れます。自分でビルドする場合の手順もリポジトリに揃っています。',
    '前往 Releases': 'Releases へ',
    '查看构建产物': 'ビルド成果物',
    '预发布版。产物由 GitHub Actions 构建，文件名统一为': 'プレリリース版。成果物は GitHub Actions でビルドされ、ファイル名はすべて',
    '点击链接加入群聊【Take lazer】': 'クリックしてグループチャット「Take lazer」に参加',
    '反馈一个问题': '問題を報告',
    '听歌': '聴く',
    '文档 ↗': 'ドキュメント ↗',
    'Lazer 是一台用 Flutter 手写的音乐客户端。通过 Lua 插件接入不同平台， 真实曲库、逐字歌词、评论与播放，共用一套核心。': 'Lazer は Flutter で手書きされた音楽クライアント。Lua プラグインでさまざまなプラットフォームに接続し、リアルなカタログ、一文字ずつの歌詞、コメント、再生をひとつのコアで提供します。',
    '一台播放器。': '一台のプレーヤー。',
    '平台，': 'プラットフォームは、',
    '交给插件。': 'プラグインへ。',
    'Lazer 已经从一个单平台客户端，长成通过 Lua 插件接入多个平台的播放器。 平台能力交给插件，播放、歌词、界面与状态共用同一套核心。': 'Lazer は単一プラットフォームのクライアントから、Lua プラグインで複数のプラットフォームに接続するプレーヤーへと成長しました。プラットフォーム機能はプラグインに任せ、再生、歌詞、画面、状態はひとつのコアを共有します。',
    '任意音乐平台': '任意の音楽プラットフォーム',
    'Lua 平台插件': 'Lua プラットフォームプラグイン',
    '可扩展平台': '拡張可能なプラットフォーム',
    '核心': 'コア',
    '插件运行时': 'プラグインランタイム',
    '平台支持': 'プラットフォーム対応',
    '一套播放器，一套共享状态': 'ひとつのプレーヤー、ひとつの共有状態',
    '平台适配由插件提供': 'プラットフォーム適配はプラグインが提供',
    '随插件扩展，无需重编译': 'プラグインで拡張、再ビルド不要',
    'QQ 群 ↗': 'QQ グループ ↗'
  },
  en: {
    '跳到正文': 'Skip to content',
    '听': 'Listen',
    '歌词': 'Lyrics',
    '界面': 'Interface',
    '规格': 'Specs',
    '获取': 'Get',
    '插件': 'Plugins',
    '插件市场': 'Plugin Market',
    '把每一首歌，': 'Put every song,',
    '放回盒子里。': 'back in its case.',
    'Lazer 是一台用 Flutter 手写的网易云音乐客户端。 真实曲库、逐字歌词、评论与播放，从服务本身直达扬声器。': 'Lazer is a NetEase Cloud Music client, handwritten in Flutter. A real catalogue, word-by-word lyrics, comments, and playback — straight from the service to your speakers.',
    '加入 QQ 群': 'Join QQ Group',
    '获取 Lazer': 'Get Lazer',
    '网页版': 'Web player',
    '开发预览版': 'Developer preview',
    '镜像源下载': 'Mirror Download',
    '查看源代码': 'View source',
    '向下阅读': 'Scroll down',
    '没有第三方网关。': 'No third-party gateways.',
    '只有一条直接的': 'Just one direct ',
    '信号链。': 'signal chain.',
    'WEAPI / EAPI 就住在客户端里。搜索、歌单、歌手、专辑、评论与歌词， 都从服务本身取回；再交给原生音频引擎，按下播放键，声音就已经在路上。': 'WEAPI / EAPI live inside the client. Search, playlists, artists, albums, comments, and lyrics all come straight from the service, then pass to the native audio engine. Press play and the sound is already on its way.',
    '网易云音乐服务': 'NetEase Cloud Music service',
    'WEAPI / EAPI 原生实现': 'Native WEAPI / EAPI implementation',
    '原生音频引擎': 'Native audio engine',
    '第三方网关': 'Third-party gateways',
    'Third-party gateways': '',
    '平台': 'Platform',
    '界面语言': 'Language',
    '简体中文 / 繁體中文 / 日本語 / English': 'Simplified Chinese / Traditional Chinese / Japanese / English',
    '页面与状态': 'Pages & state',
    '一套页面树，一套共享状态': 'One page tree, one shared state',
    '播放链路': 'Playback path',
    '第三方网关中转': 'Third-party gateway relay',
    '02 / SIDE A — 听': '02 / SIDE A — LISTEN',
    '所有需要的，': 'Everything you need,',
    '都在播放链路里。': 'all in the playback path.',
    '从第一下搜索，到最后一秒缓存。Lazer 不替你决定听什么， 只把每一次寻找、播放和停留，做得足够顺手。': 'From the first search to the last second of cache. Lazer doesn’t decide what you listen to — it just makes every search, play, and pause feel effortless.',
    '真实曲库': 'A real catalogue',
    '搜索、推荐歌单、私人雷达与每日推荐。账号、收藏与播放列表，都落在真实服务上。': 'Search, recommended playlists, private radar, and daily mixes. Your account, favorites, and playlists all live on the real service.',
    '深入唱片': 'Inside the record',
    '歌手主页带热门歌曲与分页专辑；专辑详情有简介和完整曲目，点名字就继续往下走。': 'Artist pages carry popular songs and paged albums; album details include a bio and the full tracklist. Tap a name and keep going.',
    '评论现场': 'The comment field',
    '热门与最新评论、分页加载、点赞与取消点赞。游客可以看，想说话就登录。': 'Top and latest comments, paged loading, likes and unlikes. Guests can read; sign in when you want to speak.',
    '每个系统都认识它': 'Every system knows it',
    'Windows、macOS、Linux、Android 与 iOS 系统媒体控件；通知、锁屏与灵动岛跟着唱到哪一句。': 'Windows, macOS, Linux, Android, and iOS system media controls; notifications, lock screens, and Dynamic Island follow every line.',
    '先把开头留住': 'Hold the opening',
    '没缓存的歌先攒够十秒再开口；已下载和已缓存的歌照旧秒开。切歌不再从半拍开始。': 'Uncached songs buffer ten seconds before they speak; downloaded and cached songs still open instantly. No more starting half a beat late.',
    '完整功能说明': 'Full feature notes',
    '03 / SIDE B — 歌词': '03 / SIDE B — LYRICS',
    '歌词，': 'Lyrics,',
    '不是字幕。': 'not subtitles.',
    '该亮的那一句留在焦点里。其他字退到后面，不抢拍、不迷路。 手动翻过歌词，它会自己回到音乐身边。': 'The line that should shine stays in focus. Everything else falls back — no stolen beats, no getting lost. Scroll the lyrics by hand and they find their way back to the music.',
    '逐字弹簧': 'Word-by-word spring',
    'LRC / YRC 解析，逐字强调，让字跟着声音的弹性走。': 'LRC / YRC parsing with word-by-word emphasis, so every character moves with the spring of the sound.',
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
    '换一种姿势。': 'a different posture.',
    '桌面、手机、车机与大屏共享同一套页面与状态。 不是四份互相追赶的界面，而是同一张唱片，换一个摆放方式。': 'Desktop, phone, car display, and big screen share one set of pages and state. Not four interfaces racing each other — the same record, placed differently.',
    '桌面': 'Desktop',
    '侧边栏、完整播放条、可调的 80–175% DPI。窗口多大，布局都保持清醒。': 'Sidebar, full transport bar, adjustable 80–175% DPI. However big the window gets, the layout stays clear-headed.',
    '手机': 'Phone',
    '底部标签栏与迷你播放器，沉浸式正在播放页。单手也能够到每个动作。': 'Bottom tab bar and mini player, plus an immersive Now Playing page. Every action within one thumb.',
    '车机': 'Car display',
    '进入即放大到 135%，触控目标更宽。路况之外，只留下必要的操作。': 'Opens at 135% scale with wider touch targets. Beyond the road, only the essential controls remain.',
    '大屏': 'Big screen',
    '电视与投影自动进入大屏模式。方向键按位置移动，焦点永远看得见。': 'TVs and projectors switch to big-screen mode automatically. The D-pad moves by position, and focus is always visible.',
    '看不见的地方，': 'The parts you can’t see,',
    '也算数。': 'count too.',
    '不是堆参数，是把每个会影响听感的细节，单独放到台面上。': 'Not a pile of specs — every detail that shapes how it sounds, laid out on the table.',
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
    '把它带回': 'Take it back',
    '你的桌面。': 'to your desktop.',
    '预发布版本已准备好。选择你的平台，从 GitHub Releases 获取构建产物； 需要自行编译时，仓库里也有完整的构建说明。': 'The pre-release build is ready. Pick your platform and get the artifact from GitHub Releases; if you’d rather build it yourself, the repo has the full instructions.',
    '前往 Releases': 'Go to Releases',
    '查看构建产物': 'View build artifacts',
    '预发布版。产物由 GitHub Actions 构建，文件名统一为': 'Pre-release. Artifacts are built by GitHub Actions, all named',
    '。': '.',
    '点击链接加入群聊【Take lazer】': 'Click to join the group chat [Take lazer]',
    '反馈一个问题': 'Report an issue',
    '听歌': 'Listen',
    '文档 ↗': 'Docs ↗',
    'Lazer 是一台用 Flutter 手写的音乐客户端。通过 Lua 插件接入不同平台， 真实曲库、逐字歌词、评论与播放，共用一套核心。': 'Lazer is a music client, handwritten in Flutter. Lua plugins connect it to different platforms, with a real catalogue, word-by-word lyrics, comments, and playback sharing one core.',
    '一台播放器。': 'One player.',
    '平台，': 'Platforms,\u00A0',
    '交给插件。': 'handed to plugins.',
    'Lazer 已经从一个单平台客户端，长成通过 Lua 插件接入多个平台的播放器。 平台能力交给插件，播放、歌词、界面与状态共用同一套核心。': 'Lazer has grown from a single-platform client into a player that connects to multiple platforms through Lua plugins. Platform capabilities live in plugins; playback, lyrics, interface, and state share one core.',
    '任意音乐平台': 'Any music platform',
    'Lua 平台插件': 'Lua platform plugin',
    '可扩展平台': 'Extensible platforms',
    '核心': 'Core',
    '插件运行时': 'Plugin runtime',
    '平台支持': 'Platform support',
    '一套播放器，一套共享状态': 'One player, one shared state',
    '平台适配由插件提供': 'Platform adapters provided by plugins',
    '随插件扩展，无需重编译': 'Extend with plugins, no rebuild required',
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
