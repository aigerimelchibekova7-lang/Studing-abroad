import React from 'react'
import "./Advantages.css"

const Advantages = () => {
  return (
    <section className='advantage'>
        <div className='advantages'>
            <div className='title'>
            <p> почему EDIVIA?</p>
            <h2>Все необходимое для обучения за границей</h2>
        </div>
        <div className='cards'>
            <div className='card'>
                <div className='icon'>🎓</div>
                    <h3>Подбор университета</h3>
                    <p>Поможем найти университет, который подходит именно вам.</p>
                </div>
                <div className='card'>
                    <div className='icon'>🌎</div>
                        <h3>Выбор страны</h3>
                        <p>Узнайте больше о странах и возможностях обучения.</p>
                  </div>
                    <div className='card'>
                        <div className='icon'>💬</div>
                            <h3>Консультация</h3>
                            <p>Получите ответы на вопросы о поступлении и обучении.</p>   
                    </div>                            
        </div>
        </div>
    </section>
  )
}

export default Advantages