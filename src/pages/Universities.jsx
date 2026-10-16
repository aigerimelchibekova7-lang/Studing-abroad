import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UniversityCard from "../components/UniversityCard";
import FavoriteButton from "../components/FavoriteButton";
import "./Universities.css";

export const universities = [
  {
name: "King Saud University",
country: "Арабия",
flag: "🇸🇦",
city: "Эр-Рияд",
image: "/KingSaud.jpg",
 images: [
      "/KingSaud.jpeg",
      "/KingSaud1.jpeg",
      "KingSaud2.jpeg",
    ],

description: "Крупный университет Саудовской Аравии. Университе  предлагает широкий выбор программ и сочетает совроменные образовательные направления с академическими исследованиями.",
fields: ["IT", "Медицина", "Бизнес"],
tuition: " Стоимость зависит от программы и категории студента. Для международных студентов доступны стипендии и отдельные платные программы.",
livingCost: "Зависит от района и образа жизни.",
accommodation: "Студенческое общежития или аренда жилья в Эр-Рияде.",
language: "Английский / Арабский",
duration: "Обычно 4 года для программ бакалавриата",

requirements: [
  "Аттестат о среднем образовании",
  "Документы об образовании",
  "Подтверждение знания языка — если требуется программой",
  "Дополнительные требования зависят от программы"
  ],

  expenses: [
    "Проживание",
    "Питание",
    "Транспорт по Эр-Рияду",
    "Учебные материалы",
    "Медицинская страховка"
  ]
},
{
name: "King Abdulaziz University",
country: "Арабия",
flag: "🇸🇦",
city: "Джидда",
image: "/Abdulaziz.jpg",
description: "Университет в Джидде, расположенной на побережье Красного моря. Известен широким выбором специальностей и международной образовательной средой.",
fields: ["Инженерия", "Медицина", "IT"],
tuition: "Зависит от выбранной программы. Условия для международных студентов необходимо уточнять при подаче документов.",
accommodation: "Студенческое общежитие или аренда жилья в Джидде.",
language: "Английский / Арабский",
duration: "Обычно 4 года для программ бакалавриата",

requirements: [
  "Аттестат о среднем образовании",
    "Академическая выписка",
    "Документ, удостоверяющий личность",
    "Подтверждение знания языка при необходимости"
],

expenses: [
  "Проживание",
  "Питание",
  "Транспорт",
  "Учебные материалы",
  "Повседневные расходы"
]
},
{
name: "King Fahd University",
country: "Арабия",
flag: "🇸🇦",
city: "Дахран",
image: "/Fand.jpg",
images:[
  "https://www.abouther.com/sites/default/files/2018/02/16/king_abdulaziz_university.jpg",
  "https://vid.alarabiya.net/images/2021/07/27/a5f00a65-2fcd-4353-bd7b-9de2ca6e028c/a5f00a65-2fcd-4353-bd7b-9de2ca6e028c_16x9_1200x676.jpg?width=720",
  "https://www.scenenow.com/Content/Admin/Uploads/Articles/ArticlesMainPhotoThumbnail/206624/fc28b452-b757-4b68-b8e9-6339112d346a.jpg"
],
description: "Университет в Дахране с сильным техническим профилем. Особенно интересен студентам, которые хотят развиваться в инженерии, технологиях и прикладных научных направлениях.",
fields: ["Инженерия", "IT", "Бизнес"],
tuition: "Условия оплаты зависят от программы и статуса студента. Для некоторых студентов могут существовать финансовые и стипендиальные возможности.",
accommodation: "На территории кампуса предусмотрено студенческое размещение.",
language: "Английский",
duration: "Обычно 4 года для программ бакалавриата",

requirements: [
  "Аттестат о среднем образовании",
  "Документы об образовании",
  "Подтверждение знания английского языка при необходимости",
  "Дополнительные требования зависят от программы"
],

expenses: [
  "Проживание на кампусе",
  "Питание",
  "Транспорт",
  "Учебные материалы",
  "Личные расходы"
]
},

{
name: "Seoul National University",
country: "Южная Корея",
flag: "🇰🇷",
city: "Сеул",
image: "/SeoulNational.jpeg",
description: "Крупный исследовательский университет в Сеуле. Подходит студентам, которые заинтересованы в академическом развитии, исследованиях и широком выборе образовательных направлений.",
fields: ["IT", "Инженерия", "Наука"],
tuition: "Стоимость зависит от факультета и выбранной программы.",
accommodation: "Студенческие общежития или аренда жилья в Сеуле.",
language: "Корейский / Английский",
duration: "Обычно 4 года для программ бакалавриата",

requirements: [
  "Аттестат о среднем образовании",
  "Академические документы",
  "Подтверждение знания  корейского или англиского языка в зависимости от программы",
  "Дополнительные документы могут зависеть от факультета"
],

expenses: [
  "Проживание в Сеуле",
  "Питание",
  "Метро и общественный транспорт",
  "Учебные материалы",
  "Медицинская страховка"
]
},
{
name: "Korea University",
country: "Южная Корея",
flag: "🇰🇷",
city: "Сеул",
image: "/Korea.png",
description: "Известный университет с международными программами.",
fields: ["Бизнес", "IT", "Медицина", "Экономика"],
tuition: "Размер оплаты зависит от факультета и конкретной программы обучения .",
accommodation: "Студенческие общежития или частная аренда жилья в Сеуле.",
language: "Корейский / Английский",
duration: "Обычно 4 года для программ бакалавриата",

requirements: [
  "Аттестат о среднем образовании",
  "Документы об образовании",
  "Подтверждение знания языка в зависимости от программы",
  "Дополнительные требования выбранной программы"
],

expenses: [
  "Аренда или общежитие",
  "Питание",
  "Транспорт",
  "Учебные материалы",
  "Личные расходы"
]
},
{
name: "Yonsei University",
country: "Южная Корея",
flag: "🇰🇷",
city: "Сеул",
image: "/Yonsei.jpg",
images:[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1rueXe4AWCnVmjQdNax3Sn2u--wka9Ih_R93w4XPtPfbQj6g_cp8M8Au&s=10",
  "https://mcdonnell.washu.edu/app/uploads/2025/05/Yonsei-U.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiHHnYPrYjters3LODhnvjmrtWx1ZBzROwOPyR38yeHMTTswrcVnBXfw&s=10"
],
description: "Один из известных частных университетов Кореи с сильными программами в областо медицины, бизнеса, технологий и других направлений.",
fields: ["Медицина", "Бизнес", "Международные программы"],
tuition: "Стоимость зависит выбранного факультета и образовательной программы.",
accommodation: "Студенческие общежития или аренда жилья в Сеуле.",
language: "Корейский / Английский",
duration: "Обычно 4 года для программ бакалавриата",

requirements: [
  "Аттестат о среднем образовании",
  "Документы об образовании",
  "Подтверждение знания языка ",
  "Дополнительные документы могут зависеть от факультета"
],

expenses: [
  "Проживание",
  "Питание",
  "Транспорт",
  "Учебные материалы",
  "Медицинская страховка"
]
},

{
name: "Technical University of Munich",
country: "Германия",
flag: "🇩🇪",
city: "Мюнхен",
image: "/Tum.jpg",
images:[
  "https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/71/wide_fullhd_webp_technical-university-of-munich-garching-1.webp",
  "https://ggsgdjwrnkrldbonotdy.supabase.co/storage/v1/object/public/listing-images/university/23607/3111.jpg",
  "https://www.collegebatch.com/study-abroad/static/abroad-clg-gallery/technical-university-of-munich-munich-germany-5466.webp"
],
description:"Современный технический университет, ориентированный на инженерные науки, цифровые технологии и научные исследования. Подходит студентам, которые хотят развиваться в технологической сфере.",
fields: ["IT", "Инженерия", "Инновации"],
tuition:"Условия оплаты зависят от программы и статуса студента.",
accommodation:"Студенческие общежития или аренда жилья в Мюнхене.",
language: "Немецкий / Английский",
duration: "Обычно 3–4 года для программ бакалавриата.",

requirements: [
    "Аттестат о среднем образовании",
    "Документы об образовании",
    "Подтверждение знания языка программы",
    "Дополнительные требования выбранного факультета"
  ],

  expenses: [
    "Проживание",
    "Питание",
    "Медицинская страховка",
    "Общественный транспорт",
    "Учебные материалы"
  ]
},
{
name: "Heidelberg University",
country: "Германия",
flag: "🇩🇪",
city: "Гейдельберг",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPppuIPvl2oqsCY0n1Vgzt4_sHvJxifyeVJN9f8-9Mqg&s=10",
images:[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmfpIxjBeWKHrYP6_hjO-2QRhTycFOLKo1uUPUjuYuKNFoRhE-Uakp8Y&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWk9RC8So_8P5TWbIR1eY0YDU5RwsZXvNt37445b1ToxV1ZaHt1q8qCiR&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1M37qwISJjkf3I8NC03kKBUYFpj-5rTwV-nuUMbavowh97l_P-oA7RQ8&s=10"
],
description:"Исследовательский университет с сильными академическими традициями. Особенно интересен студентам, которые хотят заниматься медициной, естественными науками и научными исследованиями.",
fields: ["Медицина", "Наука", "Исследования"],
tuition:"Условия оплаты зависят от программы, уровня обучения и статуса студента.",
accommodation:"Студенческие общежития или аренда жилья в Гейдельберге.",
language: "Немецкий / Английский",
duration: "Обычно 3–4 года для программ бакалавриата.",

  requirements: [
    "Аттестат о среднем образовании",
    "Документы об образовании",
    "Подтверждение знания языка программы",
    "Дополнительные требования выбранного направления"
  ],

  expenses: [
    "Проживание",
    "Питание",
    "Медицинская страховка",
    "Транспорт",
    "Учебные материалы"
  ]
},
{
name: "Humboldt University of Berlin",
country: "Германия",
flag: "🇩🇪",
city: "Берлин",
image: "/Berlin.jpg",
images:[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUjxYL2TgRof-NlLhQHuBlpzc3B3rjKTiI-mc-XUfgvx-kuPzCv2Y8O1U&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CDzk7fMJOo_gMnKSc0MM_8N4SXlLZNWW0oD4GmQL0wAuJJyBFmBeUt4&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-oR6OhnKfoj1I1gvNT_K-NucDvt7sy-Plmu-Lst6BurlB5bF9IwttR8s&s=10"
],
description:"Университет в центре Берлина, известный своими гуманитарными и общественными науками. Подходит студентам, которым интересны языки, культура, экономика и международные исследования.",
fields: ["Гуманитарные науки", "Экономика", "Социальные науки"],
tuition:"Условия обучения и оплаты зависят от программы и статуса студента.",
accommodation:"Студенческие общежития или аренда жилья в Берлине.",
language: "Немецкий / Английский",
duration: "Обычно 3 года для программ бакалавриата.",

  requirements: [
    "Аттестат о среднем образовании",
    "Документы об образовании",
    "Подтверждение знания языка программы",
    "Дополнительные требования выбранного факультета"
  ],

  expenses: [
    "Проживание в Берлине",
    "Питание",
    "Общественный транспорт",
    "Учебные материалы",
    "Личные расходы"
  ]
},

{
name: "University of Bologna",
country: "Италия",
flag: "🇮🇹",
city: "Болонья",
image: "/Bologna.jpg",
images:[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgalhUlcdDYKQm2wf-Y8xycqc4ZC_i8mm0EHD1mI-qBz7zuxpW2TiZlTrs&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRm3oAcPPEYVxBv05GOQvSeNCysPzuP_aUo50w6Xsx82ISK8LXh1vNNKQ&s=10",
  "https://ak-d.tripcdn.com/images/1mi2b424x98fmujfo05EA_Q90.jpg?proc=source/trip"
],
description:"Университет в Болонье с богатой академической историей и широким выбором образовательных программ. Подходит студентам, интересующимся экономикой, правом, языками и гуманитарными науками.",
fields: ["Экономика", "Право", "Гуманитарные науки"],
tuition:"Стоимость обучения зависит от программы и финансового положения студента.",
accommodation:"Студенческие общежития или аренда жилья в Болонье.",
language: "Итальянский / Английский",
duration: "Обычно 3 года для программ бакалавриата.",

  requirements: [
    "Аттестат о среднем образовании",
    "Документы об образовании",
    "Подтверждение знания языка программы",
    "Дополнительные требования выбранного факультета"
  ],

  expenses: [
    "Проживание",
    "Питание",
    "Городской транспорт",
    "Учебные материалы",
    "Личные расходы"
  ]
},
{
name: "Politeapienza University of Romecnico di Milano",
country: "Италия",
flag: "🇮🇹",
city: "Милан",
image: "/Milano.jpg",
images:[
  "https://images.adsttc.com/media/images/5f2b/8d86/b357/65cf/d300/034f/large_jpg/502_PhPBA_DSC_0120.jpg?1596689770",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPcYJkjaVQ0XCLGcMEUY5cxCbE2pFvToxeAsXwDfq9YWRkquUUItLzCuTb&s=10",
  "https://www.polimi.it/fileadmin/asset/video/covers/vita-da-studente.jpg"
],
description: "Известный университет Милана, специализирующийся на инженерии, архитектуре, дизайне и цифровых технологиях.",
fields: ["Инженерия", "Дизайн", "IT"],
tuition:"Стоимость зависит от программы и финансового положения студента. Для 2026/27 учебного года размер университетских сборов рассчитывается по установленным правилам.",
accommodation:"Студенческое общежитие или аренда комнаты/квартиры в Милане.",
language: "Итальянский / Английский",
duration:"Обычно 3 года для программ бакалавриата.",

  requirements: [
    "Аттестат о среднем образовании",
    "Документы об образовании",
    "Подтверждение языка программы",
    "Выполнение требований выбранной программы"
  ],

  expenses: [
    "Проживание",
    "Питание",
    "Городской транспорт",
    "Учебные материалы",
    "Медицинская страховка"
  ]
},
{
name: "Sapienza University of Rome",
country: "Италия",
flag: "🇮🇹",
city: "Рим",
image: "/Rome.jpg",
images:[
  "https://techportal.in/wp-content/uploads/2024/01/University-of-Rome.webp",
  "https://world.uz/files/photo_2026-05-05_15-04-05_975577zl.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQiTukZuO-HaSh_zjLioXo3d62Aq2z8JO0f88bF0VpsZzeWGmLmEEOnw&s=10"
],
description:"Крупный университет Рима с широким выбором образовательных программ в области медицины, технологий, экономики и гуманитарных наук.",
fields: ["Медицина", "IT", "Бизнес"],
tuition:"Стоимость зависит от выбранной программы и категории студента.",
ccommodation:"Студенческое общежитие или аренда комнаты/жилья в Риме.",
language:"Итальянский / Английский",
duration:"Обычно 3 года для программ бакалавриата.",

  requirements: [
    "Аттестат о среднем образовании",
    "Документы об образовании",
    "Подтверждение знания языка программы",
    "Дополнительные требования выбранного факультета"
  ],

  expenses: [
    "Проживание",
    "Питание",
    "Транспорт",
    "Учебные материалы",
    "Личные расходы"
  ]
},

{
name: "Istanbul University",
country: "Турция",
flag: "🇹🇷",
city: "Стамбул",
image: "/Istanbul.jpg",
images:[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZf3KP4oASd9yhyB6WU6YT_ADQh2vni15nkOTasjTJTH6MQRTq1U8bcgG&s=10",
  "https://thumbs.dreamstime.com/b/gate-istanbul-university-campus-avcilar-turkey-june-main-entrance-t-c-ordinary-people-walk-nearby-108616099.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocvj8mVXTRrKTto2cuTcWBSSgv4vPcTdY13K_GFelOlyTV5-9U0ehrLI&s=10"
],
description:"Крупный университет Стамбула с широким выбором программ и возможностями для обучения в разных академических направлениях.",
fields: ["Медицина", "Бизнес", "IT"],
tuition:"Стоимость зависит от факультета, программы и статуса иностранного студента.",
accommodation:"Студенческое общежитие или аренда жилья в Стамбуле.",
language:"Турецкий / Английский",
duration:"Обычно 4 года для программ бакалавриата.",

  requirements: [
    "Аттестат о среднем образовании",
    "Академическая выписка",
    "Документ, удостоверяющий личность",
    "Подтверждение знания языка при необходимости"
  ],

  expenses: [
    "Проживание",
    "Питание",
    "Транспорт",
    "Учебные материалы",
    "Личные расходы"
  ]
},

{
name: "Middle East Technical University",
country: "Турция",
flag: "🇹🇷",
city: "Анкара",
image: "/Middle.jpg",
images:[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDhY7OV_ihWIHD9tUHJVVD1QF6pV9FHVT6yZ3z69kbhY2_PWdC81YGAA&s=10",
  "https://media.licdn.com/dms/image/v2/D4D22AQHHdkWwNq4ZQQ/feedshare-shrink_800/B4DZ.zME2dIoAg-/0/1785417715395?e=2147483647&v=beta&t=Smw0qCwxtuF6S2sgWWA9VQkBM4jNS0lVpM_RLycyLuI",
  "https://world.uz/files/213123123123123_153506tv.jpg"
],

description:"Известный технический университет Анкары с сильными программами в области инженерии, IT, естественных и социальных наук.",
fields: ["IT", "Инженерия", "Наука"],
tuition:"Стоимость для международных студентов зависит от факультета и учебной программы.",
accommodation:"Студенческие общежития на кампусе или аренда жилья в Анкаре.",
language:"Английский",
duration:"Обычно 4 года для программ бакалавриата.",

  requirements: [
    "Аттестат о среднем образовании",
    "Академическая выписка",
    "Подтверждение знания английского языка",
    "Документы, требуемые выбранной программой"
  ],

  expenses: [
    "Проживание",
    "Питание",
    "Транспорт",
    "Учебные материалы",
    "Личные расходы"
  ]
},

{
name: "Istanbul Technical University",
country: "Турция",
flag: "🇹🇷",
city: "Стамбул",
image: "/IsTechnical.jpg",
images:[
  "https://techportal.in/wp-content/uploads/2024/01/Istanbul-Technical-University-ITU-campus-610x372-1.jpg",
  "https://www.findandstudy.com/wp-content/uploads/2024/03/itu-universitesi-find-and-study-8.jpg",
  "https://cdn.pbilet.com/origin/c778a83f-755a-4312-af35-5c54aafcb568.jpeg"
],
description:"Технический университет Стамбула с сильными программами в инженерии, архитектуре и современных технологиях.",
fields: ["Инженерия", "IT", "Архитектура"],
tuition:"Стоимость зависит от факультета и статуса иностранного студента.",
accommodation:"Студенческое общежитие или аренда жилья в Стамбуле.",
language:"Турецкий / Английский",
duration:"Обычно 4 года для программ бакалавриата.",

  requirements: [
    "Аттестат о среднем образовании",
    "Академическая выписка",
    "Подтверждение языка обучения",
    "Дополнительные требования программы"
  ],

  expenses: [
    "Проживание",
    "Питание",
    "Транспорт",
    "Учебные материалы",
    "Личные расходы"
  ]
},
{
name: "Tsinghua University",
country: "Китай",
flag: "🇨🇳",
city: "Пекин",
image: "/Tsinghua.JPG",
images:[
  "https://www.tsinghua.edu.cn/__local/1/F9/AB/76A4BA1F070CB4CEF8A6209841F_AE779678_DFFA3.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKg7TNxH38-KQwyWaAI1V4i3vlVB__93ZMdDEM_OCkLsX5Ca_fsSpDPZ8&s=10",
  "https://www.chinascholerships.org/images/tsinghua-campus.jpg"
],
description:"Крупный исследовательский университет Пекина с сильными направлениями в технологиях, инженерии, науке и других областях.",
fields: ["IT", "Инженерия", "Наука"],
tuition:"Стоимость зависит от выбранной программы и уровня обучения.",
accommodation:"Студенческое общежитие на кампусе или аренда жилья в Пекине.",
language:"Китайский / Английский",
duration:"Обычно 4 года для программ бакалавриата.",

  requirements: [
    "Аттестат о среднем образовании",
    "Академическая выписка",
    "Подтверждение языка программы",
    "Дополнительные документы по требованиям программы"
  ],

  expenses: [
    "Проживание",
    "Питание",
    "Транспорт",
    "Учебные материалы",
    "Страховка"
  ]
},

{
name: "Peking University",
country: "Китай",
flag: "🇨🇳",
city: "Пекин",
image: "/Peking.jpeg",
images:[
  "https://www.chinabeijingprivatetour.com/upload/ueditor/image/20171012/6364340413595432811853548.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3t6uk6tFv30RMrZPj_8FlaVvRCAC6ZtudhIWBAStCE-5BjgozbuMrYFE&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJVmUCZAcs0yRswWQyK4N3pBGMTgzGx2FMqFQy1SYipynxyBP6Sj-kJ0&s=10"
],
description:"Крупный исследовательский университет Пекина с программами в области науки, бизнеса, технологий, гуманитарных и социальных наук.",
fields: ["Бизнес", "IT", "Наука"],
tuition:"Стоимость обучения зависит от выбранной программы.",
accommodation:"Студенческое общежитие или аренда жилья в Пекине.",
language:"Китайский / Английский",
duration:"Обычно 4 года для программ бакалавриата.",

  requirements: [
    "Аттестат о среднем образовании",
    "Документы об образовании",
    "Подтверждение языка программы",
    "Дополнительные требования факультета"
  ],

  expenses: [
    "Проживание",
    "Питание",
    "Транспорт",
    "Учебные материалы",
    "Страховка"
  ]
},

{
name: "Shanghai Jiao Tong University",
country: "Китай",
flag: "🇨🇳",
city: "Шанхай",
image: "/JiaoTong.jpeg",
images:[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbPZhD7cFKoWL3wwIaE3qFcFMI5ryK_6C8lAAkh94RGNmPqFxUvjRkBPY&s=10",
  "https://smse.sjtu.edu.cn/storage/global/web/en/article/2025/06/cf89a7b9873a69ef6e852972f2c8f97b.png",
  "https://mrsesel.neocities.org/images/s3.jpg"
],
description:"Известный исследовательский университет Шанхая с сильными программами в инженерии, IT, медицине и естественных науках.",
fields: ["Инженерия", "IT", "Медицина"],
tuition:"Стоимость зависит от выбранной программы и категории студента.",
accommodation:"Студенческое общежитие или аренда жилья в Шанхае.",
language:"Китайский / Английский",
duration:"Обычно 4 года для программ бакалавриата.",

  requirements: [
    "Аттестат о среднем образовании",
    "Академическая выписка",
    "Подтверждение языка программы",
    "Дополнительные документы выбранной программы"
  ],

  expenses: [
    "Проживание",
    "Питание",
    "Транспорт",
    "Учебные материалы",
    "Медицинская страховка"
  ]
}

];
const Universities = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("Все");

  const filteredUniversities =
  selectedCountry === "Все"? universities: universities.filter(
    (university) => university.country === selectedCountry
      );
return (
<div className="universities-page">
  <h1>Университеты</h1>
  <div className="country-filters">
    <button onClick={()=> setSelectedCountry("Все")}>Все</button>
    <button onClick={()=> setSelectedCountry("Арабия")}>Арабия</button>
    <button onClick={()=> setSelectedCountry("Южная Корея")}>Южная Корея</button>
    <button onClick={()=> setSelectedCountry("Германия")}>Германия</button>
    <button onClick={()=> setSelectedCountry("Италия")}>Италия</button>
    <button onClick={()=> setSelectedCountry("Турция")}>Турция</button>
    <button onClick={()=> setSelectedCountry("Китай")}>Китай</button>
  </div>
  <div className="universities-grid">
    {filteredUniversities.map((university) => (
<div className="university-card-wrapper" key={university.name}>
  <FavoriteButton
    item={{
      id: `university-${university.name}`,
      type: "university",
      name: university.name,
      country: university.country,
      flag: university.flag,
      city: university.city,
      image: university.image,
      description: university.description,
      fields: university.fields,
      tuition: university.tuition,
      accommodation: university.accommodation,
      language: university.language,
      duration: university.duration,
    }}
  />

  <UniversityCard
  university={university}
  onDetails={(university) => {
    const slug = university.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    navigate(`/universities/${slug}`);
  }}
/>
</div>

    ))}
  </div>
 

</div>

);
};

export default Universities;