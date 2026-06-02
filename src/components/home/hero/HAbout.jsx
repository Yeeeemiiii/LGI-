import React from 'react'
import Title from '../../common/title/Title'
import OnlineCourses from '../../allcourses/OnlineCourses'

// 1. Local data for the language programs
const currentLanguages = [
    {
        language: "French",
        courses: [
            "French for beginners (A1/A2)",
            "French for business and corporate professionals",
            "TEF/TCF preparatory classes",
            "Advanced level training (A1 - B2)"
        ]
    },
    {
        language: "German",
        courses: [
            "German for beginners",
            "German for business and corporate professionals",
            "Goethe zertifikat preparatory classes",
            "Advanced level training (A1 - B2)"
        ]
    },
    {
        language: "English",
        courses: [
            "IELTS preparatory classes"
        ]
    },
    {
        language: "Chinese",
        courses: [
            "Chinese for beginners",
            "Chinese for business and corporate professionals"
        ]
    }
];

const HAbout = () => {
    return (
        <>
            <section className="homeAbout padding">
                <div className="container">
                    
                    {/* --- SECTION 1: LANGUAGE PROGRAMS --- */}
                    <Title subtitle="OUR PROGRAMS" title="Languages Currently On Our Programme" />
                    <div className="coursesCard" style={{ padding: '0', marginTop: '40px' }}>
                        <div className="grid2">
                            {currentLanguages.map((lang, index) => (
                                <div className="items shadow" key={index} style={{ display: 'flex', flexDirection: 'column', padding: '30px', backgroundColor: '#fff', borderRadius: '8px' }}>
                                    <div className="text" style={{ flexGrow: 1 }}>
                                        <h1 style={{ fontSize: '24px', color: 'rgba(70, 145, 71, 1)', marginBottom: '20px', borderBottom: '2px solid rgba(70, 145, 71, 0.2)', paddingBottom: '10px' }}>
                                            {lang.language}
                                        </h1>
                                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '30px' }}>
                                            {lang.courses.map((course, i) => (
                                                <li key={i} style={{ marginBottom: '10px' }}>{course}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button className='outline-btn' style={{ width: '100%', marginTop: 'auto' }}>ENROLL NOW !</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- SECTION 2: PRICING PLANS --- */}
                    <div style={{ marginTop: '80px' }}>
                        <Title subtitle="TUITION" title="Pricing" />
                        <div className="grid2" style={{ marginTop: '40px' }}>
                            {/* Private Classes Card */}
                            <div className="items shadow" style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '8px', borderTop: '4px solid #be3526' }}>
                                <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#333', marginBottom: '15px' }}>Private Classes</h2>
                                <h1 style={{ fontSize: '32px', color: 'rgba(70, 145, 71, 1)', marginBottom: '10px' }}>240,000 NGN</h1>
                                <p style={{ color: '#999', fontSize: '16px', marginBottom: '25px' }}>Duration: 3 Months</p>
                                <button className='outline-btn' style={{ width: '100%' }}>GET STARTED</button>
                            </div>

                            {/* Group Classes Card */}
                            <div className="items shadow" style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '8px', borderTop: '4px solid #be3526' }}>
                                <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#333', marginBottom: '15px' }}>Group Classes</h2>
                                <h1 style={{ fontSize: '32px', color: 'rgba(70, 145, 71, 1)', marginBottom: '10px' }}>150,000 NGN</h1>
                                <p style={{ color: '#999', fontSize: '16px', marginBottom: '25px' }}>Duration: 3 Months</p>
                                <button className='outline-btn' style={{ width: '100%' }}>GET STARTED</button>
                            </div>
                        </div>
                    </div>

                    {/* --- SECTION 3: UPCOMING LANGUAGES --- */}
                    <div style={{ marginTop: '80px', marginBottom: '50px' }}>
                        <Title subtitle="WHAT'S NEXT" title="Upcoming Languages" />
                        <div className="shadow" style={{ padding: '30px', backgroundColor: '#f8f8f8', borderRadius: '8px', borderLeft: '5px solid rgba(70, 145, 71, 1)', marginTop: '30px' }}>
                            <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8', margin: 0 }}>
                                We are continuously expanding our programs. Soon, we will be introducing courses in: <br/>
                                <strong style={{ color: '#333', fontSize: '20px', display: 'block', marginTop: '10px' }}>Spanish, Russian, and African Languages</strong> 
                                <span style={{ fontSize: '15px' }}>(including Hausa, Igbo, Yoruba, Swahili, Ewe, and more)</span>.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            
            <OnlineCourses/>
        </>
    )
}

export default HAbout