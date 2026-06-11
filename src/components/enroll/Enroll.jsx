import React, { useState } from 'react';
import Back from '../common/back/Back';
import './enroll.css';

const languages = [
  { id: 'French', flag: '🇫🇷', native: 'Français' },
  { id: 'Spanish', flag: '🇪🇸', native: 'Español' },
  { id: 'German', flag: '🇩🇪', native: 'Deutsch' },
  { id: 'Mandarin', flag: '🇨🇳', native: '中文' },
  { id: 'Arabic', flag: '🇸🇦', native: 'العربية' },
  { id: 'Portuguese', flag: '🇵🇹', native: 'Português' },
  { id: 'Japanese', flag: '🇯🇵', native: '日本語' }
];

const levels = [
  { id: 'A1', title: 'A1 - Beginner', desc: 'Basic phrases and everyday needs.' },
  { id: 'A2', title: 'A2 - Elementary', desc: 'Routine tasks and simple communication.' },
  { id: 'B1', title: 'B1 - Intermediate', desc: 'Travel, work, and familiar topics.' },
  { id: 'B2', title: 'B2 - Upper Intermediate', desc: 'Complex texts and fluent conversation.' },
  { id: 'C1', title: 'C1 - Advanced', desc: 'Academic and professional fluency.' },
  { id: 'C2', title: 'C2 - Proficient', desc: 'Near-native comprehension and expression.' },
  { id: 'Placement', title: 'Placement Test', desc: 'Take a test to determine my exact level.' }
];

const schedules = [
  { id: 'Weekday Mornings', desc: 'Mon - Thu, 9:00 AM - 12:00 PM' },
  { id: 'Weekday Evenings', desc: 'Mon - Thu, 6:00 PM - 8:00 PM' },
  { id: 'Weekend Intensive', desc: 'Saturdays, 10:00 AM - 2:00 PM' },
  { id: 'Flexible Online', desc: 'Self-paced with weekly live check-ins' }
];

const Enroll = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    language: '',
    level: '',
    schedule: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    referral: ''
  });

  const handleSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send formData to an API/Email service
    setSubmitted(true);
  };

  return (
    <>
      <Back title="Application Portal" />
      <section className="enroll-page">
        <div className="enroll-container">
          
          {/* SUCCESS SCREEN */}
          {submitted ? (
            <div className="success-message">
              <i className="fa fa-check-circle"></i>
              <h2>Application Received!</h2>
              <p>Thank you, {formData.firstName}. Your application for {formData.language} ({formData.level}) has been submitted successfully.</p>
              <p>Our admissions team will contact you at {formData.email} within 24-48 hours with your next steps.</p>
            </div>
          ) : (
            <>
              {/* PROGRESS BAR */}
              <div className="progress-container">
                <div className="progress-bar-fill" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
                {[1, 2, 3].map((num) => (
                  <div key={num} className={`step-indicator ${step >= num ? 'active' : ''}`}>
                    {step > num ? <i className="fa fa-check"></i> : num}
                  </div>
                ))}
              </div>

              {/* STEP 1: COURSE SELECTION */}
              {step === 1 && (
                <div className="form-section fade-in">
                  <h2>1. Choose Your Language</h2>
                  <div className="language-grid">
                    {languages.map((lang) => (
                      <div key={lang.id} className={`lang-card ${formData.language === lang.id ? 'selected' : ''}`} onClick={() => handleSelect('language', lang.id)}>
                        <div className="flag">{lang.flag}</div>
                        <h3>{lang.id}</h3>
                        <span>{lang.native}</span>
                      </div>
                    ))}
                  </div>

                  <h2>Select Your Level</h2>
                  <div className="select-grid">
                    {levels.map((lvl) => (
                      <div key={lvl.id} className={`select-card ${formData.level === lvl.id ? 'selected' : ''}`} onClick={() => handleSelect('level', lvl.id)}>
                        <h4>{lvl.title}</h4>
                        <p>{lvl.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="form-navigation" style={{ justifyContent: 'flex-end' }}>
                    <button className="btn-next" disabled={!formData.language || !formData.level} onClick={nextStep}>Next Step <i className="fa fa-arrow-right"></i></button>
                  </div>
                </div>
              )}

              {/* STEP 2: SCHEDULE */}
              {step === 2 && (
                <div className="form-section fade-in">
                  <h2>2. Preferred Schedule</h2>
                  <div className="select-grid" style={{ gridTemplateColumns: '1fr' }}>
                    {schedules.map((sch) => (
                      <div key={sch.id} className={`select-card ${formData.schedule === sch.id ? 'selected' : ''}`} onClick={() => handleSelect('schedule', sch.id)}>
                        <h4>{sch.id}</h4>
                        <p>{sch.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="form-navigation">
                    <button className="btn-back" onClick={prevStep}>Back</button>
                    <button className="btn-next" disabled={!formData.schedule} onClick={nextStep}>Next Step <i className="fa fa-arrow-right"></i></button>
                  </div>
                </div>
              )}

              {/* STEP 3: PERSONAL DETAILS */}
              {step === 3 && (
                <div className="form-section fade-in">
                  <h2>3. Applicant Details</h2>
                  <div className="select-grid">
                    <div className="input-group">
                      <label>First Name *</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleInput} placeholder="John" required />
                    </div>
                    <div className="input-group">
                      <label>Last Name *</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleInput} placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="select-grid">
                    <div className="input-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInput} placeholder="john@example.com" required />
                    </div>
                    <div className="input-group">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInput} placeholder="+234..." required />
                    </div>
                  </div>

                  <div className="select-grid">
                    <div className="input-group">
                      <label>Date of Birth *</label>
                      <input type="date" name="dob" value={formData.dob} onChange={handleInput} required />
                    </div>
                    <div className="input-group">
                      <label>How did you hear about us?</label>
                      <select name="referral" value={formData.referral} onChange={handleInput}>
                        <option value="">Select an option...</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Friend/Family">Friend or Family</option>
                        <option value="Event">LGI Event / Street Library</option>
                        <option value="Search Engine">Google / Search Engine</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-navigation">
                    <button className="btn-back" onClick={prevStep}>Back</button>
                    <button className="btn-next" onClick={handleSubmit} disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.dob}>
                      Submit Application <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </section>
    </>
  );
};

export default Enroll;