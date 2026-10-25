import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  kg: {
    home: "Башкы бет",
    countries: "Өлкөлөр",
    universities: "Университеттер",
    about: "Биз жөнүндө",
    contact: "Байланыш",
    startJourney: "Жолду баштоо",

    heroTitle: "Чет өлкөдө билим алуу — жаңы мүмкүнчүлүктөргө жолуң",
    heroText:
      "Өзүңө ылайыктуу өлкөнү жана университетти танда, кыялданган билимиңди алып, келечегиңди кур.",
    chooseUniversity: "Университет тандоо",
    universitiesCount: "Университет",
    countriesCount: "Өлкө",
    studentsCount: "Студент",

    advantagesTitle: "Эмне үчүн EDIVIA?",
    advantagesSubtitle: "Чет өлкөдө билим алуу үчүн керектүү нерселердин баары",
    advantage1Title: "Университет тандоо",
    advantage1Text: "Сага ылайыктуу университетти табууга жардам беребиз.",
    advantage2Title: "Өлкө тандоо",
    advantage2Text: "Өлкөлөр жана билим алуу мүмкүнчүлүктөрү тууралуу көбүрөөк бил.",
    advantage3Title: "Кеңеш берүү",
    advantage3Text: "Окууга тапшыруу жана билим алуу тууралуу суроолоруңа жооп ал.",

    popularLabel: "БАГЫТТАР",
popularTitle: "Популярдуу өлкөлөр",
popularText: "Өлкөнү тандап, билим алуу мүмкүнчүлүктөрү тууралуу көбүрөөк бил.",
arabia: "Сауд Арабиясы",
arabiaDesc: "Заманбап университеттер",
korea: "Түштүк Корея",
koreaDesc: "Технологиялар жана инновациялар",
germany: "Германия",
germanyDesc: "Сапат жана келечектеги мүмкүнчүлүктөр",
turkey: "Түркия",
turkeyDesc: "Жеткиликтүү билим берүү",
china: "Кытай",
chinaDesc: "Технологиялар жана мүмкүнчүлүктөр",
italy: "Италия",
italyDesc: "Маданият жана билим берүү",

storiesLabel: "СТУДЕНТТЕРДИН ОКУЯЛАРЫ",
storiesTitle: "Кыялдар чындыкка айланат",
storiesDescription:
  "Студенттер өлкөнү жана университетти кантип тандап, эл аралык билим алуу жолун баштаганын бил.",
alinaText:
  "Мен технологиялар өнүккөн өлкөдө окугум келчү. Университет тандоодон баштап, акырындык менен талаптарды түшүнө баштадым.",
ilyasText:
  "Башында окууга тапшыруу кыйын сезилген. Баарын этаптарга бөлгөндө, түшүнүктүү болуп калды.",
aidanaText:
  "Мен эл аралык билим алып, ошол эле учурда жаңы маданият менен таанышкым келчү.", 

  footerNavigation: "Навигация",
footerHelp: "Жардам",
footerContact: "Биз менен байланыш",
footerHome: "Башкы бет",
footerCountries: "Өлкөлөр",
footerUniversities: "Университеттер",
footerAbout: "Биз жөнүндө",
footerHowToApply: "Кантип тапшыруу керек",
footerContacts: "Байланыш",
footerRights: "Бардык укуктар корголгон.",

countriesHeroLabel: "EDIVIA • ӨЛКӨЛӨР",
countriesHeroTitle: <>Окуу үчүн өлкө<br />тандаңыз</>,
countriesHeroText: <>6 өлкө — миңдеген мүмкүнчүлүк.<br />Өзүңүзгө ылайыктуу багытты табыңыз.</>,
details: "Кененирээк",
popularDirections: "Популярдуу багыттар",
tuitionCost: "💰 Окуу акысы:",

saudiArabia: "Сауд Арабия",
saudiArabiaDesc: "Бай маданияты жана билим алуу үчүн кеңири мүмкүнчүлүктөрү бар заманбап өлкө.",
saudiArabiaDirections: ["Медицина", "Инженерия", "Бизнес", "IT жана технологиялар"],
saudiArabiaCost: "жылына $3,000ден баштап",

southKorea: "Түштүк Корея",
southKoreaDesc: "Заманбап технологиялары, күчтүү университеттери жана инновациялык билими менен белгилүү өлкө.",
southKoreaDirections: ["IT", "Медицина", "Бизнес", "Дизайн"],
southKoreaCost: "жылына $3,500дөн баштап",

germany: "Германия",
germanyDesc: "Сапаттуу европалык билим жана студенттер үчүн көптөгөн мүмкүнчүлүктөр.",
germanyDirections: ["Инженерия", "Медицина", "Экономика", "IT"],
germanyCost: "жылына €1,000ден баштап",

italy: "Италия",
italyDesc: "Искусство, архитектура, дизайн жана шыктануу өлкөсү.",
italyDirections: ["Дизайн", "Архитектура", "Мода", "Бизнес"],
italyCost: "жылына €1,000ден баштап",

turkey: "Түркия",
turkeyDesc: "Жеткиликтүү билим, кызыктуу маданият жана заманбап университеттер.",
turkeyDirections: ["Медицина", "Инженерия", "Бизнес", "IT"],
turkeyCost: "жылына $2,000ден баштап",

china: "Кытай",
chinaDesc: "Заманбап университеттери жана технологиялары тез өнүгүп жаткан өлкө.",
chinaDirections: ["IT", "Бизнес", "Медицина", "Тилдер"],
chinaCost: "жылына $2,500дөн баштап",

universitiesPageTitle: "Университеттер",
allUniversities: "Баары",
universityDetails: "Кененирээк",
universityNotFound: "Университет табылган жок",
backToUniversities: "← Университеттерге кайтуу",
aboutUniversity: "Университет жөнүндө",
tuitionLabel: "Окуу акысы",
tuitionUnknown: "Такталууда",
accommodationLabel: "Жашоо жайы",
accommodationUnknown: "Маалымат такталууда",
languageLabel: "Окутуу тили",
durationLabel: "Окуу мөөнөтү",
durationUnknown: "Программага жараша",
studyFields: "Окуу багыттары",
admissionRequirements: "Окууга тапшыруу талаптары",
mainExpenses: "Негизги чыгымдар",
universityCtaTitle: "Келечегиңди ушул жерден башта!",
universityCtaText: "Бул университетке тапшыруу тууралуу көбүрөөк билүү үчүн EDIVIA менен байланыш.",
applyButton: "Тапшыргым келет",
previousPhoto: "Мурунку сүрөт",
nextPhoto: "Кийинки сүрөт", 

universitiesPageTitle: "Университеттер",
allUniversities: "Баары",

universityCardDetails:"Кененирээк",
favoritesTitle: "Тандалгандар",
favoritesEmpty: "Азырынча тандалган университеттер жок",
  },

  en: {
    home: "Home",
    countries: "Countries",
    universities: "Universities",
    about: "About us",
    contact: "Contact",
    startJourney: "Start your journey",

    heroTitle: "Study abroad — your path to new opportunities",
    heroText:
      "Find the right country and university, get the education of your dreams, and start building your future.",
    chooseUniversity: "Choose a university",
    universitiesCount: "Universities",
    countriesCount: "Countries",
    studentsCount: "Students",

    advantagesTitle: "Why EDIVIA?",
advantagesSubtitle: "Everything you need to study abroad",
advantage1Title: "University Selection",
advantage1Text: "We will help you find a university that suits you.",
advantage2Title: "Choose a Country",
advantage2Text: "Learn more about countries and study opportunities.",
advantage3Title: "Consultation",
advantage3Text: "Get answers to your questions about admissions and studying.",

popularLabel: "DESTINATIONS",
popularTitle: "Popular Countries",
popularText: "Choose a country and learn more about study opportunities.",
arabia: "Saudi Arabia",
arabiaDesc: "Modern universities",
korea: "South Korea",
koreaDesc: "Technology and innovation",
germany: "Germany",
germanyDesc: "Quality and opportunities",
turkey: "Turkey",
turkeyDesc: "Affordable education",
china: "China",
chinaDesc: "Technology and opportunities",
italy: "Italy",
italyDesc: "Culture and education",  

storiesLabel: "STUDENT STORIES",
storiesTitle: "Dreams become reality",
storiesDescription:
  "Discover how students chose a country and university and began their journey toward international education.",
alinaText:
  "I wanted to study in a country where technology is advancing. I started by choosing a university and gradually understood the requirements.",
ilyasText:
  "At first, applying seemed complicated. Once I divided everything into steps, it became much clearer.",
aidanaText:
  "I wanted to receive an international education while discovering a new culture.",  
  
  footerNavigation: "Navigation",
footerHelp: "Help",
footerContact: "Contact us",
footerHome: "Home",
footerCountries: "Countries",
footerUniversities: "Universities",
footerAbout: "About us",
footerHowToApply: "How to apply",
footerContacts: "Contact",
footerRights: "All rights reserved.",

countriesHeroLabel: "EDIVIA • COUNTRIES",
countriesHeroTitle: <>Choose a country<br />to study in</>,
countriesHeroText: <>6 countries — thousands of opportunities.<br />Find the field that suits you best.</>,
details: "Learn more",
popularDirections: "Popular fields",
tuitionCost: "💰 Tuition fees:",

saudiArabia: "Saudi Arabia",
saudiArabiaDesc: "A modern country with a rich culture and great educational opportunities.",
saudiArabiaDirections: ["Medicine", "Engineering", "Business", "IT and Technology"],
saudiArabiaCost: "from $3,000 per year",

southKorea: "South Korea",
southKoreaDesc: "A country known for modern technology, strong universities, and innovative education.",
southKoreaDirections: ["IT", "Medicine", "Business", "Design"],
southKoreaCost: "from $3,500 per year",

germany: "Germany",
germanyDesc: "Quality European education and many opportunities for students.",
germanyDirections: ["Engineering", "Medicine", "Economics", "IT"],
germanyCost: "from €1,000 per year",

italy: "Italy",
italyDesc: "A country of art, architecture, design, and inspiration.",
italyDirections: ["Design", "Architecture", "Fashion", "Business"],
italyCost: "from €1,000 per year",

turkey: "Turkey",
turkeyDesc: "Affordable education, an interesting culture, and modern universities.",
turkeyDirections: ["Medicine", "Engineering", "Business", "IT"],
turkeyCost: "from $2,000 per year",

china: "China",
chinaDesc: "A rapidly developing country with modern universities and technology.",
chinaDirections: ["IT", "Business", "Medicine", "Languages"],
chinaCost: "from $2,500 per year", 

universitiesPageTitle: "Universities",
allUniversities: "All",
universityDetails: "Learn more",
universityNotFound: "University not found",
backToUniversities: "← Back to universities",
aboutUniversity: "About the university",
tuitionLabel: "Tuition fees",
tuitionUnknown: "To be confirmed",
accommodationLabel: "Accommodation",
accommodationUnknown: "Information to be confirmed",
languageLabel: "Language of instruction",
durationLabel: "Study duration",
durationUnknown: "Depends on the program",
studyFields: "Fields of study",
admissionRequirements: "Admission requirements",
mainExpenses: "Main expenses",
universityCtaTitle: "Start your future here!",
universityCtaText: "Contact EDIVIA to learn more about admission to this university.",
applyButton: "I want to apply",
previousPhoto: "Previous photo",
nextPhoto: "Next photo", 

universitiesPageTitle: "Universities",
allUniversities: "All",  

universityCardDetails:"Learn more",
favoritesTitle: "Favourites",
favoritesEmpty: "You haven't added any universities to your favorites yet",
  },

  ru: {
    home: "Главная",
    countries: "Страны",
    universities: "Университеты",
    about: "О нас",
    contact: "Контакты",
    startJourney: "Начать путь",

    heroTitle:
      "Учёба за границей — твой путь к новым возможностям",
    heroText:
      "Найди подходящую страну и университет, получи образование мечты и начни строить своё будущее.",
    chooseUniversity: "Выбрать университет",
    universitiesCount: "Университетов",
    countriesCount: "Стран",
    studentsCount: "Студентов",

    advantagesTitle: "Почему EDIVIA?",
advantagesSubtitle: "Всё необходимое для обучения за границей",
advantage1Title: "Подбор университета",
advantage1Text: "Поможем найти университет, который подходит именно вам.",
advantage2Title: "Выбор страны",
advantage2Text: "Узнайте больше о странах и возможностях обучения.",
advantage3Title: "Консультация",
advantage3Text: "Получите ответы на вопросы о поступлении и обучении.",

popularLabel: "НАПРАВЛЕНИЯ",
popularTitle: "Популярные страны",
popularText: "Выбери страну и узнай больше о возможностях обучения.",
arabia: "Саудовская Аравия",
arabiaDesc: "Современные университеты",
korea: "Южная Корея",
koreaDesc: "Технологии и инновации",
germany: "Германия",
germanyDesc: "Качество и перспективы",
turkey: "Турция",
turkeyDesc: "Доступное образование",
china: "Китай",
chinaDesc: "Технологии и возможности",
italy: "Италия",
italyDesc: "Культура и образование",  

storiesLabel: "ИСТОРИИ СТУДЕНТОВ",
storiesTitle: "Мечты становятся реальностью",
storiesDescription:
  "Узнай, как студенты выбирали страну и университет и начинали свой путь к международному образованию.",
alinaText:
  "Мне хотелось учиться в стране, где развиваются технологии. Я начала с выбора университета и постепенно разобралась с требованиями.",
ilyasText:
  "Сначала поступление казалось сложным. Когда я разделил всё на этапы, стало намного понятнее.",
aidanaText:
  "Я хотела получить международное образование и одновременно познакомиться с новой культурой.", 
  
  footerNavigation: "Навигация",
footerHelp: "Помощь",
footerContact: "Связаться с нами",
footerHome: "Главная",
footerCountries: "Страны",
footerUniversities: "Университеты",
footerAbout: "О нас",
footerHowToApply: "Как поступить",
footerContacts: "Контакты",
footerRights: "Все права защищены.",

countriesHeroLabel: "EDIVIA • СТРАНЫ",
countriesHeroTitle: <>Выберите страну<br />для обучения</>,
countriesHeroText: <>6 стран — тысячи возможностей.<br />Найдите направление, которое подходит именно вам.</>,
details: "Подробнее",
popularDirections: "Популярные направления",
tuitionCost: "💰 Стоимость обучения:",

saudiArabia: "Саудовская Аравия",
saudiArabiaDesc: "Современная страна с богатой культурой и большими возможностями для образования.",
saudiArabiaDirections: ["Медицина", "Инженерия", "Бизнес", "IT и технологии"],
saudiArabiaCost: "от $3,000 в год",

southKorea: "Южная Корея",
southKoreaDesc: "Страна современных технологий, сильных университетов и инновационного образования.",
southKoreaDirections: ["IT", "Медицина", "Бизнес", "Дизайн"],
southKoreaCost: "от $3,500 в год",

germany: "Германия",
germanyDesc: "Качественное европейское образование и множество возможностей для студентов.",
germanyDirections: ["Инженерия", "Медицина", "Экономика", "IT"],
germanyCost: "от €1,000 в год",

italy: "Италия",
italyDesc: "Страна искусства, архитектуры, дизайна и вдохновения.",
italyDirections: ["Дизайн", "Архитектура", "Мода", "Бизнес"],
italyCost: "от €1,000 в год",

turkey: "Турция",
turkeyDesc: "Доступное образование, интересная культура и современные университеты.",
turkeyDirections: ["Медицина", "Инженерия", "Бизнес", "IT"],
turkeyCost: "от $2,000 в год",

china: "Китай",
chinaDesc: "Быстро развивающаяся страна с современными университетами и технологиями.",
chinaDirections: ["IT", "Бизнес", "Медицина", "Языки"],
chinaCost: "от $2,500 в год",   

universitiesPageTitle: "Университеты",
allUniversities: "Все",
universityDetails: "Подробнее",
universityNotFound: "Университет не найден",
backToUniversities: "← Вернуться к университетам",
aboutUniversity: "Об университете",
tuitionLabel: "Стоимость обучения",
tuitionUnknown: "Уточняется",
accommodationLabel: "Проживание",
accommodationUnknown: "Информация уточняется",
languageLabel: "Язык обучения",
durationLabel: "Продолжительность обучения",
durationUnknown: "Зависит от программы",
studyFields: "Направления обучения",
admissionRequirements: "Требования для поступления",
mainExpenses: "Основные расходы",
universityCtaTitle: "Начни своё будущее здесь!",
universityCtaText: "Свяжись с EDIVIA, чтобы узнать больше о поступлении в этот университет.",
applyButton: "Хочу поступить",
previousPhoto: "Предыдущее фото",
nextPhoto: "Следующее фото", 

universitiesPageTitle: "Университеты",
allUniversities: "Все",

universityCardDetails: "Подробнее",
favoritesTitle: "Избранное",
favoritesEmpty: "Пока нет избранных университетов",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("edivia-language") || "ru";
  });

  function changeLanguage(lang) {
    if (!translations[lang]) return;

    setLanguage(lang);
    localStorage.setItem("edivia-language", lang);
  }

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}       