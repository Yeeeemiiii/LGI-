import React from 'react'
import Title from '../common/title/Title'
import { homeAbout, languageQuickLinks, languagePrograms } from '../../dummydata'
import AboutWrapper from './AboutWrapper'
import "./about.css"

const AboutCard = ({ marginClass }) => {
    return (
        <>
            {/* --- SECTION 1: ABOUT LGI & WHAT WE DO --- */}
            <section className={`aboutHome ${marginClass ? marginClass : ''}`}>
                <div className="container flexSB">

                    <div className="left row">
                        <Title subtitle="ABOUT LGI" title="Empowering Individuals Through Languages" />
                        
                        <div style={{ color: "#999", lineHeight: "1.7", marginBottom: "30px", fontSize: "16px" }}>
                            <p style={{ marginBottom: "15px" }}>
                                <b>Languages for Growth and Impact Foundation (LGI)</b> is a mission-driven social impact organization dedicated to preserving linguistic diversity, breaking language barriers, tutoring languages, building global citizens, and empowering individuals, communities, and institutions through languages and the SDGs.
                            </p>
                            <p style={{ marginBottom: "15px" }}>
                                In LGI, we believe that language is not just a means of communication, but a powerful driver of inclusion, education, cultural preservation, and sustainable development. By leveraging language education, professional linguistic services, and community-based outreach programs, LGI supports meaningful engagement across cultures and localities, while ensuring that no community is left unheard due to language barriers.
                            </p>
                            <p>
                                Our work aligns with the United Nations Sustainable Development Goals (SDGs), particularly <b>SDG 4: Quality Education</b>, as we actively promote literacy, access to multilingual education, and lifelong learning opportunities in diverse and underserved communities.
                            </p>
                        </div>

                        <div className="image-container">
                            <img src="/images/about.webp" alt="About LGI" />
                            <div className="gradient-overlay"></div>
                        </div>
                    </div> 

                    <div className="right row">
                        <Title subtitle="WHAT WE DO" title="Our Core Pillars" />
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
            
            {/* --- SECTION 2: YOUR ORIGINAL WRAPPER --- */}
            <AboutWrapper />

            {/* --- SECTION 3: LANGUAGE CORNER & PROGRAMS --- */}
            <section className="aboutHome" style={{ marginTop: '50px', paddingBottom: '80px' }}>
                <div className="container">
                    
                    {/* The 4 Quick Links (Find Courses, Test Level, etc.) */}
                    <div className="flexSB" style={{ flexWrap: 'wrap', gap: '20px', marginBottom: '60px' }}>
                        {languageQuickLinks.map((val, index) => (
                            <div className="shadow box" key={index} style={{ padding: '30px', flex: '1', minWidth: '150px', backgroundColor: '#fff', borderRadius: '5px', textAlign: 'center', transition: '0.5s', cursor: 'pointer' }}>
                                <img src={val.cover} alt="" style={{ width: '50px', height: '50px', marginBottom: '15px' }} />
                                <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#be3526' }}>{val.data} <br/> {val.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* A1-C2 and Placement Details */}
                    <div className="flexSB" style={{ flexWrap: 'wrap', gap: '30px', marginBottom: '60px' }}>
                        <div className="row" style={{ flex: '1', minWidth: '300px' }}>
                            <Title subtitle="LANGUAGE CORNER" title="Course Levels A1–C2" />
                            <p style={{ color: '#999', lineHeight: '1.7', marginTop: '15px', fontSize: '16px' }}>
                                Our language programs are structured according to internationally recognized proficiency levels based on the Common European Framework of Reference for Languages (CEFR).
                            </p>
                        </div>
                        <div className="row" style={{ flex: '1', minWidth: '300px' }}>
                            <Title subtitle="ASSESSMENT" title="Online Placement Test" />
                            <p style={{ color: '#999', lineHeight: '1.7', marginTop: '15px', fontSize: '16px' }}>
                                If you already have prior knowledge of a language, we offer a free online placement test. This helps determine your current level and places you in the most suitable learning track for your progress.
                            </p>
                        </div>
                    </div>

                    {/* The 4 Language Programs Grid */}
                    <Title subtitle="STRUCTURED FOR EVERY LEARNER" title="Our Language Programs" />
                    <div className="grid2" style={{ marginTop: '30px' }}>
                        {languagePrograms.map((val, index) => (
                            <div className="items shadow" style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '5px' }} key={index}>
                                <div className="img" style={{ width: '50px', height: '50px', marginBottom: '20px' }}>
                                    <img src={val.cover} alt={val.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <h2 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '15px' }}>{val.title}</h2>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#999', lineHeight: '1.7', fontSize: '15px' }}>
                                    {val.desc.map((bullet, i) => (
                                        <li key={i} style={{ marginBottom: '8px' }}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutCard