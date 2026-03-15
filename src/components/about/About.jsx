import React from 'react'
import Back from '../common/back/Back'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <>
        <Back title="About Us" />
        {/* Pass the custom class name right here! */}
        <AboutCard marginClass="about-page-spacing" />
    </>
  )
}

export default About