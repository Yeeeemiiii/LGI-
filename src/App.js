import React from 'react'
import Header from './components/common/heading/Header'
import "./App.css"
import "./components/common/heading/header.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Languages from './components/allcourses/Languages';
import Enroll from './components/enroll/Enroll';
import PlacementTest from './components/placement/PlacementTest';
import Team from './components/team/Team';
import Pricing from './components/pricing/Pricing';
import Programs from './components/programs/Programs';
import Blog from './components/blog/Blog';
import Community from './components/community/Community';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Library from './components/library/Library'; // Import the Library component

// Import the new pages you created
//import StudentLogin from './components/StudentLogin'
//import StudentDashboard from './components/StudentDashboard'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Main Pages */}
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Courses' element={<CourseHome />} />
          <Route path='/Languages' element={<Languages />} />
          <Route path='/Enroll' element={<Enroll />} />
          <Route path='/team' element={<Team />} />
          <Route path='/resources' element={<Pricing />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/community' element={<Community />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/placement-test' element={<PlacementTest />} />
          {/* New Library Page */}
          <Route path='/Library' element={<Library />} />
          {/* You can add more routes for other pages here */}
          {/* <Route path='/about' element={<h1>About Us</h1>} /> */}

          {/* New Language School Pages */}
          {/* Adding these lines uses 'Route' and fixes the warning */}
          {/* <Route path='/login' element={<StudentLogin />} /> */}
          {/* <Route path='/dashboard' element={<StudentDashboard />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App