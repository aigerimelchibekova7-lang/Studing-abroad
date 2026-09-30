import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='heros'>
    <div className='hero'>
        <div className='content'>
        <p className='title'>EDIVIA - EDUCATION & FUTURE</p>
        <h1>Учеба за границей - <br /> твой путь к новым возможностям</h1>
        <p className='text'>Найти подходящую страну и университет , получи образование мечты и начни строить свое будущее.</p>
    <div className='buttons'>
        <Link to="/Universities" className='btn'>Выбрать университет</Link>
    </div>
    <div className='stats'>
        <div className='stat'>
            <h3>50+</h3>
            <p>Университетов</p>
        </div>
        <div className='stat'>
            <h3>6+</h3>
            <p>Стран</p>
        </div>
        <div className='stat'>
            <h3>100+</h3>
            <p>Студентов</p>
        </div>
    </div>
    </div>
    <div className='image'>
        <img src="/girl.png" alt="" />
    </div>
    </div>
    </section>
  )
}

export default Hero
