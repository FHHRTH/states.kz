// Random growth percentage generator (1-2%)
function getRandomGrowth() {
  return Math.floor(Math.random() * 2) + 1;
}

// Country-specific content with enhanced structure
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
    ],
    advantageDetails: [
      " - тек нәтиже үшін",
      " - ана тілінде сөйлейді",
      " - барлық қоңырауларды бақылау",
      " - әр сауданы көре аласыз",
      " - кілттік шешім"
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
    ],
    advantageDetails: [
      " - results guaranteed",
      " - native speakers",
      " - full call monitoring",
      " - track every transaction",
      " - end-to-end solution"
    ]
  },
  // Other countries (CN, AE, TR) remain the same structure
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
    ],
    advantageDetails: [
      " - 保证结果",
      " - 母语人士",
      " - 全面通话监控",
      " - 跟踪每笔交易",
      " - 端到端解决方案"
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
    ],
    advantageDetails: [
      " - نتائج مضمونة",
      " - متحدثون أصليون",
      " - مراقبة كاملة للمكالمات",
      " - تتبع كل صفقة",
      " - حل شامل"
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
    ],
    advantageDetails: [
      " - sonuç garantili",
      " - ana dil konuşmacıları",
      " - tam çağrı izleme",
      " - her işlemi takip edin",
      " - uçtan uca çözüm"
    ]
  }
};

// Enhanced translations with RTL support
const translations = {
  'kk': {
    title: "Қоңырау орталығы | АҚШ нарығына экспорт",
    description: "Қазақстандық бизнес үшін АҚШ нарығына толық сату шешімі",
    heading: "АҚШ нарығына сату қызметі",
    tagline: "Қазақстандық бизнес үшін АҚШ нарығына толық сату шешімі",
    blocks: {
      block1: {
        heading: "Экспорттық шешімнің артықшылықтары",
        buttons: {
          telegram: "Telegram-де қоңырау",
          whatsapp: "WhatsApp-те сұрақ"
        }
      },
      block2: {
        heading: "Серіктестік бағдарламасы",
        button: "Серіктес болу"
      },
      block3: {
        heading: "Клиенттердің пікірлері",
        button: "Жұмысты бастау"
      }
    },
    footer: "© 2025 states.kz | Қазақстандық бизнес үшін халықаралық шешімдер",
    rtl: false
  },
  'ru': {
    title: "Колл-центр | Экспорт в США",
    description: "Полное решение для продаж на рынок США для казахстанского бизнеса",
    heading: "Услуги по продажам в США",
    tagline: "Полное решение для казахстанского бизнеса по выходу на рынок США",
    blocks: {
      block1: {
        heading: "Преимущества экспортного решения",
        buttons: {
          telegram: "Связаться в Telegram",
          whatsapp: "Вопрос в WhatsApp"
        }
      },
      block2: {
        heading: "Партнерская программа",
        button: "Стать партнером"
      },
      block3: {
        heading: "Отзывы клиентов",
        button: "Начать работу"
      }
    },
    footer: "© 2025 states.kz | Международные решения для казахстанского бизнеса",
    rtl: false
  },
  'en': {
    title: "Call Center | US Market Export",
    description: "Complete sales solution for US market for Kazakhstani businesses",
    heading: "US Market Sales Services",
    tagline: "Complete solution for Kazakhstani businesses to enter US market",
    blocks: {
      block1: {
        heading: "Export Solution Benefits",
        buttons: {
          telegram: "Contact on Telegram",
          whatsapp: "Question on WhatsApp"
        }
      },
      block2: {
        heading: "Partnership Program",
        button: "Become a Partner"
      },
      block3: {
        heading: "Client Testimonials",
        button: "Start Working"
      }
    },
    footer: "© 2025 states.kz | International solutions for Kazakhstani business",
    rtl: false
  },
  'ar': {
    title: "مركز اتصالات | تصدير للسوق الأمريكي",
    description: "حلول مبيعات كاملة للشركات الكازاخستانية للوصول للسوق الأمريكي",
    heading: "خدمات مبيعات السوق الأمريكي",
    tagline: "حل متكامل للشركات الكازاخستانية للدخول للسوق الأمريكي",
    blocks: {
      block1: {
        heading: "مميزات حل التصدير",
        buttons: {
          telegram: "تواصل عبر تلغرام",
          whatsapp: "استفسار عبر واتساب"
        }
      },
      block2: {
        heading: "برنامج الشراكة",
        button: "كن شريكًا"
      },
      block3: {
        heading: "آراء العملاء",
        button: "ابدأ العمل"
      }
    },
    footer: "© 2025 states.kz | حلول دولية للشركات الكازاخستانية",
    rtl: true
  }
};

