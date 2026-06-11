import React from 'react'
import Back from "../common/back/Back"
import CoursesCard from './CoursesCard'
import OnlineCourses from './OnlineCourses'
import "./courses.css"

const CourseHome = () => {
  return (
    <>
      <Back title="Explore Courses" />
      <CoursesCard />
      <OnlineCourses />

      {/* UPDATED PLACEMENT TEST & SUPPORT SECTION */}
      <section className="placement-support padding">
        <div className="container">

          <div className="support-box">
            <h2>Support & Enquiries</h2>
            <p>Need help choosing a course or have questions about registration? We are here to help!</p>
            <div className="contact-info">
              <p>
                <i className="fa fa-envelope"></i>
                <a href="mailto:info@lgifoundation.org">info@lgifoundation.org</a>
              </p>
              <p>
                <i className="fa fa-phone-alt"></i>
                <a href="tel:+2348087553639">+234 808 755 3639</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CourseHome