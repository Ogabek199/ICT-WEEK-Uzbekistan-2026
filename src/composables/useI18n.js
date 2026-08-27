import { ref, computed } from 'vue'

export const currentLanguage = ref('en')

export const setLanguage = (lang) => {
  if (['en', 'uz', 'ru'].includes(lang)) {
    currentLanguage.value = lang
    localStorage.setItem('ictweek_lang', lang)
  }
}

// Initialize from localStorage if present
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('ictweek_lang')
  if (saved && ['en', 'uz', 'ru'].includes(saved)) {
    currentLanguage.value = saved
  }
}

export const translations = {
  en: {
    nav: {
      home: 'Home',
      program: 'Program',
      partners: 'Partners',
      incentives: 'Incentives',
      register: 'Register now'
    },
    hero: {
      badgeDate: 'September 22–26, 2026',
      badgeVenue: 'CAEx, Tashkent',
      titleLine1: "Unlock the World's Fastest",
      titleLine2: "Growing Ecosystem",
      subtitle: "learn everything about the thriving uzbek tech ecosystem — in just one week",
      registerBtn: "Register now",
      agendaBtn: "Full agenda",
      countdownLabel: "EVENT STARTS IN",
      days: "DAYS",
      hours: "HOURS",
      minutes: "MINUTES",
      seconds: "SECONDS"
    },
    saveSpot: {
      tag: "INNOVATION & ECOSYSTEM",
      title: "Save your spot today!",
      description: "Every unicorn starts as a single star.\nTogether they become the Northern Lights.\n\nWelcome to Uzbekistan, where visionary government support and a thriving innovation ecosystem help founders turn bold ideas into global ventures. Here, startups and tech companies don't just become part of the Northern Lights—they discover their North Star and follow it all the way to international success.",
      metric1Num: "50+",
      metric1Desc: "Countries Represented",
      metric2Num: "10K+",
      metric2Desc: "Global Attendees",
      metric3Num: "200+",
      metric3Desc: "Keynote Speakers",
      metric4Num: "0%",
      metric4Desc: "Tax Rates for IT Park"
    },
    savespot: {
      title: "Save your spot today!",
      desc: "Every unicorn starts as a single star. \nTogether they become the Northern Lights",
      btn: "Register now"
    },
    attendees: {
      title: "Past Attendees Include",
      subtitle: "Trusted by global tech giants, venture capital firms, and hyper-growth unicorns."
    },
    summits: {
      badge: "CONFERENCES & SUMMITS",
      title: "ICTWEEK 2026 Summit Tracks",
      subtitle: "Explore dedicated high-level summits, specialized forums, and global networking tracks.",
      tabEnterprise: "Enterprise Uzbekistan",
      tabStartup: "Startup & VC",
      tabOutsourcing: "Service Companies",
      tabGlobal: "Global Bridge",
      tabGamedev: "Gamedev",
      tabAi: "AI NATIVE",
      idealFor: "Ideal for:",
      attendBtn: "Attend this track"
    },
    bento: {
      badge: "STRATEGIC INCENTIVES & ANALYTICS",
      title: "Digital Startups Program & IT Park Key Indicators",
      subtitle: "Explore comprehensive growth metrics, export analytics, and unmatched legal & tax incentives.",
      tabAnalytics: "Key Indicators & Export Analytics",
      tabEnterpriseJurisdiction: "Enterprise Uzbekistan Framework",
      tabIncentives: "Digital Startups Incentives & Zero-Risk",
      exportGeoTitle: "Export Geography",
      exportTypesTitle: "Types of Export",
      ictRevenueTitle: "ICT Export Revenue (Million USD)",
      membersTitle: "Number of Member Companies",
      foreignCapitalTitle: "Growth of Companies with Foreign Capital",
      revenueTitle: "Revenue of Members (Million USD)",
      increase: "increase",
      officesAbroad: "6 Representative offices abroad"
    },
    partners: {
      badge: "ECOSYSTEM & SUPPORTERS",
      title: "Our partners",
      subtitle: "Supported by state organizations, international venture funds, and world-class technology infrastructure.",
      sponsorBannerTitle: "Interested in becoming a sponsor or exhibitor?",
      sponsorBannerDesc: "Showcase your brand to over 10,000+ international tech founders, CTOs, and investors.",
      becomePartnerBtn: "Become a partner"
    },
    form: {
      badge: "OFFICIAL PASS REGISTRATION",
      title: "Register for ICTWEEK Uzbekistan 2026",
      subtitle: "Join global tech leaders, enterprise delegates, and investors in Tashkent. Complete your details below to secure your pass.",
      fullName: "Full name",
      fullNamePlaceholder: "e.g. John Doe",
      email: "Email",
      emailPlaceholder: "e.g. alex@company.com",
      company: "Company / Organization",
      companyPlaceholder: "e.g. Tech Global Inc.",
      category: "I am attending as",
      categoryPlaceholder: "Select category...",
      country: "Country",
      countryPlaceholder: "Select country...",
      phone: "Phone number",
      phonePlaceholder: "e.g. +1 (555) 019-2834",
      position: "Position / Job Title",
      positionPlaceholder: "e.g. Managing Director",
      tracks: "Event track(s) you plan to attend (Select all that apply)",
      tracksPlaceholder: "Select track(s)...",
      source: "How did you hear about us?",
      source1: "Online Advertisement (Instagram, Facebook, LinkedIn, Google)",
      source2: "Partner Network",
      source3: "IT Park Representative",
      source4: "Organic Search / Website",
      focalPoint: "Name of focal point in IT Park (if available)",
      focalPointPlaceholder: "e.g. Contact person or team member name",
      consent: "Yes, I agree that IT Park Uzbekistan team may contact me by e-mail to inquire about my request, and I am aware that my shared personal data will be saved. This consent can be withdrawn at any time.",
      submitBtn: "Register now",
      submitting: "Processing pass...",
      successTitle: "Registration Submitted Successfully!",
      successDesc: "Thank you for registering. A confirmation email and digital pass have been sent to your email.",
      badgeTitle: "ICTWEEK 2026 DELEGATE PASS",
      registerAnother: "Register Another Attendee"
    },
    footer: {
      about: "The premier information and communication technology summit in Central Asia. Connecting founders, enterprise innovators, and global venture funds.",
      organizers: "Organized by Ministry of Digital Technologies & IT Park Uzbekistan",
      navigation: "Navigation",
      summits: "Summits & Tracks",
      venueContact: "Venue & Contact",
      rights: "© 2026 ICTWEEK Uzbekistan. All rights reserved."
    }
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      program: 'Dastur',
      partners: 'Hamkorlar',
      incentives: 'Imtiyozlar',
      register: "Ro'yxatdan o'tish"
    },
    hero: {
      badgeDate: '22–26-Sentabr, 2026',
      badgeVenue: 'CAEx, Toshkent',
      titleLine1: "Dunyodagi eng tez rivojlanayotgan",
      titleLine2: "Ekotizimni kashf eting",
      subtitle: "rivojlanayotgan o'zbek texnologik ekotizimi haqida hamma narsani — atigi bir haftada bilib oling",
      registerBtn: "Ro'yxatdan o'tish",
      agendaBtn: "To'liq dastur",
      countdownLabel: "TADBIR BOSHLANISHIGA QOLDI",
      days: "KUN",
      hours: "SOAT",
      minutes: "DAQIQA",
      seconds: "SONIYA"
    },
    saveSpot: {
      tag: "INNOVATSIYA VA EKOTIZIM",
      title: "O'z o'rningizni hoziroq band qiling!",
      description: "Har bir unikorn bitta yulduzdan boshlanadi.\nBirgalikda ular Shimol yog'dusiga aylanadi.\n\nO'zbekistonga xush kelibsiz — bu yerda hukumatning innovatsion qo'llab-quvvatlashi va kuchli ekotizim startapchilarga o'z g'oyalarini global miqyosga olib chiqishda yordam beradi. Bu yerda kompaniyalar o'z yo'lini topib, xalqaro muvaffaqiyatga erishadilar.",
      metric1Num: "50+",
      metric1Desc: "Ishtirokchi Davlatlar",
      metric2Num: "10K+",
      metric2Desc: "Global Mehmonlar",
      metric3Num: "200+",
      metric3Desc: "Asosiy Spikerlar",
      metric4Num: "0%",
      metric4Desc: "IT Park Soliq Stavkalari"
    },
    savespot: {
      title: "O'z o'rningizni hoziroq band qiling!",
      desc: "Har bir unikorn bitta yulduzdan boshlanadi. \nBirgalikda ular Shimol yog'dusiga aylanadi",
      btn: "Ro'yxatdan o'tish"
    },
    attendees: {
      title: "Avvalgi Ishtirokchilarimiz",
      subtitle: "Dunyoning yetakchi texnologiya gigantlari, venchur fondlari va yirik kompaniyalari ishonchi."
    },
    summits: {
      badge: "KONFERENSIYALAR VA SAMMITLAR",
      title: "ICTWEEK 2026 Sammit Treklari",
      subtitle: "Yuqori darajadagi maxsus sammitlar, ixtisoslashtirilgan forumlar va xalqaro netvorking maydonlari.",
      tabEnterprise: "Enterprise Uzbekistan",
      tabStartup: "Startup & VC",
      tabOutsourcing: "Xizmat Ko'rsatuvchi Kompaniyalar",
      tabGlobal: "Global Bridge",
      tabGamedev: "Gamedev",
      tabAi: "AI NATIVE",
      idealFor: "Kimlar uchun:",
      attendBtn: "Ushbu trekda qatnashish"
    },
    bento: {
      badge: "STRATEGIK IMTIYOZLAR VA TAHLILLAR",
      title: "Raqamli Startaplar Dasturi va IT Park Ko'rsatkichlari",
      subtitle: "To'liq eksport tahlillari, xalqaro geografiya va misli ko'rilmagan soliq hamda huquqiy imtiyozlar.",
      tabAnalytics: "IT Park Asosiy Ko'rsatkichlari",
      tabEnterpriseJurisdiction: "Enterprise Uzbekistan Tizimi",
      tabIncentives: "Startap Imtiyozlari & Zero-Risk",
      exportGeoTitle: "Eksport Geografiyasi",
      exportTypesTitle: "Eksport Turlari",
      ictRevenueTitle: "AKT Eksport Daromadi (Mln USD)",
      membersTitle: "A'zo Kompaniyalar Soni",
      foreignCapitalTitle: "Xorijiy Kapitalga Ega Kompaniyalar O'sishi",
      revenueTitle: "A'zolar Daromadi (Mln USD)",
      increase: "o'sish",
      officesAbroad: "Xorijdagi 6 ta vakolatxona"
    },
    partners: {
      badge: "EKOTIZIM VA HAMKORLAR",
      title: "Bizning Hamkorlarimiz",
      subtitle: "Davlat tashkilotlari, xalqaro venchur fondlari va zamonaviy texnologik infratuzilma ko'magida.",
      sponsorBannerTitle: "Homiylik yoki ko'rgazma ishtirokchisi bo'lishni xohlaysizmi?",
      sponsorBannerDesc: "O'z brendingizni 10,000+ dan ortiq xalqaro ta'sischilar, investorlar va texnologiya rahbarlariga namoyish eting.",
      becomePartnerBtn: "Hamkor bo'lish"
    },
    form: {
      badge: "RASMIY RO'YXATDAN O'TISH",
      title: "ICTWEEK Uzbekistan 2026 ga ro'yxatdan o'tish",
      subtitle: "Toshkentda global texnologiya yetakchilari, korporativ delegatlar va investorlarga qo'shiling.",
      fullName: "To'liq ism-familiya",
      fullNamePlaceholder: "masalan: Alisher Navoiy",
      email: "Elektron pochta",
      emailPlaceholder: "masalan: info@company.com",
      company: "Kompaniya / Tashkilot nomi",
      companyPlaceholder: "masalan: Tech Global Inc.",
      category: "Qatnashuvchi toifasi",
      categoryPlaceholder: "Toifani tanlang...",
      country: "Davlat",
      countryPlaceholder: "Davlatni tanlang...",
      phone: "Telefon raqami",
      phonePlaceholder: "masalan: +998 90 123 45 67",
      position: "Lavozim",
      positionPlaceholder: "masalan: Bosh direktor / CTO",
      tracks: "Qatnashmoqchi bo'lgan trek(lar)ingiz (barchasini belgilang)",
      tracksPlaceholder: "Trek(lar)ni tanlang...",
      source: "Biz haqimizda qayerdan bildingiz?",
      source1: "Internet reklamasi (Instagram, Facebook, LinkedIn, Google)",
      source2: "Hamkorlar tarmog'i orqali",
      source3: "IT Park vakili orqali",
      source4: "Qidiruv tizimlari / Veb-sayt",
      focalPoint: "IT Park dagi aloqa shaxsi (agar mavjud bo'lsa)",
      focalPointPlaceholder: "masalan: Aloqa shaxsi ismi",
      consent: "Ha, men IT Park Uzbekistan jamoasi mening so'rovim yuzasidan e-mail orqali bog'lanishiga roziman va shaxsiy ma'lumotlarim saqlanishidan xabardorman. Bu rozilikni istalgan vaqtda qaytarib olish mumkin.",
      submitBtn: "Ro'yxatdan o'tish",
      submitting: "Rasmiylashtirilmoqda...",
      successTitle: "Muvaffaqiyatli Ro'yxatdan O'tdingiz!",
      successDesc: "Ro'yxatdan o'tganingiz uchun rahmat! Tasdiq xati va raqamli beydj elektron pochtangizga yuborildi.",
      badgeTitle: "ICTWEEK 2026 DELEGAT PASS",
      registerAnother: "Yana bir ishtirokchini ro'yxatdan o'tkazish"
    },
    footer: {
      about: "Markaziy Osiyodagi eng yirik AKT sammiti. Startap ta'sischilari, yirik korporatsiyalar va global venchur fondlarini birlashtiradi.",
      organizers: "Raqamli Texnologiyalar Vazirligi & IT Park Uzbekistan tomonidan tashkillashtirilgan",
      navigation: "Navigatsiya",
      summits: "Sammitlar va Treklar",
      venueContact: "Manzil va Bog'lanish",
      rights: "© 2026 ICTWEEK Uzbekistan. Barcha huquqlar himoyalangan."
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      program: 'Программа',
      partners: 'Партнеры',
      incentives: 'Льготы',
      register: 'Регистрация'
    },
    hero: {
      badgeDate: '22–26 Сентября, 2026',
      badgeVenue: 'CAEx, Ташкент',
      titleLine1: "Откройте самую быстрорастущую",
      titleLine2: "экосистему в мире",
      subtitle: "узнайте всё о быстрорастущей IT-экосистеме Узбекистана — всего за одну неделю",
      registerBtn: "Зарегистрироваться",
      agendaBtn: "Полная программа",
      countdownLabel: "ДО НАЧАЛА МЕРОПРИЯТИЯ",
      days: "ДНЕЙ",
      hours: "ЧАСОВ",
      minutes: "МИНУТ",
      seconds: "СЕКУНД"
    },
    saveSpot: {
      tag: "ИННОВАЦИИ И ЭКОСИСТЕМА",
      title: "Забронируйте место прямо сейчас!",
      description: "Каждый единорог начинается с одной звезды.\nВместе они становятся Северным Сиянием.\n\nДобро пожаловать в Узбекистан, где поддержка государства и растущая экосистема инноваций помогают основателям превращать смелые идеи в глобальные проекты.",
      metric1Num: "50+",
      metric1Desc: "Стран-участниц",
      metric2Num: "10K+",
      metric2Desc: "Мировых делегатов",
      metric3Num: "200+",
      metric3Desc: "Ключевых спикеров",
      metric4Num: "0%",
      metric4Desc: "Налоги резидентов IT Park"
    },
    savespot: {
      title: "Забронируйте место прямо сейчас!",
      desc: "Каждый единорог начинается с одной звезды. \nВместе они становятся Северным Сиянием",
      btn: "Зарегистрироваться"
    },
    attendees: {
      title: "Среди Прошлых Участников",
      subtitle: "Доверие ведущих мировых технологических корпораций и венчурных фондов."
    },
    summits: {
      badge: "КОНФЕРЕНЦИИ И САММИТЫ",
      title: "Треки Саммитов ICTWEEK 2026",
      subtitle: "Отраслевые саммиты, специализированные форумы и глобальный нетворкинг.",
      tabEnterprise: "Enterprise Uzbekistan",
      tabStartup: "Startup & VC",
      tabOutsourcing: "Сервисные Компании",
      tabGlobal: "Global Bridge",
      tabGamedev: "Gamedev",
      tabAi: "AI NATIVE",
      idealFor: "Идеально для:",
      attendBtn: "Участвовать в треке"
    },
    bento: {
      badge: "СТРАТЕГИЧЕСКИЕ ЛЬГОТЫ И АНАЛИТИКА",
      title: "Программа Цифровых Стартапов и Показатели IT Park",
      subtitle: "Комплексная аналитика экспорта, мировая география и беспрецедентные налоговые преференции.",
      tabAnalytics: "Ключевые Показатели IT Park",
      tabEnterpriseJurisdiction: "Юрисдикция Enterprise Uzbekistan",
      tabIncentives: "Льготы Стартапов & Zero-Risk",
      exportGeoTitle: "География Экспорта",
      exportTypesTitle: "Виды Экспорта",
      ictRevenueTitle: "Выручка IT-Экспорта (Млн USD)",
      membersTitle: "Количество Компаний-Резидентов",
      foreignCapitalTitle: "Рост Компаний с Иностранным Капиталом",
      revenueTitle: "Выручка Резидентов (Млн USD)",
      increase: "рост",
      officesAbroad: "6 Зарубежных представительств"
    },
    partners: {
      badge: "ЭКОСИСТЕМА И ПАРТНЕРЫ",
      title: "Наши Партнеры",
      subtitle: "При поддержке государственных органов, международных фондов и современной инфраструктуры.",
      sponsorBannerTitle: "Хотите стать спонсором или экспонентом?",
      sponsorBannerDesc: "Продемонстрируйте свой бренд более чем 10 000+ международным фаундерам, инвесторам и IT-директорам.",
      becomePartnerBtn: "Стать партнером"
    },
    form: {
      badge: "ОФИЦИАЛЬНАЯ РЕГИСТРАЦИЯ",
      title: "Регистрация на ICTWEEK Uzbekistan 2026",
      subtitle: "Присоединяйтесь к мировым лидерам технологий, инвесторам и делегатам в Ташкенте.",
      fullName: "Полное имя",
      fullNamePlaceholder: "напр. Иван Иванов",
      email: "Электронная почта",
      emailPlaceholder: "напр. alex@company.com",
      company: "Компания / Организация",
      companyPlaceholder: "напр. Tech Global Inc.",
      category: "Категория участия",
      categoryPlaceholder: "Выберите категорию...",
      country: "Страна",
      countryPlaceholder: "Выберите страну...",
      phone: "Номер телефона",
      phonePlaceholder: "напр. +998 90 123 45 67",
      position: "Должность",
      positionPlaceholder: "напр. Генеральный директор / CTO",
      tracks: "Интересующие треки (выберите все подходящие)",
      tracksPlaceholder: "Выберите треки...",
      source: "Как вы узнали о нас?",
      source1: "Интернет-реклама (Instagram, Facebook, LinkedIn, Google)",
      source2: "Партнерская сеть",
      source3: "Представитель IT Park",
      source4: "Поисковые системы / Сайт",
      focalPoint: "Контактное лицо в IT Park (если имеется)",
      focalPointPlaceholder: "напр. Имя контактного лица",
      consent: "Да, я согласен на обработку персональных данных и получение информационной рассылки от команды IT Park Uzbekistan.",
      submitBtn: "Зарегистрироваться",
      submitting: "Обработка...",
      successTitle: "Регистрация Успешно Завершена!",
      successDesc: "Спасибо за регистрацию! Подтверждение и цифровой бейдж отправлены на вашу почту.",
      badgeTitle: "ДЕКСКЛЮЗИВНЫЙ БЕЙДЖ ДЕЛЕГАТА ICTWEEK 2026",
      registerAnother: "Зарегистрировать другого участника"
    },
    footer: {
      about: "Главный саммит информационно-коммуникационных технологий в Центральной Азии. Объединяет основателей, бизнес и венчурные фонды.",
      organizers: "Организовано Министерством Цифровых Технологий & IT Park Uzbekistan",
      navigation: "Навигация",
      summits: "Саммиты и Треки",
      venueContact: "Локация и Контакты",
      rights: "© 2026 ICTWEEK Uzbekistan. Все права защищены."
    }
  }
}

export function useI18n() {
  const t = (path) => {
    const keys = path.split('.')
    let current = translations[currentLanguage.value] || translations.en
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key]
      } else {
        // Fallback to English
        let fallback = translations.en
        for (const fbKey of keys) {
          if (fallback && fallback[fbKey] !== undefined) {
            fallback = fallback[fbKey]
          } else {
            return path
          }
        }
        return fallback
      }
    }
    return current
  }

  return {
    lang: currentLanguage,
    setLanguage,
    t
  }
}
