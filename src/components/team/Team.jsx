import React from 'react'
import "./team.css"
import Back from '../common/back/Back'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <>
    <Back title="Team" cover="/images/extra.webp"/>
    <section className="team padding">
        {/* We removed the 'grid' class from this container so tabs sit correctly */}
        <div className="container">
            <TeamCard/>
        </div>
    </section>
    </>
  )
}

export default Team