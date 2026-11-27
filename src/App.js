import React, { useEffect } from 'react'
import Header from './components/common/heading/Header'
import "./App.css"
import "./components/common/heading/header.css"
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import Library from './components/library/Library';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import AdminBlog from './components/admin/AdminBlog';
import SingleBlog from './components/blog/SingleBlog'
import Feedback from './components/feedback/Feedback'
import CookieConsent from './components/common/cookie/CookieConsent'
import RouteSeo from './components/common/seo/RouteSeo'


// Scrolls to the top of the page whenever the route changes
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Sends capitalised URLs such as /About to the lowercase version (/about).
// Only the first segment is changed, so blog article ids keep their case.
const LowercasePath = () => {
  const { pathname, search, hash } = useLocation()
  const [, first = '', ...rest] = pathname.split('/')
  const lower = first.toLowerCase()
  if (first === lower) return null
  return <Navigate to={`/${[lower, ...rest].join('/')}${search}${hash}`} replace />
}

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <LowercasePath />
        <RouteSeo />
        <Header />
        <Routes>
          {/* Main Pages */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<CourseHome />} />
          <Route path='/languages' element={<Languages />} />
          <Route path='/enroll' element={<Enroll />} />
          <Route path='/team' element={<Team />} />
          <Route path='/resources' element={<Pricing />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<SingleBlog />} />
          <Route path='/community' element={<Community />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/placement-test' element={<PlacementTest />} />
          <Route path='/library' element={<Library />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/admin-blog' element={<AdminBlog />} />
          {/* You can add more routes for other pages here */}
          {/* <Route path='/about' element={<h1>About Us</h1>} /> */}

          {/* New Language School Pages */}
          {/* Adding these lines uses 'Route' and fixes the warning */}
          {/* <Route path='/login' element={<StudentLogin />} /> */}
          {/* <Route path='/dashboard' element={<StudentDashboard />} /> */}
        </Routes>
        <Footer />
        <CookieConsent />
      </Router>
    </>
  )
}

export default App