// DOM Elements
const elements = {
  title: document.title,
  description: document.querySelector('meta[name="description"]'),
  heading: document.getElementById('main-heading'),
  tagline: document.getElementById('main-tagline'),
  blocks: {
    block1: {
      heading: document.getElementById('block1-heading'),
      buttons: {
        telegram: document.getElementById('btn-telegram'),
        whatsapp: document.getElementById('btn-whatsapp')
      }
    },
    block2: {
      heading: document.getElementById('block2-heading'),
      button: document.getElementById('btn-partner')
    },
    block3: {
      heading: document.getElementById('block3-heading'),
      button: document.getElementById('btn-contact')
    }
  },
  testimonials: {
    text1: document.getElementById('testimonial1-text'),
    text2: document.getElementById('testimonial2-text'),
    author1: document.getElementById('testimonial1-author'),
    author2: document.getElementById('testimonial2-author')
  },
  footer: document.getElementById('footer')
};

// Set country-specific content
function setCountry(countryCode = 'US') {
  const country = countryContent[countryCode] || countryContent['US'];
  
  // Update testimonials
  elements.testimonials.text1.textContent = country.testimonials[0];
  elements.testimonials.text2.textContent = country.testimonials[1];
  elements.testimonials.author1.textContent = country.authors[0];
  elements.testimonials.author2.textContent = country.authors[1];
  
  // Update advantages list
  const advantageItems = document.querySelectorAll('#block1-list li');
  advantageItems.forEach((item, index) => {
    item.innerHTML = `<strong>${country.advantages[index]}</strong>${country.advantageDetails[index] || ''}`;
  });
}

// Set language and direction
function setLanguage(lang = 'en') {
  const translation = translations[lang] || translations['en'];
  
  // Update metadata
  document.title = translation.title;
  elements.description.setAttribute('content', translation.description);
  
  // Update visible content
  elements.heading.textContent = translation.heading;
  elements.tagline.textContent = translation.tagline;
  
  // Update blocks
  elements.blocks.block1.heading.textContent = translation.blocks.block1.heading;
  elements.blocks.block1.buttons.telegram.textContent = translation.blocks.block1.buttons.telegram;
  elements.blocks.block1.buttons.whatsapp.textContent = translation.blocks.block1.buttons.whatsapp;
  
  elements.blocks.block2.heading.textContent = translation.blocks.block2.heading;
  elements.blocks.block2.button.textContent = translation.blocks.block2.button;
  
  elements.blocks.block3.heading.textContent = translation.blocks.block3.heading;
  elements.blocks.block3.button.textContent = translation.blocks.block3.button;
  
  // Update footer
  elements.footer.textContent = translation.footer;
  
  // Set document direction
  document.documentElement.lang = lang;
  document.body.dir = translation.rtl ? 'rtl' : 'ltr';
}

// Initialize with default values
function init() {
  setCountry('US');
  setLanguage('en');
  
  // Set up language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      const countryMap = {
        'en': 'US',
        'ru': 'KZ',
        'kk': 'KZ',
        'ar': 'AE'
      };
      setCountry(countryMap[lang] || 'US');
      setLanguage(lang);
    });
  });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
