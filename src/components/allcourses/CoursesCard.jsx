import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./courses.css"
import { coursesCard } from '../../dummydata'

const CoursesCard = () => {
    const navigate = useNavigate();
    
    // 1. State to track the active tab. Defaults to 'German'.
    const [selectedLanguage, setSelectedLanguage] = useState('German');

    // 2. Define the language tabs available
    const languages = [
        { id: 'German', label: '🇩🇪 German' },
        { id: 'French', label: '🇫🇷 French' },
        { id: 'Spanish', label: '🇪🇸 Spanish' },
        { id: 'English', label: '🇬🇧 English' },
        { id: 'Chinese', label: '🇨🇳 Chinese' },
        { id: 'Yoruba', label: '🇳🇬 Yoruba' },
        { id: 'Swahili', label: '🇰🇪 Swahili' },
        { id: 'Ewe', label: '🇬🇭 Ewe' }
    ];

    // 3. Filter the courses array based on the selected language tab
    const filteredCourses = coursesCard.filter(course => course.language === selectedLanguage);

    return (
        <>
            <section className="coursesCard">
                <div className="container">
                    
                    {/* --- NEW LANGUAGE TABS UI --- */}
                    <div className="language-selector">
                        {languages.map((lang) => (
                            <button 
                                key={lang.id}
                                className={`lang-tab ${selectedLanguage === lang.id ? 'active' : ''}`}
                                onClick={() => setSelectedLanguage(lang.id)}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>

                    {/* --- FILTERED COURSE GRID --- */}
                    <div className="grid2">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((val) => {
                                return (
                                    <div className="items shadow" key={val.id}>
                                        <div className="content flex">
                                            <div className="left">
                                                <div className="img">
                                                    <img src={val.cover} alt="" />
                                                </div>
                                            </div>
                                            <div className="text">
                                                <h1>{val.coursesName}</h1>
                                                <div className="rate">
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <label htmlFor="">(5.0)</label>
                                                </div>
                                                <div className="details">
                                                    {val.courTeacher.map((details, idx) => (
                                                        <React.Fragment key={idx}>
                                                            <div className="box">
                                                                <div className="dimg">
                                                                    <img src={details.dcover} alt="" />
                                                                </div>
                                                                <div className="para">
                                                                    <h4>{details.name}</h4>
                                                                </div>
                                                            </div>
                                                            <span>{details.totalTime}</span>
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <h3>
                                                {val.priceAll} / {val.pricePer}
                                            </h3>
                                        </div>
                                        <button className='outline-btn' onClick={() => navigate('/enroll')}>ENROLL NOW !</button>
                                    </div>
                                )
                            })
                        ) : (
                            <div className="no-courses-msg" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'grey' }}>
                                <h3>New levels for {selectedLanguage} are launching soon!</h3>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoursesCard