import React from 'react'
import {ExperienceList} from '../helpers/ExperienceList.js'
import ExperienceItem from '../components/ExperienceItem.js'
import '../styles/Experience.css'
function Experience() {

  return (
    <div className="experience">
      <h1 className="aboutMe"> Get to know me better! </h1>
      <div className="experienceList"> {ExperienceList.map((item, key) => {
        return <ExperienceItem key ={key} image={item.image} company={item.company} role={item.role} dates={item.dates} description={item.description}/>;
      })
      }
      </div>
    </div>
  )
}

export default Experience