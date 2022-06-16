import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='aboutContainer'>
            <div className='aboutHeading'>
                <section id="about-heading">Order today get today</section>
            </div>
            <div className='aboutBanners'>
                <img id="aboutBanner" src={require("./pickup.png")} alt="about banner" />
                <img id="aboutBanner" src={require("./delivery.png")} alt="about banner" />
            </div>
        </div>
  )
}

export default About