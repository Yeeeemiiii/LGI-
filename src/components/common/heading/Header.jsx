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
            <li><Link to="/programs">Programs</Link></li>
            <li className='dropdown'>
              <Link to="/community">
                Community <i className='fa fa-chevron-down dropdown-icon'></i>
              </Link>
              <ul className='dropdown-menu'>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </li>
            <li><Link to="/courses">Courses</Link></li>
            <li className='dropdown'>
              <Link to="/resources">
                Resources <i className='fa fa-chevron-down dropdown-icon'></i>
              </Link>
              <ul className='dropdown-menu'>
                <li><Link to="/languages">Languages</Link></li>
                <li><Link to="/Library">Library</Link></li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
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