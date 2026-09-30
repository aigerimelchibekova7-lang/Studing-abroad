import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about">
      <section className="abouts">
        <div className="about-hero">
          <div>
            <span>О нас</span>
            <h1>EDIVIA — ваш надежный<br />партнёр в мире образования</h1>
            <p>Мы помогаем студентам поступить в зарубежные учебные заведения и реализовать мечту об обучении за границей.</p>
            <Link to="/contact" className="why-btn"><button>Получить консультацию</button> </Link>
          </div>
          <img src="/Cambridge.jpg" alt="" />
        </div>
      </section>
      <section className="why-edivia">
        `<div className="why">
          <div className="why-intro">
            <span>Почему выбирают EDIVIA</span>
            <h2>Мы делаем <br /> образование доступным</h2>
            <p>Наша цель — помочь вам пройти путь к зарубежному образованию максимально просто, понятно и уверенно.</p>
          </div>
          <div className="advantags">
            <div className="advantag-card">
              <div className="icon">🌐</div>
              <h3>6 стран  <br />для обучения</h3>
              <p>Широкий выбор  <br />направлений и  <br />университетов.</p>
            </div>
            <div className="advantag-card">
              <div className="icon">🎓</div>
              <h3>Зарубежное <br /> образование</h3>
              <p>Качественное   <br />образование и <br /> международный <br /> опыт.</p>
            </div>
            <div className="advantag-card">
              <div className="icon">📄</div>
              <h3>Помощь с <br /> поступлением</h3>
              <p>
                Подготовка  <br />документов, <br /> подача заявок  <br />и сопровождение.
              </p>
            </div>
            <div className="advantag-card">
              <div className="icon">♡</div>
              <h3>Поддержка на <br /> каждом этапе</h3>
              <p>
                Мы рядом — от <br /> первой консультации  <br />до прибытия в страну.
              </p>
            </div>
          </div>
        </div>`
      </section>
      <section className="result">
        <div className="results">
          <span>Наши результаты</span>
          <h2>Тысячи студентов уже с нами</h2>
          <div className="result-cards">
            <div>
              <strong>5+</strong>
              <p>лет опыта</p>
            </div>
            <div>
              <strong>1000+</strong>
              <p>довольных студентов</p>
            </div>
            <div>
              <strong>200+</strong>
              <p>университетов-партнёров</p>
            </div>
            <div>
              <strong>6</strong>
              <p>стран</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-ct">
        <div className="about-cta">
          <div>
            <h2>Готовы сделать первый шаг?</h2>
            <p>Оставьте заявку на консультацию — мы подберём для вас лучший вариант обучения за границей.</p>
          </div>
          <Link to="/contact" className="btn"> Получить консультацию</Link>

        </div>
      </section>
    </main>
  );
}

export default About;