import React from "react";
import { Link } from "react-router-dom";
import "./HowToApply.css";

const steps = [
  {
    number: "01",
    title: "Выбери страну",
    text: "Определи страну, которая подходит тебе по направлению и условиям обучения.",
  },
  {
    number: "02",
    title: "Найди университет",
    text: "Изучи университеты, программы обучения и требования к поступлению.",
  },
  {
    number: "03",
    title: "Подготовь документы",
    text: "Собери необходимые документы для подачи заявки в выбранный университет.",
  },
  {
    number: "04",
    title: "Подай заявку",
    text: "Заполни заявку и отправь документы в выбранный университет.",
  },
  {
    number: "05",
    title: "Начни обучение",
    text: "Получи приглашение, подготовься к поездке и начни новый этап обучения.",
  },
];

const documents = [
  {
    icon: "🪪",
    title: "Паспорт",
    text: "Действующий заграничный паспорт.",
  },
  {
    icon: "📄",
    title: "Аттестат или диплом",
    text: "Документ об образовании.",
  },
  {
    icon: "📋",
    title: "Выписка с оценками",
    text: "Академическая выписка с результатами обучения.",
  },
  {
    icon: "🌐",
    title: "Сертификат языка",
    text: "Сертификат английского или другого необходимого языка.",
  },
  {
    icon: "📸",
    title: "Фотография",
    text: "Фотография для документов и заявки.",
  },
  {
    icon: "📝",
    title: "Мотивационное письмо",
    text: "Расскажи о своих целях и почему выбрал обучение за границей.",
  },
];

function HowToApply() {
  return (
    <main className="how-page">
      <section className="how-hero">
        <div className="how-text">
          <p className="how-label">HOW TO APPLY</p>
          <h1>Твой путь<br />к учёбе за границей</h1>
          <p> Поступление в зарубежный университет может быть проще, если двигаться по понятному плану. EDIVIA поможет тебе разобраться в каждом этапе.</p>
          <Link to="/contact">
            <button className="how-button">
              Начать поступление 
            </button>
          </Link>
        </div>
        <div className="how-image">
          <img src="/Girls3.jpeg" alt=""/>
        </div>
      </section>
      <section className="steps-section">
        <div className="steps-title">
          <span>YOUR JOURNEY</span>
          <h2>5 шагов к поступлению</h2>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <span className="step-number">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="documents-section">
        <div className="documents-title">
          <span>DOCUMENTS</span>
          <h2>Какие документы нужны?</h2>
        </div>
        <div className="documents">
          {documents.map((document) => (
            <div className="document-card" key={document.title}>
              <div className="document-icon">
                {document.icon}
              </div>
              <h3>{document.title}</h3>
              <p>{document.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="consultation">
        <div>
          <h2>Не знаешь, с чего начать?</h2>
          <p>Мы поможем тебе разобраться с выбором страны, университета и следующими шагами поступления.</p>
        </div>
        <Link to="/contact">
          <button className="consultation-button">
            Получить консультацию 
          </button>
        </Link>
      </section>
    </main>
  );
}

export default HowToApply;