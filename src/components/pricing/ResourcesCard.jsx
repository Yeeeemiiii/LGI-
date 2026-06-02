import React from 'react'
import Title from '../common/title/Title'
import { resourceHosts, resourceOffers, resourceContact } from '../../dummydata'
// Make sure this path points correctly to your about.css file!
import "../about/about.css" 

const ResourcesCard = ({ marginClass }) => {
    return (
        <>
            {/* --- SECTION 1: PROGRAMS & HOSTS --- */}
            <section className={`aboutHome ${marginClass ? marginClass : ''}`}>
                <div className="container flexSB">
                    <div className="left row">
                        <div className="image-container">
                            {/* Change this src to a real image of the hosts or talks! */}
                            <img src="/images/about.webp" alt="LGI Talks" />
                            <div className="gradient-overlay"></div>
                        </div>
                    </div> 
                    <div className="right row">
                        <Title subtitle="OUR PROGRAMS" title="Teach A Language & LGI Talks" />
                        <div className="items">
                            {resourceHosts.map((val, index) => (
                                /* FIX: Changed flexSB to flex and added gap/alignment styles */
                                <div className="item flex" key={index} style={{ alignItems: 'flex-start', gap: '20px' }}> 
                                    <div className="img" style={{ flexShrink: 0 }}>
                                        <img src={val.cover} alt="" />
                                    </div>
                                    <div className="text" style={{ textAlign: 'left', flexGrow: 1 }}>
                                        <h2>{val.title}</h2>
                                        <p>{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> 
                </div> 
            </section>

            {/* --- SECTION 2: ADDITIONAL OFFERS (Alternating Layout) --- */}
            <section className="aboutHome" style={{ marginTop: '100px' }}>
                <div className="container flexSB">
                    <div className="right row">
                        <Title subtitle="MORE OPPORTUNITIES" title="Additional Offers" />
                        <div className="items">
                            {resourceOffers.map((val, index) => (
                                /* FIX: Applied the exact same alignment fix here */
                                <div className="item flex" key={index} style={{ alignItems: 'flex-start', gap: '20px' }}> 
                                    <div className="img" style={{ flexShrink: 0 }}>
                                        <img src={val.cover} alt="" />
                                    </div>
                                    <div className="text" style={{ textAlign: 'left', flexGrow: 1 }}>
                                        <h2>{val.title}</h2>
                                        <p>{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> 
                    <div className="left row">
                        <div className="image-container">
                            {/* Change this src to an image representing learning/offers! */}
                            <img src="/images/about.webp" alt="Additional Offers" />
                            <div className="gradient-overlay"></div>
                        </div>
                    </div>
                </div> 
            </section>

            {/* --- SECTION 3: CONTACT FOOTER --- */}
            <section className='aboutwrapper' style={{ marginTop: '100px', marginBottom: '50px' }}>
                <div className="container grid">
                    <div className="box" style={{ padding: '20px 0' }}>
                        <h1>Got more questions?</h1>
                        <h3>We are here to help.</h3>
                    </div>
                    {resourceContact.map((val, index) => (
                        <div className="box flex" key={index}>
                            <div className="text">
                                <h1>{val.data}</h1>
                                <h3>{val.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ResourcesCard