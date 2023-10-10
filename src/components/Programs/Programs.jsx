import React from 'react'
import "./Programs.css"
import {programsData} from "../../data/programsData"
import {right_arrow} from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        {/* Header */}
        <div className='programs-header'>
            <span className='stroke-text'>EXPLORE OUR</span>
            <span>PROGRAMS</span>
            <span className='stroke-text'>TO SHAPE YOU</span>
        </div>

        <div className='programs-categories'>
            {programsData.map((programs)=>(
                <div className='category'>
                    {programs.image}
                    <span>{programs.heading}</span>
                    <span>{programs.details}</span>
                    <div className='join-now'>
                        <span>Join Now</span>
                        <img src={right_arrow} alt=''/>
                    </div>
                </div>
                
            ))}
        </div>
      
    </div>
  )
}

export default Programs
