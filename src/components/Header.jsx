import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="head container">

        <Link to="/" className='logo'>
          EDIVIA
          <small>EDUCATION • FUTURE</small>
        </Link>
        <nav className="links">
          <Link to="/">Главная</Link>
          <Link to="/countries">Страны</Link>
          <Link to="/universities">Университеты</Link>
          <Link to="/contact">Контакты</Link>
          <Link to="/about">О нас</Link>
        </nav>
        <div className="header-right">
          <a href="/how-to-apply" className="how-btn">
            <span>Начать путь</span>
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header