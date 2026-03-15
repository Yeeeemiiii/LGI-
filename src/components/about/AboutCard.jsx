import React from 'react'
import Title from '../common/title/Title'
import { homeAbout } from '../../dummydata'
import AboutWrapper from './AboutWrapper'
import "./about.css"

// 1. Add the marginClass prop here in the curly braces
const AboutCard = ({ marginClass }) => {
    return (
        <>
            {/* 2. Inject the prop into the className using template literals */}
            <section className={`aboutHome ${marginClass ? marginClass : ''}`}>
                <div className="container flexSB">

                    {/* --- LEFT SIDE --- */}
                    <div className="left row">
                        <div className="image-container">
                            <img src="/images/about.webp" alt="" />
                            <div className="gradient-overlay"></div>
                        </div>
                    </div> 

                    {/* --- RIGHT SIDE --- */}
                    <div className="right row">
                        <Title subtitle="LEARN A LANGUAGE TODAY" title="Benefits About LGI" />
                        <div className="items">
                            {homeAbout.map((val, index) => (
                                <div className="item flexSB" key={index}> 
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2>{val.title}</h2>
                                        <p>{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> 

                </div> 
            </section>
            
            <AboutWrapper />
        </>
    )
}

export default AboutCard