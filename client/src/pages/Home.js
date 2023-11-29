import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import backgroundImage from "../images/starrybackground.jpg";


const Home = () => {
  return (
    <div
      style={{
        background: `url(${backgroundImage}) center/cover no-repeat fixed`,
        backgroundColor: '#141416' ,
        color: '#f5f5f5',
      }}
    >
        <Hero />
        <About />
    </div>
  )
}

export default Home