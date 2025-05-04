// Country-specific content
const countryContent = {
  'KZ': {
    currency: '₸',
    testimonials: [
      `АҚШ-тағы саудамызды 3 айда ${218 + getRandomGrowth()}% арттырдық. Операторлардың ақцені тамаша!`,
      "Серіктес ретінде айына 8,200,000 ₸ таптым. Барлығы анық және уақытында."
    ],
    authors: [
      "- Әлия, тамақ экспортеры",
      "- Арман, онлайн-бизнес"
    ],
    advantages: [
      "20,000,000 ₸ толық сату қызметі",
      "Африкалық операторлар (160% тиімді!)",
      "Автоматтандырылған CRM жүйесі",
      "Ашық есеп - әр сауданы көру",
      "Персоналдан ROI есептеріне дейін"
    ]
  },
  'US': {
    currency: '$',
    testimonials: [
      `Our US sales grew by ${215 + getRandomGrowth()}% in 3 months. Perfect English!`,
      "As a partner earned $12,500 in first month. Reliable service."
    ],
    authors: [
      "- Michael, Tech Exporter",
      "- Sarah, E-commerce"
    ],
    advantages: [
      "$40,000 complete sales service",
      "African operators (160% cost efficient!)",
      "Automated CRM system",
      "Full transparency - see every deal",
      "From staffing to ROI reports"
    ]
  },
  'CN': {
    currency: '¥',
    testimonials: [
      `我们的美国销售额在3个月内增长了${210 + getRandomGrowth()}%。完美的英语口音！`,
      "作为合作伙伴第一个月赚了56,000元。非常可靠。"
    ],
    authors: [
      "- 张经理, 食品出口",
      "- 李女士, 电子商务"
    ],
    advantages: [
      "¥280,000 完整销售服务",
      "非洲运营商 (节省160%成本!)",
      "自动化CRM系统",
      "完全透明 - 查看每笔交易",
      "从人员配置到投资回报报告"
    ]
  },
  'AE': {
    currency: 'AED',
    testimonials: [
      `زادت مبيعاتنا في أمريكا بنسبة ${220 + getRandomGrowth()}٪ في 3 أشهر. لهجة مثالية!`,
      "كشريك، ربحت 45,000 درهم في الشهر الأول. موثوق جدًا."
    ],
    authors: [
      "- أحمد, تصدير المواد الغذائية",
      "- نورا, التجارة الإلكترونية"
    ],
    advantages: [
      "150,000 درهم خدمة مبيعات كاملة",
      "عمال أفارقة (توفير 160%!)",
      "نظام CRM آلي",
      "شفافية كاملة - رؤية كل صفقة",
      "من التوظيف إلى تقارير العائد"
    ]
  },
  'TR': {
    currency: '₺',
    testimonials: [
      `ABD satışlarımızı 3 ayda ${225 + getRandomGrowth()}% artırdık. Mükemmel aksan!`,
      "Ortak olarak ilk ay 350,000₺ kazandım. Çok güvenilir."
    ],
    authors: [
      "- Emre, Gıda İhracatçısı",
      "- Ayşe, E-ticaret"
    ],
    advantages: [
      "1,200,000₺ tam satış hizmeti",
      "Afrikalı operatörler (%160 tasarruf!)",
      "Otomatik CRM sistemi",
      "Tam şeffaflık - her işlemi görün",
      "Personelden ROI raporlarına"
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
      heading: "Клиенттердің пікірлері",
      btn: "Жұмысты бастау"
    },
    footer: "© 2025 states.kz | Қазақстандық бизнес үшін халықаралық шешімдер"
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
      heading: "Отзывы клиентов",
      btn: "Начать работу"
    },
    footer: "© 2025 states.kz | Международные решения для казахстанского бизнеса"
  },
  'en': {
    title: "Call Center | US Market Export",
    description: "Complete sales solution for US market for Kazakhstani businesses",
    heading: "US Market Sales Services",
    tagline: "Complete solution for Kazakhstani businesses to enter US market",
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
      heading: "Client Testimonials",
      btn: "Start Working"
    },
    footer: "© 2025 states.kz | International solutions for Kazakhstani business"
  }
};

function getRandomGrowth() {
  return Math.floor(Math.random() * 2) + 1;
}