import React from 'react'
import { useNavigate } from 'react-router-dom'
import Back from "../common/back/Back"
import CoursesCard from './CoursesCard'
import OnlineCourses from './OnlineCourses'
import "./courses.css"

const Languages = () => {
    const navigate = useNavigate();
  return (
    <div className="languages-page">
      {/* 1. The Header Background */}
      <Back title="Explore Courses" cover="/images/streetlibrary.webp"/>
      
      {/* 2. The NEW Placement Test Section */}
      <section className="placement-support padding">
        <div className="container">
          <div className="placement-box shadow" style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '8px', borderTop: '4px solid #1ba415' }}>
            <h2>Online Placement Test</h2>
            <h3>Not sure of your level? Start with a free assessment.</h3>
            <ul>
              <li><i className="fa fa-check"></i> Determines your exact level (e.g. A1.2, B2.1)</li>
              <li><i className="fa fa-check"></i> Ensures correct placement in the right class</li>
              <li><i className="fa fa-check"></i> Personalised learning pathway recommendation</li>
            </ul>
            <h4>Cost: Free</h4>
            <button className='outline-btn' onClick={() => navigate('/placement-test')}>BOOK PLACEMENT TEST</button>
          </div>
        </div>
      </section>

      {/* 3. The Main Course Cards Grid */}
      <CoursesCard />
      
      {/* 4. The 5-Column Course Catalogue */}
      <OnlineCourses />
    </div>
  )
}

export default Languages