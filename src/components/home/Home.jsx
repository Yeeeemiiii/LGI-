import React from 'react'
import Hero from './hero/hero'
import AboutCard from '../about/AboutCard'
import HAbout from './hero/HAbout'
import Test from './testimonial/Test'
import Hblog from './Hblog'

const Home = () => {
  return (
    <>
       <Hero />
       {/* Add the marginClass prop right here! */}
       <AboutCard marginClass="home-page-spacing" />
       <HAbout/>
       <Test/>
       <Hblog/>
    </>
  )
}

export default Home