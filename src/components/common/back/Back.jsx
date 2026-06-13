import React from 'react'
import { useLocation } from 'react-router-dom'

const Back = ({ title, cover }) => {
    const location = useLocation()
    
    // Set a default image just in case a page forgets to pass a cover!
    const bgImage = cover || "/images/back.webp"

    return (
        <>
            <section 
                className='back'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`
                }}
            >
                <h2>Home / {location.pathname.split("/")[1]}</h2>
                <h1>{title}</h1>
            </section>
            <div className="marigin"></div>
        </>
    )
}

export default Back