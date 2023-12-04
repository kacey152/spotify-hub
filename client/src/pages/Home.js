import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import backgroundImage from "../images/starrybackground.jpg";
import Instructions from '../components/Instructions';


const Home = () => {
  return (
    <div
      style={{
        background: `url(${backgroundImage}) center/cover no-repeat fixed`,
        color: '#f5f5f5',
      }}
    >
        <Hero />
        <About />
        <Instructions />
    </div>
  )
}

export default Home