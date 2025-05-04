// Country-specific content
const countryContent = {
  'KZ': {
    advantages: [
      "20,000,000 ₸ толық сату қызметі - нәтижеге бағытталған",
      "Африкалық операторлар (идеалды ақцент + 60% үнемдеу)",
      "Автоматтандырылған CRM жүйесі - барлық үдерістерді басқару",
      "Ашықтық - әр қоңырау, лид және мәмілені көру",
      "Даяр шешім - қызметкерлерді іріктеуден ROI есептеріне дейін"
    ],
    partnership: [
      "Әр әкелінген клиент үшін $2000 - уақытында төлемдер",
      "Ыстық ұсыныс - жетілдірілген әдістеме арқылы 6% конверсия",
      "+$500 бонус алғашқы 3 серіктеске",
      "Толық қолдау - келіссөздерді біз жүргіземіз және мәмілелерді жабамыз",
      "Дайын материалдар - презентациялар, сценарийлер, қарсылықтарға жауаптар"
    ],
    solution: {
      title: "Қазақстан өнімдерін АҚШ нарығына енгізу",
      description: "Біз Қазақстан өнімдерін АҚШ-та тарату желісін құруға маманданғанмыз:"
    },
    solutionItems: [
      "АҚШ-тағы B2B клиенттер базасы бойынша белсенді қоңырау шалу",
      "50+ сенімді дистрибьюторлармен тікелей байланыс орнату",
      "Өнімді FDA стандарттарына сәйкестендіруге көмек",
      "Логистикалық шешімдерді ұйымдастыру және кедендік рәсімдеу"
    ],
    businessTestimonials: [
      {
        text: `АҚШ-тағы сауда көлеміміз 4 айда ${215 + getRandomGrowth()}% өсті. Операторлардың ағылшын тіліндегі шеберлігі таң қалдырарлық!`,
        author: "- Нұрлан, AgriFood экспортеры"
      },
      {
        text: "Біздің өнімдерді АҚШ-та сату қиын болды, бірақ бұл команда нарыққа кіруге көмектесті. 6 айда 320 мың доллар табыс!",
        author: "- Айгүл, косметика өндірушісі"
      }
    ]
  },
  'RU': {
    advantages: [
      "Готовые продажи за $40,000 - работаем на результат",
      "Профессиональные операторы (идеальный акцент + экономия 60%)",
      "Автоматизированная CRM система - полный контроль процессов",
      "Прозрачность - видите каждый звонок, лид и сделку",
      "Под ключ - от подбора персонала до отчетов по ROI"
    ],
    partnership: [
      "$2000 за каждого привлеченного клиента - выплаты без задержек",
      "Горячее предложение - конверсия 6% благодаря проверенной методике",
      "+$500 бонус первым 3 партнерам",
      "Полная поддержка - ведем переговоры и закрываем сделки",
      "Готовые материалы - презентации, скрипты, ответы на возражения"
    ],
    solution: {
      title: "Продвижение казахстанских товаров в США",
      description: "Мы специализируемся на создании дистрибьюторской сети для казахстанских товаров в США:"
    },
    solutionItems: [
      "Активный обзвон по нашей базе B2B клиентов в США",
      "Налаживание прямых контактов с 50+ проверенными дистрибьюторами",
      "Помощь в адаптации продукта под стандарты FDA",
      "Организация логистических решений и таможенного оформления"
    ],
    businessTestimonials: [
      {
        text: `Наш экспорт в США вырос на ${225 + getRandomGrowth()}% за 5 месяцев. Африканские операторы с идеальным американским акцентом!`,
        author: "- Сергей, производитель строительных материалов"
      },
      {
        text: "Благодаря этому колл-центру мы нашли 12 новых дистрибьюторов в США. Оборот $540,000 за квартал!",
        author: "- Елена, текстильная компания"
      }
    ]
  },
  'US': {
    advantages: [
      "$40,000 complete sales service - results driven",
      "African operators (perfect accent + 60% savings)",
      "Automated CRM system - full process control",
      "Complete transparency - see every call, lead and deal",
      "Turnkey solution - from staffing to ROI reports"
    ],
    partnership: [
      "$2000 per attracted client - timely payments",
      "Hot offer - 6% conversion thanks to proven methodology",
      "+$500 bonus for first 3 partners",
      "Full support - we handle negotiations and close deals",
      "Ready materials - presentations, scripts, objection handling"
    ],
    solution: {
      title: "Market Entry Solutions for US Market",
      description: "We specialize in helping international businesses establish distribution in the US:"
    },
    solutionItems: [
      "Active outreach to our US B2B client database",
      "Direct connections with 50+ verified distributors nationwide",
      "Product adaptation assistance for FDA standards",
      "Logistics solutions and customs clearance support"
    ],
    businessTestimonials: [
      {
        text: `We expanded to 7 new states with ${230 + getRandomGrowth()}% revenue growth. Call center agents sound like native Americans!`,
        author: "- David, Organic Food Producer"
      },
      {
        text: "As a small manufacturer, we couldn't afford US sales team. This service brought us $320K in 6 months!",
        author: "- Jennifer, Home Decor Business"
      }
    ]
  },
  'CN': {
    advantages: [
      "¥280,000 完整销售服务 - 结果导向",
      "非洲运营商 (完美口音 + 节省60%成本)",
      "自动化CRM系统 - 全程流程控制",
      "完全透明 - 查看每个电话、潜在客户和交易",
      "交钥匙解决方案 - 从人员配置到投资回报报告"
    ],
    partnership: [
      "每吸引一位客户可获$2000 - 准时付款",
      "热门优惠 - 经过验证的方法实现6%的转化率",
      "前3位合作伙伴额外奖励$500",
      "全面支持 - 我们负责谈判和交易",
      "现成材料 - 演示文稿、脚本、异议处理"
    ],
    solution: {
      title: "中国产品进入美国市场的解决方案",
      description: "我们专门帮助中国产品在美国建立分销网络:"
    },
    solutionItems: [
      "主动联系我们在美国的B2B客户数据库",
      "与50多个经过验证的全国分销商建立直接联系",
      "协助产品适应FDA标准",
      "物流解决方案和清关支持"
    ],
    businessTestimonials: [
      {
        text: `我们在6个月内将销售额增长了${340 + getRandomGrowth()}%。呼叫中心的服务非常专业！`,
        author: "- 王总, 电子产品制造商"
      },
      {
        text: "通过这个服务，我们成功进入了美国5个州的超市渠道。第一年销售额达到$1,200,000!",
        author: "- 刘经理, 食品出口公司"
      }
    ]
  },
  'AE': {
    advantages: [
      "150,000 درهم خدمة مبيعات كاملة - تركز على النتائج",
      "عمال أفارقة (لهجة مثالية + توفير 60٪)",
      "نظام CRM آلي - التحكم الكامل في العمليات",
      "شفافية كاملة - رؤية كل مكالمة وسجل وصفقة",
      "حلول جاهزة - من التوظيف إلى تقارير العائد"
    ],
    partnership: [
      "2000 دولار عن كل عميل يتم جذبه - دفعات في الوقت المحدد",
      "عرض ساخن - معدل تحويل 6٪ بفضل منهجية مثبتة",
      "+500 دولار مكافأة لأول 3 شركاء",
      "دعم كامل - نتعامل مع المفاوضات ونغلق الصفقات",
      "مواد جاهزة - عروض تقديمية، نصوص، معالجة الاعتراضات"
    ],
    solution: {
      title: "حلول دخول السوق الأمريكي للمنتجات العربية",
      description: "نحن متخصصون في مساعدة الشركات العربية على إنشاء شبكة توزيع في الولايات المتحدة:"
    },
    solutionItems: [
      "تواصل نشط مع قاعدة عملائنا B2B في الولايات المتحدة",
      "اتصالات مباشرة مع أكثر من 50 موزع معتمد في جميع أنحاء البلاد",
      "مساعدة في تكييف المنتج مع معايير FDA",
      "حلول لوجستية ودعم التخليص الجمركي"
    ],
    businessTestimonials: [
      {
        text: `زادت صادراتنا إلى أمريكا بنسبة ${280 + getRandomGrowth()}٪ في 4 أشهر. العملاء يعتقدون أن المتصلين أمريكيون!`,
        author: "- خالد, مصدر منتجات التمور"
      },
      {
        text: "فتحنا 3 ولايات أمريكية جديدة بفضل هذا المركز. إيرادات الربع الأول 750,000 دولار!",
        author: "- ليلى, شركة مستحضرات تجميل"
      }
    ]
  },
  'TR': {
    advantages: [
      "1.200.000₺ tam satış hizmeti - sonuç odaklı",
      "Afrikalı operatörler (mükemmel aksan + %60 tasarruf)",
      "Otomatik CRM sistemi - tüm süreç kontrolü",
      "Tam şeffaflık - her arama, potansiyel müşteri ve anlaşmayı görün",
      "Anahtar teslim çözüm - personelden ROI raporlarına kadar"
    ],
    partnership: [
      "Kazandırılan her müşteri için $2000 - zamanında ödemeler",
      "Sıcak teklif - kanıtlanmış metodoloji ile %6 dönüşüm",
      "İlk 3 ortak için +$500 bonus",
      "Tam destek - görüşmeleri biz yönetiyoruz ve anlaşmaları kapatıyoruz",
      "Hazır materyaller - sunumlar, senaryolar, itiraz yönetimi"
    ],
    solution: {
      title: "Türk Ürünleri için ABD Pazarına Giriş Çözümleri",
      description: "Türk ürünlerinin ABD'de dağıtım ağı oluşturmasına uzman desteği:"
    },
    solutionItems: [
      "ABD'deki B2B müşteri veritabanımıza aktif ulaşım",
      "Ülke genelinde 50+ doğrulanmış distribütörle doğrudan bağlantı",
      "FDA standartlarına uyum için ürün adaptasyon desteği",
      "Lojistik çözümleri ve gümrük işlemleri desteği"
    ],
    businessTestimonials: [
      {
        text: `ABD'deki distribütör ağımızı ${240 + getRandomGrowth()}% genişlettik. Operatörlerin İngilizcesi kusursuz!`,
        author: "- Mehmet, Tekstil İhracatçısı"
      },
      {
        text: "Küçük bir üretici olarak ABD pazarına girmek zordu. Bu servis sayesinde 6 ayda 2.3 milyon ₺ ciro!",
        author: "- Zeynep, Kozmetik Üreticisi"
      }
    ]
  }
};

