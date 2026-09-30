import React from 'react'
import "./PopUniver.css"

const univer = [
    {
        country:"Саудская Арабия",
        description:"Совроменные университеты",
        image:"/Arabia.jpeg",
    },
    {
        country:"Южная Корея",
        description:"Технологии и инновации",
        image:"/Korea.jpeg",
    },
    {
        country:"Германия",
        description:"Качество и перспективы",
        image:"/Germany.jpeg",
    },
    {
        country:"Турция",
        description:"Доступное образование",
        image:"/Turkey.jpeg",
    },
    {
        country:"Китай",
        description:"Технологии и возможности",
        image:"/Kitai.jpeg",
    },
    {
        country:"Италия",
        description:"Культура и образование",
        Image:"/Italia.jpeg",
    },
]
function PopUniver () {
  return (
    <section className='popuniver'>
      <div className='popuniver-container'>
        <div className='popuniver-name'>
            <span>НАПРАВЛЕНИЯ</span>
            <h1>Популярные страны</h1>
            <p>Выбери страну и узнайте больше о возможностях обучения.</p>
        </div>
        <div className='country-grid'>
            {univer.map((item, index) => (
                <div className='country-card' key={index}>
                    <img src={item.image} alt={item.univer} />
                    <div className='country-info'>
                        <h3>{item.country}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
    
  )
}

export default PopUniver