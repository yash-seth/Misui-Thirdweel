import React from 'react'
import "./About.css"
import {AboutData} from "../../Data"

function About() {
  return (
    <div className='aboutContainer'>
            <div className='aboutHeading'>
                <section id="about-heading">Order today get today</section>
            </div>
            <div className='aboutBanners'>
            {AboutData.map((aboutBanner)=>{
              return <img id="aboutBanner" key={aboutBanner.id} src={require("./"+aboutBanner.src)} alt={aboutBanner.alt}/>
              })}
            </div>
        </div>
  )
}

export default About