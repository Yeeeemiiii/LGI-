import React from 'react'
import Hero from './hero/hero'
import HomeCarousel from './HomeCarousel'
import HAbout from './hero/HAbout'
import Test from './testimonial/Test'
import Hblog from './Hblog'

const Home = () => {
  return (
    <>
       <Hero />
       
       <HomeCarousel />
       
       <HAbout/>
       <Test/>
       <Hblog/>
    </>
  )
}

export default Home