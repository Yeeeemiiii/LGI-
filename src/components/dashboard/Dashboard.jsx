import React, { useState } from 'react'
//import Back from '../common/back/Back'
import './dashboard.css'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('certificates')

  // Simulated message tracking local state
  const [message, setMessage] = useState('')
  const [sentSuccess, setSentSuccess] = useState(false)

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim()) {
      setSentSuccess(true)
      setMessage('')
      setTimeout(() => setSentSuccess(false), 4000)
    }
  }

  return (
    <>
      {/**<Back title="Student Dashboard" cover="/images/dashboard.webp" />*/}
      <section className="dashboard-page padding">
        <div className="container dashboard-container">

          {/* --- SIDEBAR MENU --- */}
          <div className="dashboard-sidebar shadow">
            <div className="student-profile">
              <h3>Opeyemi Abdulrahman</h3>
              <p>ID: LGI-2026-0942</p>
            </div>
            <div className="sidebar-menu">
              <button className={`sidebar-btn ${activeTab === 'certificates' ? 'active' : ''}`} onClick={() => setActiveTab('certificates')}>
                <i className="fa fa-certificate"></i> Certificates
              </button>
              <button className={`sidebar-btn ${activeTab === 'assignments' ? 'active' : ''}`} onClick={() => setActiveTab('assignments')}>
                <i className="fa fa-book-open"></i> Assignments
              </button>
              <button className={`sidebar-btn ${activeTab === 'grades' ? 'active' : ''}`} onClick={() => setActiveTab('grades')}>
                <i className="fa fa-graduation-cap"></i> Grades & Feedback
              </button>
              <button className={`sidebar-btn ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}>
                <i className="fa fa-paper-plane"></i> Message Admin
              </button>


              {/* NEW: Logout Button to escape the Dashboard */}
              <button className="sidebar-btn" onClick={() => window.location.href = '/'} style={{ color: '#be3526', marginTop: '20px', borderTop: '1px solid #eee', borderRadius: '0', paddingTop: '20px' }}>
                <i className="fa fa-sign-out-alt"></i> Logout
              </button>
            </div>
          </div>

          {/* --- MAIN CONTENT WINDOW --- */}
          <div className="dashboard-content shadow">

            {/* VIEW 1: CERTIFICATES */}
            {activeTab === 'certificates' && (
              <div>
                <h2>Course Certificates</h2>
                <p style={{ color: '#666', marginBottom: '15px' }}>Download your verified certificates for completed language programs below.</p>
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th>Course Pathway</th>
                      <th>Completion Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>German A1 Intensive Group Course</td>
                      <td>June 18, 2026</td>
                      <td className="download-btn"><i className="fa fa-download"></i> Download PDF</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* VIEW 2: ASSIGNMENTS */}
            {activeTab === 'assignments' && (
              <div>
                <h2>Assignment History</h2>
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th>Task Title</th>
                      <th>Submission Deadline</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>German A1 Phonetics & Vocabulary Video</td>
                      <td>May 10, 2026</td>
                      <td><span className="status-badge passed">Submitted</span></td>
                    </tr>
                    <tr>
                      <td>German A1 Written Grammar Task</td>
                      <td>June 02, 2026</td>
                      <td><span className="status-badge passed">Submitted</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* VIEW 3: GRADES & FEEDBACK */}
            {activeTab === 'grades' && (
              <div>
                <h2>Grades & Performance</h2>
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th>Module Title</th>
                      <th>Grade</th>
                      <th>Instructor Feedback</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A1 Oral Communication Exam</td>
                      <td style={{ fontWeight: 'bold', color: '#1ba415' }}>A (92%)</td>
                      <td>Excellent pacing and crisp phonetic accents. Great job!</td>
                    </tr>
                    <tr>
                      <td>A1 Comprehensive Written Test</td>
                      <td style={{ fontWeight: 'bold', color: '#1ba415' }}>B+ (86%)</td>
                      <td>Good structural knowledge. Watch out for secondary case noun endings.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* VIEW 4: MESSAGES */}
            {activeTab === 'messages' && (
              <div>
                <h2>Contact Administrator</h2>
                <p style={{ color: '#666', marginBottom: '20px' }}>Have any portal platform execution questions, billing disputes, or resource requests? Send an instant administrative ticket below.</p>

                {sentSuccess && (
                  <div style={{ backgroundColor: 'rgba(70, 145, 71, 0.1)', color: '#1ba415', padding: '12px', borderRadius: '5px', marginBottom: '20px', fontWeight: '600' }}>
                    <i className="fa fa-check-circle"></i> Message dispatched successfully to the LGI Support Desk!
                  </div>
                )}

                <form onSubmit={handleSendMessage}>
                  <textarea
                    rows="6"
                    placeholder="Type your message description here..."
                    style={{ border: '1px solid #ddd', padding: '15px', width: '100%', outline: 'none', borderRadius: '5px' }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                  <button type="submit" className="primary-btn" style={{ marginTop: '15px', background: '#be3526', color: '#fff' }}>SEND MESSAGE</button>
                </form>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard