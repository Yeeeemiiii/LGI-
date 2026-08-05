import React, { useState } from 'react'
import { team } from '../../dummydata'

const TeamCard = () => {
    const [selectedDept, setSelectedDept] = useState('Leadership');

    const departments = [
        { id: 'Leadership', label: 'Leadership' },
        { id: 'Instructors', label: 'Instructors' },
        { id: 'Outreach', label: 'Programs & Outreach' },
        { id: 'Operations', label: 'IT & Operations' },
        { id: 'All', label: 'View All' }
    ];

    const filteredTeam = selectedDept === 'All' 
        ? team 
        : team.filter(member => 
            Array.isArray(member.department) 
                ? member.department.includes(selectedDept) 
                : member.department === selectedDept
        );

    return (
        <>
            {/* --- DEPARTMENT SELECTOR TABS --- */}
            <div className="department-selector">
                {departments.map((dept) => (
                    <button
                        key={dept.id}
                        className={`dept-tab ${selectedDept === dept.id ? 'active' : ''}`}
                        onClick={() => setSelectedDept(dept.id)}
                    >
                        {dept.label}
                    </button>
                ))}
            </div>

            {/* --- FILTERED TEAM GRID --- */}
            <div className="grid">
                {filteredTeam.length > 0 ? (
                    filteredTeam.map((val, index) => (
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
                    ))
                ) : (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'grey' }}>
                        <h3>No team members found for this department.</h3>
                    </div>
                )}
            </div>
        </>
    )
}

export default TeamCard