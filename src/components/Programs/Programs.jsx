import React from 'react'
import "./Programs.css"
import ProgramsData from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"

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
            {ProgramsData.map((programs)=>(
                <div className='category'>
                    {programs.image}
                    <span>{programs.heading}</span>
                    <span>{programs.details}</span>
                    <div className='join-now'>
                        <span>Join Now</span>
                        <img src={RightArrow} alt=''/>
                    </div>
                </div>
                
            ))}
        </div>
      
    </div>
  )
}

export default Programs;
