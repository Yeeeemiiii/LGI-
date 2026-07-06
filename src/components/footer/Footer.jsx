import React from "react"
import { blog } from "../../dummydata"
import "./footer.css"
import { useLocation } from 'react-router-dom';

const Footer = () => {// 2. Ask React Router what the current URL is
  const location = useLocation();

  // 3. The Bouncer: Hide the footer on these specific pages
  if (location.pathname === '/login' || location.pathname === '/dashboard' || location.pathname === '/admin-blog') {
    return null; 
  }

  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Subscribe</h1>
            <span>Stay tuned and get the latest updates from LGI Foundation.</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>LGI FOUNDATION</h1>
            <span>LANGUAGES FOR GROWTH AND IMPACT</span>
            <p>An online learning platform making language education accessible globally without location barriers.</p>

            {/* Social Media Links */}
            <a href="https://shm.to/Langlopact" target="_blank" rel="noreferrer"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://x.com/langlopact?s=21" target="_blank" rel="noreferrer"><i className='fab fa-twitter icon'></i></a>
            <a href="https://shm.to/Qvvs06P" target="_blank" rel="noreferrer"><i className='fab fa-instagram icon'></i></a>
            <a href="https://shm.to/LGI" target="_blank" rel="noreferrer"><i className='fab fa-tiktok icon'></i></a>
            <a href="https://www.linkedin.com/company/languages-for-growth-and-impact/" target="_blank" rel="noreferrer"><i className='fab fa-linkedin-in icon'></i></a>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Courses</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Placement Test</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB' key={val.id}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Abuja, Ibadan, Lagos, Online
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                <a href="tel:+2348087553639">+234 808 755 3639</a>
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                <a href="mailto:info@lgifoundation.org">info@lgifoundation.org</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright © {new Date().getFullYear()} All rights reserved | LGI Foundation
        </p>
      </div>
    </>
  )
}

export default Footer