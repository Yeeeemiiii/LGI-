import React from 'react'
import { useNavigate } from 'react-router-dom' 
import "./hero.css"
import Title from '../../common/title/Title'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Title subtitle='WELCOME TO LGI' title='Languages for Growth and Impact'/>
                    <p>Languages for Growth and Impact is a Non-Governmental Organization which advocates the SDGs through providing linguistics services (translation and interpretation,  language acquisition of both foreign and Indigenous African languages.</p>
                    
                    <div className="button">
                        <button className='primary-btn' onClick={() => navigate('/enroll')}>
                            ENROLL NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        
                        <button className='primary-btn' onClick={() => navigate('/courses')}>
                            VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="marigin">

        </div>
    </>
  )
}

export default Hero