import React from 'react'

function ExperienceItem({image, company, role, dates, description}) {
  return (
    <div className="experienceItem"> 
        <div className="image" style={{backgroundImage: `url(${image})`}}> </div>
        <h1> {role}</h1>
        <p className="company"> {company}  </p>
        <p className="dates"> {dates}  </p>
        <p> {description} </p>
    </div>
  )
}

export default ExperienceItem