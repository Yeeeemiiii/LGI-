import React from 'react'
import { aboutwrapper } from '../../dummydata'

const AboutWrapper = () => {
  return (
    <>
        <section className='aboutwrapper'>
            <div className="container grid">
                {aboutwrapper.map((val) => (
                    <div className="box flex">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
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

export default AboutWrapper