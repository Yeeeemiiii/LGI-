import React from 'react'
import Hero from './hero/hero'
import AboutCard from '../about/AboutCard'
import HAbout from './hero/HAbout'

const Home = () => {
  return (
    <>
       <Hero />
       {/* Add the marginClass prop right here! */}
       <AboutCard marginClass="home-page-spacing" />
       <HAbout/>
    </>
  )
}

export default Home