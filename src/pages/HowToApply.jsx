import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import "./HowToApply.css";

function HowToApply() {
  const { language } = useLanguage();

  const translations = {
    kg: {
      heroTitle: "Чет өлкөдө билим алууга жолуң",
      heroText:
        "Түшүнүктүү план менен аракет кылсаң, чет өлкөлүк университетке тапшыруу оңой болот. EDIVIA ар бир кадамды түшүнүүгө жардам берет.",
      startButton: "Окууга тапшырууну баштоо",

      journey: "СЕНИН ЖОЛУҢ",
      stepsTitle: "Окууга тапшыруунун 5 кадамы",

      steps: [
        {
          title: "Өлкөнү танда",
          text: "Билим берүү багыты жана окуу шарттары боюнча өзүңө ылайыктуу өлкөнү аныкта.",
        },
        {
          title: "Университетти тап",
          text: "Университеттерди, окуу программаларын жана кабыл алуу талаптарын изилде.",
        },
        {
          title: "Документтерди даярда",
          text: "Тандаган университетке арыз берүү үчүн керектүү документтерди чогулт.",
        },
        {
          title: "Арыз тапшыр",
          text: "Арызды толтуруп, документтерди тандаган университетке жөнөт.",
        },
        {
          title: "Окууну башта",
          text: "Чакыруу ал, сапарга даярдан жана билим алуунун жаңы этабын башта.",
        },
      ],

      documentsLabel: "ДОКУМЕНТТЕР",
      documentsTitle: "Кандай документтер керек?",

      documents: [
        {
          title: "Паспорт",
          text: "Мөөнөтү жарактуу чет өлкөлүк паспорт.",
        },
        {
          title: "Аттестат же диплом",
          text: "Билимиңди тастыктаган документ.",
        },
        {
          title: "Баалардын көчүрмөсү",
          text: "Окуу жыйынтыктары көрсөтүлгөн академиялык документ.",
        },
        {
          title: "Тил сертификаты",
          text: "Англис тилинин же талап кылынган башка тилдин сертификаты.",
        },
        {
          title: "Сүрөт",
          text: "Документтер жана арыз үчүн керектүү сүрөт.",
        },
        {
          title: "Мотивациялык кат",
          text: "Максаттарың жана эмне үчүн чет өлкөдө окууну тандаганың жөнүндө жаз.",
        },
      ],

      consultationTitle: "Эмнеден баштоону билбейсиңби?",
      consultationText:
        "Биз өлкөнү жана университетти тандоого, ошондой эле кийинки кадамдарды түшүнүүгө жардам беребиз.",
      consultationButton: "Кеңеш алуу",
    },

    en: {
      heroTitle: "Your path to studying abroad",
      heroText:
        "Applying to a university abroad can be easier with a clear plan. EDIVIA will help you understand every step.",
      startButton: "Start Your Application",

      journey: "YOUR JOURNEY",
      stepsTitle: "5 Steps to University Admission",

      steps: [
        {
          title: "Choose a country",
          text: "Choose a country that suits your preferred field and study requirements.",
        },
        {
          title: "Find a university",
          text: "Explore universities, study programs, and admission requirements.",
        },
        {
          title: "Prepare your documents",
          text: "Gather the documents required to apply to your chosen university.",
        },
        {
          title: "Submit your application",
          text: "Complete your application and send your documents to the university.",
        },
        {
          title: "Start studying",
          text: "Receive your admission offer, prepare for your trip, and begin a new educational journey.",
        },
      ],

      documentsLabel: "DOCUMENTS",
      documentsTitle: "Which documents do you need?",

      documents: [
        {
          title: "Passport",
          text: "A valid international passport.",
        },
        {
          title: "School Certificate or Diploma",
          text: "A document confirming your education.",
        },
        {
          title: "Academic Transcript",
          text: "An academic record showing your grades.",
        },
        {
          title: "Language Certificate",
          text: "A certificate in English or another required language.",
        },
        {
          title: "Photograph",
          text: "A photograph for your application and documents.",
        },
        {
          title: "Motivation Letter",
          text: "Explain your goals and why you want to study abroad.",
        },
      ],

      consultationTitle: "Not Sure Where to Start?",
      consultationText:
        "We will help you choose a country and university and understand the next steps in the application process.",
      consultationButton: "Get a Consultation",
    },

    ru: {
      heroTitle: "Твой путь к учёбе за границей",
      heroText:
        "Поступление в зарубежный университет может быть проще, если двигаться по понятному плану. EDIVIA поможет разобраться в каждом этапе.",
      startButton: "Начать поступление",

      journey: "ТВОЙ ПУТЬ",
      stepsTitle: "5 шагов к поступлению",

      steps: [
        {
          title: "Выбери страну",
          text: "Определи страну, которая подходит тебе по направлению и условиям обучения.",
        },
        {
          title: "Найди университет",
          text: "Изучи университеты, программы обучения и требования к поступлению.",
        },
        {
          title: "Подготовь документы",
          text: "Собери необходимые документы для подачи заявки в выбранный университет.",
        },
        {
          title: "Подай заявку",
          text: "Заполни заявку и отправь документы в выбранный университет.",
        },
        {
          title: "Начни обучение",
          text: "Получи приглашение, подготовься к поездке и начни новый этап обучения.",
        },
      ],

      documentsLabel: "ДОКУМЕНТЫ",
      documentsTitle: "Какие документы нужны?",

      documents: [
        {
          title: "Паспорт",
          text: "Действующий заграничный паспорт.",
        },
        {
          title: "Аттестат или диплом",
          text: "Документ об образовании.",
        },
        {
          title: "Выписка с оценками",
          text: "Академическая выписка с результатами обучения.",
        },
        {
          title: "Сертификат языка",
          text: "Сертификат английского или другого необходимого языка.",
        },
        {
          title: "Фотография",
          text: "Фотография для документов и заявки.",
        },
        {
          title: "Мотивационное письмо",
          text: "Расскажи о своих целях и почему выбрал обучение за границей.",
        },
      ],

      consultationTitle: "Не знаешь, с чего начать?",
      consultationText:
        "Мы поможем тебе разобраться с выбором страны, университета и следующими шагами поступления.",
      consultationButton: "Получить консультацию",
    },
  };

  const t = translations[language] || translations.ru;

  const icons = ["🪪", "📄", "📋", "🌐", "📸", "📝"];

  return (
    <main className="how-page">
      <section className="how-hero">
        <div className="how-text">
          <p className="how-label">{t.heroLabel}</p>

          <h1>{t.heroTitle}</h1>

          <p>{t.heroText}</p>

          <Link to="/contact">
            <button className="how-button">
              {t.startButton}
            </button>
          </Link>
        </div>

        <div className="how-image">
          <img src="/Girls3.jpeg" alt="Students" />
        </div>
      </section>

      <section className="steps-section">
        <div className="steps-title">
          <span>{t.journey}</span>
          <h2>{t.stepsTitle}</h2>
        </div>

        <div className="steps">
          {t.steps.map((step, index) => (
            <div className="step-card" key={index}>
              <span className="step-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="documents-section">
        <div className="documents-title">
          <span>{t.documentsLabel}</span>
          <h2>{t.documentsTitle}</h2>
        </div>

        <div className="documents">
          {t.documents.map((document, index) => (
            <div className="document-card" key={index}>
              <div className="document-icon">
                {icons[index]}
              </div>

              <h3>{document.title}</h3>
              <p>{document.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="consultation">
        <div>
          <h2>{t.consultationTitle}</h2>
          <p>{t.consultationText}</p>
        </div>

        <Link to="/contact">
          <button className="consultation-button">
            {t.consultationButton}
          </button>
        </Link>
      </section>
    </main>
  );
}

export default HowToApply;