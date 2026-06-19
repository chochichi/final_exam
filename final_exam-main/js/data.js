const shoeProducts = [
  // --- CASUAL SHOES (休閒鞋款) ---
  {
    id: "casual_1",
    name: "AeroWalk Knit Sneaker",
    zhName: "AeroWalk 輕盈編織休閒鞋",
    category: "casual",
    categoryZh: "休閒鞋款",
    price: 2580,
    originalPrice: 3200,
    image: "assets/images/casual_1.png",
    rating: 4.8,
    reviewsCount: 245,
    tag: "暢銷推薦",
    description: "AeroWalk Knit 採用全新升級的 3D 一體成型編織技術，完美貼合腳型。極輕量化的設計與高透氣孔洞，讓您在都市漫步時感受前所未有的無感體驗。簡約的灰色調，輕鬆百搭各式日常穿搭。",
    features: [
      "3D 一體成型針織鞋面，極致透氣與貼合度",
      "高彈性緩震 EVA 中底，有效吸收步行衝擊",
      "防滑耐磨橡膠大底，提升行走穩定性",
      "內置吸濕排汗抗菌鞋墊，長效保持足部乾爽"
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    colors: [
      { name: "太空灰", hex: "#94a3b8" },
      { name: "極簡白", hex: "#e2e8f0" }
    ]
  },
  {
    id: "casual_2",
    name: "UrbanCanvas Navy Low",
    zhName: "UrbanCanvas 經典低筒帆布鞋",
    category: "casual",
    categoryZh: "休閒鞋款",
    price: 1880,
    originalPrice: 2200,
    image: "assets/images/casual_2.png",
    rating: 4.6,
    reviewsCount: 189,
    tag: "經典百搭",
    description: "傳承經典的低筒帆布設計，UrbanCanvas Low 採用 12oz 重磅耐磨純棉帆布製作。搭配加厚乳膠鞋墊，徹底改善傳統帆布鞋底偏硬的問題。經典海軍藍配色與復古膠底，是街頭潮流不退流行的標誌。",
    features: [
      "12oz 雙股重磅高密度棉質帆布，耐磨且透氣",
      "加厚高彈力乳膠鞋墊，提供全天候舒適腳感",
      "硫化橡膠防滑大底，抓地力強且不易開膠",
      "經典低筒剪裁，修飾腿部線條"
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    colors: [
      { name: "海軍藍", hex: "#1e3a8a" },
      { name: "純黑", hex: "#111827" }
    ]
  },
  {
    id: "casual_3",
    name: "StreetLuxe White Leather",
    zhName: "StreetLuxe 奢華白皮革小白鞋",
    category: "casual",
    categoryZh: "休閒鞋款",
    price: 3580,
    originalPrice: 4500,
    image: "assets/images/street_luxe_white_leather.jpg",
    rating: 4.9,
    reviewsCount: 312,
    tag: "質感嚴選",
    description: "這款精心打造的精品級白鞋，採用頂級頭層牛皮製成。極簡的白色鞋身搭配精緻的金色車線細節，散發無與倫比的輕奢質感。無論是商務休閒還是週末約會，都能完美駕馭。",
    features: [
      "嚴選頂級頭層荔枝紋牛皮，觸感柔軟、越穿越有質感",
      "全真皮內裡與高密度記憶棉鞋墊，極致親膚緩震",
      "手工縫線針步，質感與耐用度大幅提升",
      "復古焦糖生膠鞋底，極佳耐磨抓地性能"
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "奢華白", hex: "#f8fafc" },
      { name: "紳士黑", hex: "#0f172a" }
    ]
  },
  {
    id: "casual_4",
    name: "RetroVibe Brown Suede",
    zhName: "RetroVibe 復古麂皮德訓鞋",
    category: "casual",
    categoryZh: "休閒鞋款",
    price: 2980,
    originalPrice: 3800,
    image: "assets/images/retro_vibe_brown_suede.jpg",
    rating: 4.7,
    reviewsCount: 154,
    tag: "復古潮流",
    description: "致敬經典德訓鞋款，RetroVibe Suede 將高級牛麂皮與荔枝皮拼接，堆疊出豐富的層次感。搭配標誌性的焦糖色生膠鞋底，流露出濃郁的復古氣息。搭載改良版足弓支撐鞋墊，復古與舒適並存。",
    features: [
      "進口牛麂皮與優質荔枝皮拼接鞋面，層次感極佳",
      "天然耐磨焦糖色生膠底，提供優異摩擦力與復古調性",
      "足弓微加高人體工學鞋墊，舒緩長時間站立疲勞",
      "柔軟包覆鞋口防磨腳設計"
    ],
    sizes: ["37", "38", "39", "40", "41", "42", "43", "44"],
    colors: [
      { name: "焦糖栗", hex: "#78350f" },
      { name: "石泥灰", hex: "#4b5563" }
    ]
  },

  // --- FORMAL SHOES (正式鞋款) ---
  {
    id: "formal_1",
    name: "Brogue Derby Leather Shoes",
    zhName: "紳士雕花德比真皮鞋",
    category: "formal",
    categoryZh: "正式鞋款",
    price: 4580,
    originalPrice: 5800,
    image: "assets/images/formal_1.png",
    rating: 4.9,
    reviewsCount: 128,
    tag: "商務經典",
    description: "傳承英倫傳統工藝的雕花德比鞋，精選頂級義大利進口頭層牛皮。鞋面精緻的手工翼紋雕花（Brogue），展現細緻尊榮。改良版亞洲寬楦頭設計，即使長時間商務站立或行走，依然能保持雙腳舒適釋壓。",
    features: [
      "進口頭層小牛皮，手感細膩且透氣度佳",
      "英式復古雕花與打孔設計，細節優雅迷人",
      "高密度吸震橡膠木屑複合大底，減震防滑",
      "全真皮內裡搭配高彈力記憶泡棉鞋墊"
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "典雅棕", hex: "#78350f" },
      { name: "極致黑", hex: "#09090b" }
    ]
  },
  {
    id: "formal_2",
    name: "ZoneDefender Steel Grey",
    zhName: "ZoneDefender 雅痞中筒皮面鞋",
    category: "formal",
    categoryZh: "正式鞋款",
    price: 3680,
    originalPrice: 4200,
    image: "assets/images/zone_defender_steel_grey.jpg",
    rating: 4.6,
    reviewsCount: 167,
    tag: "防潑水皮面",
    description: "ZoneDefender 結合了中筒靴的保護性與防潑水荔枝紋皮革。簡約的鋼鐵灰配色，為您的正裝西褲或休閒長褲帶來穩重洗鍊的氣息。中底減震泡棉提供全天候的緩衝力，雨天出勤亦能風度翩翩。",
    features: [
      "防潑水荔枝紋路合成皮革鞋面，保養簡便",
      "中筒加厚鞋領，提供極佳的踝部支撐防寒",
      "耐磨橡膠防滑大底，防滑性能優異",
      "透氣抗菌孔洞鞋墊，杜絕悶熱異味"
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "鋼鐵灰", hex: "#475569" },
      { name: "經典黑", hex: "#0f172a" }
    ]
  },
  {
    id: "formal_3",
    name: "RainShield Chelsea Leather Boots",
    zhName: "RainShield 英倫防潑水真皮短靴",
    category: "formal",
    categoryZh: "正式鞋款",
    price: 4980,
    originalPrice: 5800,
    image: "assets/images/rain_shield_waterproof_boot.jpg",
    rating: 4.7,
    reviewsCount: 198,
    tag: "防水短靴",
    description: "結合英倫雀爾喜靴的俐落外型與 RainShield 奈米防潑水皮革科技。即使在多雨的季節，也能提供全天候防乾爽與防泥沙功能。側邊高彈性鬆緊帶便於穿脫，焦糖色生膠拼接大底兼顧耐磨與品味。",
    features: [
      "頂級防潑水處理頭層牛皮，無懼雨天與水窪",
      "兩側彈性鬆緊帶結合後跟拉環，穿脫輕鬆自如",
      "加厚 3D 足弓減震鞋墊，分散長時間行走之反衝力",
      "耐磨粗獷防滑橡膠大底，抓地力強大"
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45", "46"],
    colors: [
      { name: "曜石黑", hex: "#1c1917" },
      { name: "典雅褐", hex: "#7c2d12" }
    ]
  },
  {
    id: "formal_4",
    name: "AeroWalk Classic Calf Loafers",
    zhName: "AeroWalk 經典質感真皮樂福鞋",
    category: "formal",
    categoryZh: "正式鞋款",
    price: 3880,
    originalPrice: 4800,
    image: "assets/images/aerowalk_knit_grey_sneaker.jpg",
    rating: 4.8,
    reviewsCount: 134,
    tag: "經典免綁",
    description: "這款經典的便鞋樂福鞋精選優質細膩小牛皮製成，光澤優雅。鞋內配置高密度吸震乳膠墊與超細纖維防滑內裡，免去了穿新鞋的適應期。無論是搭配商務套裝還是休閒便褲，皆能呈現俐落的都會感。",
    features: [
      "細緻手感小牛皮鞋面，質地柔軟透氣",
      "U型手工馬克縫線，做工嚴謹經典",
      "超輕量橡膠彈性發泡大底，行走靜音無負擔",
      "便鞋套入式設計，商務差旅首選"
    ],
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: [
      { name: "曜石黑", hex: "#111827" },
      { name: "深海藍", hex: "#1e3a8a" }
    ]
  },

  // --- SPORT SHOES (運動鞋款) ---
  {
    id: "sports_1",
    name: "ApexRunner Evo Running Shoes",
    zhName: "ApexRunner 螢光綠科技避震跑鞋",
    category: "sports",
    categoryZh: "運動鞋款",
    price: 4280,
    originalPrice: 5200,
    image: "assets/images/apex_runner_neon_green.jpg",
    rating: 4.9,
    reviewsCount: 428,
    tag: "專業慢跑",
    description: "ApexRunner Evo 是為追求極致表現的跑者設計的旗艦慢跑鞋。中底搭載全新 Evo-Foam 螢光綠避震科技科技，回彈率高達 75%。工程網眼鞋面在關鍵部位加強抗拉伸，確保高速奔馳下的支撐感與穩定性。",
    features: [
      "Evo-Foam 高回彈超臨界發泡中底，極致緩震回彈",
      "工程提花網布鞋面，分區透氣與精準支撐",
      "後跟 TPU 穩定環，鎖定足跟，防止側翻",
      "耐磨碳素橡膠大底 (AHAR)，耐磨度提升 3 倍"
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45", "46"],
    colors: [
      { name: "螢光綠", hex: "#22c55e" },
      { name: "極速紅", hex: "#991b1b" }
    ]
  },
  {
    id: "sports_2",
    name: "CloudStride Sky Blue Runner",
    zhName: "CloudStride 破曉藍雲感慢跑鞋",
    category: "sports",
    categoryZh: "運動鞋款",
    price: 3880,
    originalPrice: 4800,
    image: "assets/images/cloud_stride_sky_blue.jpg",
    rating: 4.8,
    reviewsCount: 367,
    tag: "舒適雲感",
    description: "CloudStride Pro 帶來如同踩在雲朵上的柔軟路感。增厚 33mm 的雙密度中底，能大幅降低跑步對膝蓋關節的衝擊。專為中長距離路跑與日常踏步所設計，也是體重較重跑者的首選避震跑鞋。",
    features: [
      "33mm 超厚度 Cloud-Pad 雙層避震中底",
      "搖擺弧形中底設計，引導步態轉換，跑步更省力",
      "親膚彈性針織鞋領，完美包覆踝部防入沙",
      "輕量化工程橡膠防滑大底"
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "破曉藍", hex: "#0284c7" },
      { name: "櫻花粉", hex: "#f472b6" }
    ]
  },
  {
    id: "sports_3",
    name: "HyperDunk Red Black Basketball",
    zhName: "HyperDunk 經典紅黑實戰籃球鞋",
    category: "sports",
    categoryZh: "運動鞋款",
    price: 3980,
    originalPrice: 4800,
    image: "assets/images/hyper_dunk_red_black.jpg",
    rating: 4.8,
    reviewsCount: 512,
    tag: "全能實戰",
    description: "HyperDunk Prime 是為球場上全能型球員打造的實戰利器。高筒設計配合高強度護踝結構，提供極致的足踝鎖定。中底搭載前掌 Zoom 與後掌 Bounce 的雙重緩震科技，確保落地時的完美防護與起步時的瞬間爆發。",
    features: [
      "立體高筒加厚保護泡棉，提供強踝支撐",
      "前 Zoom + 後 Bounce 雙科技配置，回彈與避震完美平衡",
      "側向防側翻延伸結構 (Outrigger)，有效預防扭傷",
      "耐磨生膠人字紋大底，提供頂級的防滑抓地力"
    ],
    sizes: ["40", "41", "42", "43", "44", "45", "46", "47"],
    colors: [
      { name: "公牛紅", hex: "#991b1b" },
      { name: "黑曜石", hex: "#111827" }
    ]
  },
  {
    id: "sports_4",
    name: "CourtKing Purple Gold Alpha",
    zhName: "CourtKing 華麗紫金低筒後衛鞋",
    category: "sports",
    categoryZh: "運動鞋款",
    price: 3780,
    originalPrice: 4500,
    image: "assets/images/court_king_purple_gold.jpg",
    rating: 4.7,
    reviewsCount: 289,
    tag: "靈活速度",
    description: "專為速度型與變向突破後衛設計。CourtKing Alpha 採用低筒剪裁，釋放踝關節最大靈活度。中底採貼地感極佳的超薄緩震材料，大幅縮短反應時間。紫金華麗配色，讓您在球場上成為目光焦點。",
    features: [
      "極速反應貼地中底，切入、變向毫不拖泥帶水",
      "熱熔式 TPU 加固工程網布鞋面，輕量且防撕裂",
      "足弓大面積 TPU 抗扭轉穩定片，強韌支撐",
      "人體工學放射狀抓地紋路，急停變向救星"
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45", "46"],
    colors: [
      { name: "湖人紫", hex: "#581c87" },
      { name: "傳奇金", hex: "#eab308" }
    ]
  },
  {
    id: "sports_5",
    name: "SwiftKnit Crimson Red Runner",
    zhName: "SwiftKnit 烈焰紅極速跑鞋",
    category: "sports",
    categoryZh: "運動鞋款",
    price: 3680,
    originalPrice: 4200,
    image: "assets/images/swift_knit_crimson_red.jpg",
    rating: 4.5,
    reviewsCount: 112,
    tag: "競速輕量",
    description: "單隻重量僅 185 克的 SwiftKnit Lite，是為尋求自我突破的競速跑者而生。超薄高強度的針織鞋身緊密貼合足部，幾乎感覺不到重量。高彈力薄型推進中底，將您的每一分推力精準地轉化為向前的動力。",
    features: [
      "極限輕量化設計，單足重僅 185g (US 9)",
      "一體編織網孔鞋面，宛如第二層肌膚的透氣度",
      "Lite-Speed 薄型超回彈推进板，提供強大前推力",
      "耐磨輕量橡膠防滑配置，完美兼顧重量與壽命"
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "烈焰紅", hex: "#dc2626" },
      { name: "極光白", hex: "#f8fafc" }
    ]
  },
  {
    id: "sports_6",
    name: "AirBounce Neon Blue Max",
    zhName: "AirBounce 霓虹藍概念氣墊鞋",
    category: "sports",
    categoryZh: "運動鞋款",
    price: 4580,
    originalPrice: 5500,
    image: "assets/images/air_bounce_black_neon_blue.jpg",
    rating: 4.9,
    reviewsCount: 340,
    tag: "旗艦避震",
    description: "AirBounce Max 結合了未來感設計與極限避震。鞋底配備可視化全掌高容量氣墊，為每次躍起落地帶來驚人的回彈與膝蓋保護。半透明冰藍色橡膠大底配合深黑鞋身，猶如穿梭於未來賽博空間的戰靴。",
    features: [
      "可視化全掌高承載氣墊 (Full-Length Air)，吸收 95% 衝擊力",
      "碳纖維紋理防扭片，確保重度實戰下的底盤穩定",
      "半透明水晶耐磨大底，質感與機能完美結合",
      "Kevlar 防彈纖維強化鞋帶孔，強力包裹"
    ],
    sizes: ["40", "41", "42", "43", "44", "45", "46", "47"],
    colors: [
      { name: "霓虹藍", hex: "#06b6d4" },
      { name: "暗夜黑", hex: "#111827" }
    ]
  },

  // --- ACCESSORIES (鞋材與配件) ---
  {
    id: "accessories_1",
    name: "VibeCrew Socks 3-Pack",
    zhName: "VibeCrew 專業吸濕排汗中筒襪 (三雙裝)",
    category: "accessories",
    categoryZh: "鞋材與配件",
    price: 490,
    originalPrice: 650,
    image: "assets/images/vibe_crew_socks_three_pack.jpg",
    rating: 4.7,
    reviewsCount: 520,
    tag: "排汗運動襪",
    description: "專為高強度運動設計的 Crew 中筒襪。在足底與後跟等關鍵易磨損部位進行加厚圈絨設計，提供額外的緩震保護。搭配專利排汗編織，即使長時間運動，也能保持雙腳涼爽不悶熱。內含黑、白、灰三色各一雙。",
    features: [
      "足底高密度圈絨加厚避震，舒緩落地衝擊力",
      "中足環狀彈性防滑收縮帶，確保襪子服貼不滑移",
      "阿基里斯腱處特殊防摩擦保護加厚",
      "CoolMax 吸濕排汗科技纖維，透氣抗菌防臭"
    ],
    sizes: ["S (22-24cm)", "M (25-27cm)", "L (28-30cm)"],
    colors: [
      { name: "經典三色組", hex: "#64748b" }
    ]
  },
  {
    id: "accessories_2",
    name: "SoleCare Cleaner Kit",
    zhName: "SoleCare 頂級溫和洗鞋清潔組",
    category: "accessories",
    categoryZh: "鞋材與配件",
    price: 680,
    originalPrice: 850,
    image: "assets/images/sole_care_cleaner_kit.jpg",
    rating: 4.8,
    reviewsCount: 298,
    tag: "洗鞋神器",
    description: "SoleCare 清潔套組是維持您愛鞋一塵不染的秘密武器。98.3% 天然環保溫和清潔配方，不傷材質亦不傷手，適用於皮革、帆布、麂皮、網布等多種材質。附贈 100% 天然馬毛刷，能溫和且高效刷除髒污。",
    features: [
      "天然椰子油萃取溫和清潔液 (120ml)，無毒環保",
      "高密度軟質天然馬毛刷，不傷鞋面，清潔力卓越",
      "極細纖維超吸水擦拭布，一擦即乾",
      "附便攜拉鍊收納包，旅行攜帶超方便"
    ],
    sizes: ["標準版 120ml"],
    colors: [
      { name: "環保黑綠", hex: "#0f172a" }
    ]
  },
  {
    id: "accessories_3",
    name: "Arch Support Memory Insoles",
    zhName: "極致減震記憶足弓鞋墊",
    category: "accessories",
    categoryZh: "鞋材與配件",
    price: 350,
    originalPrice: 480,
    image: "assets/images/running_1.svg",
    rating: 4.8,
    reviewsCount: 165,
    tag: "足底舒緩",
    description: "這款專利人體工學鞋墊專為長時間站立或運動者開發。採用三層複合結構，頂層防滑透氣布、中層記憶慢回彈泡棉、底層高密度 EVA 足弓支撐托。有效分擔體重，降低足底筋膜負擔，讓老鞋重獲新生。",
    features: [
      "3D立體足弓加高支撐，矯正不良步態",
      "後跟蜂巢狀防震矽膠墊，吸收 85% 著地反作用力",
      "高彈記憶海綿中層，踩踏腳感Ｑ彈舒適",
      "多孔排汗透氣設計，有效排除異味與濕氣"
    ],
    sizes: ["S (35-39碼)", "L (40-45碼)"],
    colors: [
      { name: "亮麗黃", hex: "#eab308" }
    ]
  },
  {
    id: "accessories_4",
    name: "Reflective Lace Lock Set",
    zhName: "FlexLace 炫彩反光免綁鞋帶組",
    category: "accessories",
    categoryZh: "鞋材與配件",
    price: 290,
    originalPrice: 390,
    image: "assets/images/flex_lace_neon_laces.jpg",
    rating: 4.6,
    reviewsCount: 142,
    tag: "反光鞋帶",
    description: "討厭慢跑或運動到一半鞋帶鬆脫嗎？FlexLace 提供完美的解決方案。採用高彈性編織材料，結合專利金屬按扣鎖定裝置，穿鞋只需一拉即可固定。鞋帶中混編高亮度 3M 反光絲，顯著提升夜間運動安全性。",
    features: [
      "免綁快速鞋扣系統，一拉即穿，運動永不鬆脫",
      "加強版 3M 強力反光絲，夜跑警示安全性大加分",
      "高張力橡膠彈性內芯，均勻分佈腳背壓力",
      "隨包附贈兩組金屬膠囊螺絲扣與修剪配件"
    ],
    sizes: ["通用長度 (120cm)"],
    colors: [
      { name: "極光綠", hex: "#10b981" },
      { name: "炫彩紫", hex: "#6366f1" }
    ]
  },

  // --- OTHERS (其它類) ---
  {
    id: "others_1",
    name: "SlideEase Recovery Sandals",
    zhName: "SlideEase 運動舒緩恢復拖鞋",
    category: "others",
    categoryZh: "其它類",
    price: 990,
    originalPrice: 1280,
    image: "assets/images/slide_ease_black_sandal.jpg",
    rating: 4.8,
    reviewsCount: 423,
    tag: "舒緩拖鞋",
    description: "SlideEase 是高強度訓練或比賽後，雙腳舒緩的最佳選擇。採用極致柔軟的雲感 EVA 發泡材料，根據足底壓力分佈設計人體工學足弓支撐曲線。防滑抓地底紋，不論居家穿著、健身房盥洗或海灘活動皆合適。",
    features: [
      "超軟雲感 EVA 一體成型發泡，釋放全天候壓力",
      "人體工學足弓起伏曲線，支撐並放鬆疲憊足底筋膜",
      "排水凹槽足底顆粒設計，防滑且不黏腳",
      "加厚 4cm 防震大底，腳感超群"
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "太空黑", hex: "#18181b" },
      { name: "霧夜紫", hex: "#a855f7" }
    ]
  },
  {
    id: "others_2",
    name: "RainShield Shoe Covers",
    zhName: "RainShield 高彈防潑水矽膠鞋套",
    category: "others",
    categoryZh: "其它類",
    price: 390,
    originalPrice: 490,
    image: "assets/images/other_2.svg",
    rating: 4.5,
    reviewsCount: 165,
    tag: "防雨鞋套",
    description: "突如其來的梅雨讓新買的愛鞋濕透？RainShield 矽膠鞋套是您的完美隨身雨具。採用高彈性食品級矽膠製作，完全包覆鞋身，不留一絲縫隙。底部加厚且帶有仿輪胎抓地防滑紋路，兼顧防水與安全。",
    features: [
      "食品級高彈性防拉扯矽膠，完美緊貼鞋型，百分百防水",
      "加厚鞋底設計，抗撕裂耐用度顯著提升",
      "輪胎防滑紋路鞋底，大幅增加摩擦力，行走超安心",
      "極輕量可折疊，附贈專用防水密封袋，輕鬆收納於隨身包"
    ],
    sizes: ["M (適用 35-39碼)", "L (適用 40-45碼)"],
    colors: [
      { name: "半透明白", hex: "#ffffff" },
      { name: "晴空藍", hex: "#38bdf8" }
    ]
  },
  {
    id: "others_3",
    name: "CloudVibe Cozy Warm Slippers",
    zhName: "雲感保暖羊羔絨室內拖鞋",
    category: "others",
    categoryZh: "其它類",
    price: 590,
    originalPrice: 790,
    image: "assets/images/other_1.svg",
    rating: 4.7,
    reviewsCount: 88,
    tag: "保暖拖鞋",
    description: "寒冬裡給雙腳最溫暖的擁抱。這款室內保暖拖鞋內裡滿鋪親膚柔軟的仿羊羔絨，保暖度極佳。中底加厚記憶海綿，提供極具支撐力的踩踏體驗。底紋橡膠防滑設計，保護您在木地板或瓷磚上行走的安全性。",
    features: [
      "超柔羊羔絨內裡，親膚鎖溫，冬季首選",
      "加厚 3cm 緩壓記憶棉中底，防震防酸痛",
      "靜音防滑 TPR 橡膠鞋底，不傷地板且不易打滑",
      "優雅素色針織外布，風格日系百搭"
    ],
    sizes: ["S (35-37碼)", "M (38-40碼)", "L (41-43碼)"],
    colors: [
      { name: "燕麥米", hex: "#e4e4e7" },
      { name: "雲朵灰", hex: "#94a3b8" }
    ]
  },
  {
    id: "others_4",
    name: "LED Safety Running Shoe Clip",
    zhName: "LED 夜跑安全發光鞋夾",
    category: "others",
    categoryZh: "其它類",
    price: 190,
    originalPrice: 290,
    image: "assets/images/running_4.svg",
    rating: 4.6,
    reviewsCount: 112,
    tag: "夜跑安全",
    description: "專為喜愛夜間慢跑或騎行者設計的安全警示配件。高亮度 LED 發光鞋夾，能牢固夾在運動鞋後跟，提供常亮與閃爍兩種發光模式，在夜間行駛車輛能清晰看見，大幅提升夜跑安全性。內置可更換鋰電池，防雨防潑水。",
    features: [
      "強韌高彈彈力塑料夾，完美適配 6-8.5cm 各款鞋跟",
      "常亮與閃爍雙模式，最遠可視距離達 150 公尺",
      "IPX4 等級防潑水，微雨天依然能正常運作",
      "輕量無感設計，不增加多餘跑步負擔"
    ],
    sizes: ["通用尺碼"],
    colors: [
      { name: "螢光綠", hex: "#22c55e" },
      { name: "極光紅", hex: "#ef4444" }
    ]
  }
];
