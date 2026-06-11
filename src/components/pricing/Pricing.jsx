import React from "react"
import Back from "../common/back/Back"
import "./price.css"
import Faq from "./Faq"
import ResourcesCard from "./ResourcesCard"
// Import the new lgiTalks array from your dummy data
import { lgiTalks } from "../../dummydata" 

const Pricing = () => {
  return (
    <>
      <Back title='Resources' />

      {/* --- NEW SECTION: LGI TALKS --- */}
      <section className='lgi-talks padding' style={{ backgroundColor: '#f8f8f8' }}>
        <div className='container'>
          
          {/* Header */}
          <div className='heading' style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h1 style={{ fontSize: '40px', color: 'rgba(70, 145, 71, 1)', marginBottom: '10px', fontWeight: '600' }}>
              LGI TALKS
            </h1>
            <h3 style={{ fontSize: '20px', color: '#be3526', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Conversations that teach. Learning that lasts.
            </h3>
          </div>

          {/* Host & Subscription Banner */}
          <div className='host-info shadow' style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '8px', marginBottom: '60px', textAlign: 'center', borderTop: '4px solid #be3526' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Tune In & Subscribe</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#555', fontSize: '16px', lineHeight: '1.8', marginBottom: '30px' }}>
              <p>
                <strong style={{ color: 'rgba(70, 145, 71, 1)' }}>TeebossTemitayoh Omotosho</strong> <br/>
                Download previous conversations and episodes on Riverside.
              </p>
              <p>
                <strong style={{ color: 'rgba(70, 145, 71, 1)' }}>@abdulrahmman1233@gmail.com</strong> <br/>
                Link here via Spotify, Apple Podcasts, and YouTube.
              </p>
            </div>

            <button className='outline-btn' style={{ padding: '15px 40px', fontSize: '16px', width: 'auto' }}>
              SUBSCRIBE NOW
            </button>
          </div>

          {/* Episodes Grid */}
          <div className='grid2'>
            {lgiTalks.map((talk, index) => (
              <div className='items shadow' key={index} style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: '18px', color: '#333', marginBottom: '15px', lineHeight: '1.5' }}>
                  <span style={{ color: 'rgba(70, 145, 71, 1)', marginRight: '5px' }}>{index + 1}.</span> 
                  {talk.title}
                </h2>
                <p style={{ color: '#999', fontSize: '15px', lineHeight: '1.7', marginBottom: '25px', flexGrow: 1 }}>
                  {talk.summary}
                </p>
                <a href={talk.link} target="_blank" rel="noreferrer" style={{ color: '#be3526', fontWeight: '600', textDecoration: 'none', transition: '0.3s' }}>
                  LISTEN ON X <i className='fa fa-arrow-right' style={{ marginLeft: '8px' }}></i>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- ORIGINAL RESOURCES CONTENT --- */}
      { <ResourcesCard /> }

      {/* --- ORIGINAL FAQ SECTION --- */}
      <Faq />
    </>
  )
}

export default Pricing