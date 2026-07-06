import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom' 
//import Back from '../common/back/Back'
import './auth.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // For now, let's simulate a login match and send them to the student dashboard
    if (email && password) {
      navigate('/dashboard')
    }
  }

  return (
    <>
      {/**<Back title="Student Portal" cover="/images/login.webp" />*/}
      <section className="login-page padding">
        <div className="login-card shadow">

          {/* NEW: Back to Home link so users aren't trapped */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Link to="/" style={{ color: '#be3526', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>
              <i className="fa fa-arrow-left"></i> Back to Website
            </Link>
          </div>

          <h2>Welcome Back</h2>
          <p className="subtitle">Log in to access certificates, grades, and portal support.</p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Student Email</label>
              <input
                type="email"
                placeholder="student@lgifoundation.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="outline-btn">ACCESS DASHBOARD</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login