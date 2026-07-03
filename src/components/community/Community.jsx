import React from 'react'
import { useNavigate } from 'react-router-dom'
import Back from '../common/back/Back'
import { lgiTalks } from '../../dummydata'
import './community.css'

const Community = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Set your desired background image here */}
      <Back title="LGI Community" cover="/images/streetlibrary.webp" />
      
      <section className="community-page padding">
        <div className="container">
          
          <div className="community-intro">
            <h1>Welcome to the Global Network</h1>
            <p>
              Languages for Growth and Impact is more than an educational platform; it is a thriving global community. Connect with fellow learners, stay updated with our outreach programs, and listen in on our regular community discussions.
            </p>
          </div>

          {/* --- QUICK LINKS --- */}
          <div className="community-links">
            <div className="c-link-box shadow" onClick={() => navigate('/blog')}>
              <i className="fa fa-newspaper"></i>
              <h2>Blog & News</h2>
              <p>Read inspiring stories, volunteer spotlights, and community updates.</p>
            </div>
            
            <div className="c-link-box shadow" onClick={() => window.open('https://x.com/langlopact', '_blank')}>
              <i className="fab fa-twitter"></i>
              <h2>Join the Conversation</h2>
              <p>Follow us on X (Twitter) to participate in live language discussions.</p>
            </div>
          </div>

          {/* --- LGI TALKS SECTION --- */}
          <h2 className="talks-section-title">Catch Up on LGI Talks</h2>
          
          <div className="talks-grid">
            {lgiTalks.map((talk, index) => (
              <div className="talk-card shadow" key={index}>
                <i className="fab fa-twitter twitter-icon"></i>
                <h3>{talk.title}</h3>
                <p>{talk.summary}</p>
                <a href={talk.link} target="_blank" rel="noreferrer">
                  Listen to Episode <i className="fa fa-headphones"></i>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Community