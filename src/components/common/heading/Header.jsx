import React from 'react'
import { useState } from 'react'
import Head from './head'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const [click, setClick] = useState(false)
  return (
    <>
        <Head />
        <header>
          <nav className='flexSB'>
            <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">LGI Team</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/library">Library</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className="start">
              <div className="button">GET CERTIFICATE</div>
            </div>
            <button className='toggle' onClick={() => setClick(!click)}>
              {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </header>
    </>
  )
}

export default Header