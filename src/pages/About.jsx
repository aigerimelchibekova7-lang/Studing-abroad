import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";

function About() {
  const { language } = useLanguage();

  const translations = {
    kg: {
      about: "Биз жөнүндө",
      title: "EDIVIA — билим берүү дүйнөсүндөгү ишенимдүү өнөктөшүңүз",
      description:
        "Биз студенттерге чет өлкөлүк окуу жайларга тапшырууга жана чет өлкөдө билим алуу кыялын ишке ашырууга жардам беребиз.",
      consultation: "Кеңеш алуу",

      why: "Эмне үчүн EDIVIAны тандашат?",
      education: "Билим алууну жеткиликтүү кылабыз",
      goal: "Биздин максат — чет өлкөдө билим алуу жолун сиз үчүн мүмкүн болушунча жөнөкөй, түшүнүктүү жана ишенимдүү кылуу.",

      countriesTitle: "6 өлкөдө билим алуу",
      countriesText: "Өлкөлөрдүн жана университеттердин кеңири тандоосу.",

      foreignTitle: "Чет өлкөдө билим алуу",
      foreignText: "Сапаттуу билим жана эл аралык тажрыйба.",

      admissionTitle: "Окууга тапшырууга жардам",
      admissionText:
        "Документтерди даярдоо, арыздарды тапшыруу жана коштоп жүрүү.",

      supportTitle: "Ар бир этапта колдоо",
      supportText:
        "Алгачкы кеңештен тартып өлкөгө жеткенге чейин сиз менен биргебиз.",

      results: "Биздин жыйынтыктар",
      students: "Миңдеген студенттер биз менен",
      experience: "жылдык тажрыйба",
      happyStudents: "ыраазы болгон студенттер",
      universities: "өнөктөш университеттер",
      countries: "өлкө",

      ready: "Алгачкы кадамды жасоого даярсызбы?",
      finalText:
        "Кеңеш алуу үчүн арыз калтырыңыз — сизге чет өлкөдө билим алуунун эң ылайыктуу вариантын тандап беребиз.",
    },

    en: {
      about: "About Us",
      title: "EDIVIA — Your Trusted Partner in Education",
      description:
        "We help students apply to educational institutions abroad and turn their dream of studying overseas into reality.",
      consultation: "Get a Consultation",

      why: "Why Choose EDIVIA?",
      education: "We make education accessible",
      goal: "Our goal is to make your journey toward international education as simple, clear, and confident as possible.",

      countriesTitle: "Study in 6 countries",
      countriesText: "A wide selection of destinations and universities.",

      foreignTitle: "International education",
      foreignText: "Quality education and international experience.",

      admissionTitle: "Admission assistance",
      admissionText:
        "Document preparation, application submission, and guidance.",

      supportTitle: "Support at every step",
      supportText:
        "We are with you from your first consultation until you arrive in your destination country.",

      results: "Our Results",
      students: "Thousands of students are already with us",
      experience: "years of experience",
      happyStudents: "satisfied students",
      universities: "partner universities",
      countries: "countries",

      ready: "Ready to take the first step?",
      finalText:
        "Request a consultation, and we will help you choose the best option for studying abroad.",
    },

    ru: {
      about: "О нас",
      title: "EDIVIA — ваш надежный партнёр в мире образования",
      description:
        "Мы помогаем студентам поступить в зарубежные учебные заведения и реализовать мечту об обучении за границей.",
      consultation: "Получить консультацию",

      why: "Почему выбирают EDIVIA?",
      education: "Мы делаем образование доступным",
      goal: "Наша цель — помочь вам пройти путь к зарубежному образованию максимально просто, понятно и уверенно.",

      countriesTitle: "6 стран для обучения",
      countriesText: "Широкий выбор направлений и университетов.",

      foreignTitle: "Зарубежное образование",
      foreignText: "Качественное образование и международный опыт.",

      admissionTitle: "Помощь с поступлением",
      admissionText:
        "Подготовка документов, подача заявок и сопровождение.",

      supportTitle: "Поддержка на каждом этапе",
      supportText:
        "Мы рядом — от первой консультации до прибытия в страну.",

      results: "Наши результаты",
      students: "Тысячи студентов уже с нами",
      experience: "лет опыта",
      happyStudents: "довольных студентов",
      universities: "университетов-партнёров",
      countries: "стран",

      ready: "Готовы сделать первый шаг?",
      finalText:
        "Оставьте заявку на консультацию — мы подберём для вас лучший вариант обучения за границей.",
    },
  };

  const t = translations[language] || translations.ru;

  return (
    <main className="about">
      <section className="abouts">
        <div className="about-hero">
          <div>
            <span>{t.about}</span>

            <h1>{t.title}</h1>

            <p>{t.description}</p>

            <Link to="/contact">
              <button>{t.consultation}</button>
            </Link>
          </div>

          <img src="/Cambridge.jpg" alt="University of Cambridge" />
        </div>
      </section>

      <section className="why-edivia">
        <div className="why">
          <div className="why-intro">
            <span>{t.why}</span>

            <h2>{t.education}</h2>

            <p>{t.goal}</p>
          </div>

          <div className="advantags">
            <div className="advantag-card">
              <div className="icon">🌐</div>
              <h3>{t.countriesTitle}</h3>
              <p>{t.countriesText}</p>
            </div>

            <div className="advantag-card">
              <div className="icon">🎓</div>
              <h3>{t.foreignTitle}</h3>
              <p>{t.foreignText}</p>
            </div>

            <div className="advantag-card">
              <div className="icon">📄</div>
              <h3>{t.admissionTitle}</h3>
              <p>{t.admissionText}</p>
            </div>

            <div className="advantag-card">
              <div className="icon">♡</div>
              <h3>{t.supportTitle}</h3>
              <p>{t.supportText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="result">
        <div className="results">
          <span>{t.results}</span>

          <h2>{t.students}</h2>

          <div className="result-cards">
            <div>
              <strong>5+</strong>
              <p>{t.experience}</p>
            </div>

            <div>
              <strong>1000+</strong>
              <p>{t.happyStudents}</p>
            </div>

            <div>
              <strong>200+</strong>
              <p>{t.universities}</p>
            </div>

            <div>
              <strong>6</strong>
              <p>{t.countries}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-ct">
        <div className="about-cta">
          <div>
            <h2>{t.ready}</h2>
            <p>{t.finalText}</p>
          </div>

          <Link to="/contact">
            <button>{t.consultation}</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;