// Language translations
const translations = {
  'kk': {
    title: "Қоңырау орталығы | АҚШ нарығына экспорт",
    description: "Қазақстандық бизнес үшін АҚШ нарығына толық сату шешімі",
    heading: "АҚШ нарығына сату қызметі",
    tagline: "Қазақстандық бизнес үшін АҚШ нарығына толық сату шешімі",
    block1: {
      heading: "Экспорттық шешімнің артықшылықтары",
      btn1: "Telegram-де қоңырау",
      btn2: "WhatsApp-те сұрақ"
    },
    block2: {
      heading: "Серіктестік бағдарламасы",
      btn: "Серіктес болу"
    },
    block3: {
      heading: "Неге бізді таңдайды?",
      btn: "Жұмысты бастау"
    },
    footer: "© 2025 states.kz | Қазақстандық бизнес үшін халықаралық шешімдер",
    rtl: false
  },
  'ru': {
    title: "Колл-центр | Экспорт в США",
    description: "Полное решение для продаж на рынок США для казахстанского бизнеса",
    heading: "Услуги по продажам в США",
    tagline: "Полное решение для казахстанского бизнеса по выходу на рынок США",
    block1: {
      heading: "Преимущества экспортного решения",
      btn1: "Связаться в Telegram",
      btn2: "Вопрос в WhatsApp"
    },
    block2: {
      heading: "Партнерская программа",
      btn: "Стать партнером"
    },
    block3: {
      heading: "Почему выбирают нас?",
      btn: "Начать работу"
    },
    footer: "© 2025 states.kz | Международные решения для казахстанского бизнеса",
    rtl: false
  },
  'en': {
    title: "Call Center | US Market Export",
    description: "Complete sales solution for US market for international businesses",
    heading: "US Market Sales Services",
    tagline: "Complete solution for international businesses to enter US market",
    block1: {
      heading: "Export Solution Benefits",
      btn1: "Contact on Telegram",
      btn2: "Question on WhatsApp"
    },
    block2: {
      heading: "Partnership Program",
      btn: "Become a Partner"
    },
    block3: {
      heading: "Why Choose Us?",
      btn: "Start Working"
    },
    footer: "© 2025 states.kz | International solutions for businesses worldwide",
    rtl: false
  },
  'zh': {
    title: "呼叫中心 | 美国市场出口",
    description: "为国际企业提供的美国市场完整销售解决方案",
    heading: "美国市场销售服务",
    tagline: "国际企业进入美国市场的完整解决方案",
    block1: {
      heading: "出口解决方案优势",
      btn1: "通过Telegram联系",
      btn2: "WhatsApp咨询"
    },
    block2: {
      heading: "合作伙伴计划",
      btn: "成为合作伙伴"
    },
    block3: {
      heading: "为什么选择我们?",
      btn: "开始合作"
    },
    footer: "© 2025 states.kz | 为全球企业提供的国际解决方案",
    rtl: false
  },
  'ar': {
    title: "مركز الاتصال | تصدير للسوق الأمريكي",
    description: "حلول مبيعات كاملة للسوق الأمريكي للشركات الدولية",
    heading: "خدمات المبيعات للسوق الأمريكي",
    tagline: "حل متكامل للشركات الدولية لدخول السوق الأمريكي",
    block1: {
      heading: "مزايا حل التصدير",
      btn1: "اتصل عبر Telegram",
      btn2: "استفسار عبر WhatsApp"
    },
    block2: {
      heading: "برنامج الشراكة",
      btn: "كن شريكًا"
    },
    block3: {
      heading: "لماذا تختارنا؟",
      btn: "ابدأ العمل"
    },
    footer: "© 2025 states.kz | حلول دولية للشركات العالمية",
    rtl: true
  },
  'tr': {
    title: "Çağrı Merkezi | ABD Pazarına İhracat",
    description: "Uluslararası işletmeler için ABD pazarına tam satış çözümü",
    heading: "ABD Pazarı Satış Hizmetleri",
    tagline: "Uluslararası işletmeler için ABD pazarına girişte tam çözüm",
    block1: {
      heading: "İhracat Çözümü Avantajları",
      btn1: "Telegram'da İletişim",
      btn2: "WhatsApp'ta Soru"
    },
    block2: {
      heading: "Ortaklık Programı",
      btn: "Ortak Olun"
    },
    block3: {
      heading: "Neden Bizi Seçmelisiniz?",
      btn: "Çalışmaya Başla"
    },
    footer: "© 2025 states.kz | Uluslararası işletmeler için çözümler",
    rtl: false
  }
};

function getRandomGrowth() {
  return Math.floor(Math.random() * 5) + 1;
}
