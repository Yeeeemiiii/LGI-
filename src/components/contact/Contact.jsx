import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  // Note: Since you have multiple locations, I put a generic placeholder map link here. 
  // You can replace it with a real Google Maps embed link for your main HQ later!
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d318189.6443930289!2d7.285402285604413!3d9.024558535341239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e1!3m2!1sen!2sde!4v1779115089907!5m2!1sen!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade' 
  
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map} title="map"></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Abuja, Ibadan, Lagos, Online</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p><a href="mailto:info@lgifoundation.org">info@lgifoundation.org</a></p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p><a href="tel:+2348087553639">+234 808 755 3639</a></p>
              </div>
              <div className='box'>
                <h4>OPENING HOURS:</h4>
                <p>Monday - Friday <br /> 9am - 5pm WAT</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10' placeholder='Create a message here...'></textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <div className="social-icons">
              <a href="https://shm.to/Langlopact" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f icon"></i></a>
              <a href="https://shm.to/Qvvs06P" target="_blank" rel="noreferrer"><i className="fab fa-instagram icon"></i></a>
              <a href="https://x.com/langlopact?s=21" target="_blank" rel="noreferrer"><i className="fab fa-twitter icon"></i></a>
              <a href="https://shm.to/LGI" target="_blank" rel="noreferrer"><i className="fab fa-tiktok icon"></i></a>
              <a href="https://www.linkedin.com/company/languages-for-growth-and-impact/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in icon"></i></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact