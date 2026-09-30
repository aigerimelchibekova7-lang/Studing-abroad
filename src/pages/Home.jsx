import React from 'react'
import Hero from '../components/Hero'
import Advantages from '../components/Advantages'
import PopUniver from '../components/PopUniver'
import StudentStories from '../components/StudentStories'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Advantages/>
      <PopUniver/>
      <StudentStories/>
    </div>
  )
}

export default Home