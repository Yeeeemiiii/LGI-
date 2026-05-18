import React from 'react'
import { team } from '../../dummydata'

const TeamCard = () => {
    return (
        <>
            {team.map((val, index) => (
                <div className="items shadow" key={index}>
                    <div className="img">
                        <img src={val.cover} alt={val.name} />
                    </div>
                    <div className="details">
                        <h2>{val.name}</h2>
                        <p>{val.work}</p>
                        {val.email && (
                            <p className="email-link">
                                <a href={`mailto:${val.email}`}>{val.email}</a>
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}

export default TeamCard