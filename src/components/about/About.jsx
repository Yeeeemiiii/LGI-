import React from 'react'
import Back from '../common/back/Back'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <>
      <Back title="About Us" cover="/images/LGIF.webp" />
      <AboutCard marginClass="about-page-spacing" />
    </>
  )
}

export default About