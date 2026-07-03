import React from 'react'
import Back from '../common/back/Back'
import { languagePrograms } from '../../dummydata'
import './programs.css'

const Programs = () => {
  return (
    <>
      {/* Set your desired background image here */}
      <Back title="Our Programs" cover="/images/prog.webp" />
      
      <section className="programs-page padding">
        <div className="container">
          
          <div className='heading' style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{ fontSize: '36px', color: '#333', marginBottom: '10px', fontWeight: '600' }}>
              Language Learning Pathways
            </h1>
            <p style={{ color: '#777', maxWidth: '700px', margin: '0 auto', fontSize: '16px' }}>
              Explore our structured language immersion programs tailored to your learning goals, lifestyle, and proficiency level.
            </p>
          </div>
          
          <div className="programs-grid">
            {languagePrograms.map((program, index) => (
              <div className="program-card shadow" key={index}>
                <div className="icon">
                  <img src={program.cover} alt="icon" />
                </div>
                <h2>{program.title}</h2>
                <ul>
                  {program.desc.map((item, i) => (
                    <li key={i}>
                      <i className="fa fa-check-circle"></i> {item}
                    </li>
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

export default Programs