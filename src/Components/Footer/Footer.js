import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='mainFooter'>
        <div className="footerContainer">
            <section id="footerHeading"><b>ThirdWeel</b></section>
            <p id="sub-footerHeading">We provide the best in the class e-commerce service, we are always there for you</p>
            <b id="connectText">Where ever you are.</b>
            <hr />
            <div className="footerRow">
                <div className="footerColumnLink">
                    <p className="list-header"><b>Links</b></p>
                    <div className='list-items'>
                        <div className='list-item'><img className="link-icon" src={require("./links.png")} alt="link icon" />Home</div><br/>
                        <div className='list-item'><img className="link-icon" src={require("./links.png")} alt="link icon" />About Us</div><br/>
                        <div className='list-item'><img className="link-icon" src={require("./links.png")} alt="link icon" />Hiring</div><br/>
                        <div className='list-item'><img className="link-icon" src={require("./links.png")} alt="link icon" />Contact Us</div>
                    </div>
                </div>
                <div className="footerColumn">
                <p className="list-header"><b>Contact</b></p>
                    <div className='list-items'>
                        <div className='list-item'><img className="link-icon" src={require("./call.png")} alt="call icon" />919191919191</div><br/>
                        <div className='list-item'><img className="link-icon" src={require("./location.png")} alt="location icon" />2nd floor, K-tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</div>
                    </div>
                </div>
                <div className="footerColumn">
                <p className="list-header"><b>Legals</b></p>
                    <div className='list-items'>
                        <div className='list-item'><img className="link-icon" src={require("./legal.png")} alt="legal icon" />Terms of use</div><br />
                        <div className='list-item'><img className="link-icon" src={require("./legal.png")} alt="legal icon" />Privacy Policy</div><br />
                        <div className='list-item'><img className="link-icon" src={require("./legal.png")} alt="legal icon" />Contact Information</div><br />
                    </div>
                </div>
            </div>
            <hr />
            <div className='copyright'><b> &copy; Copyright 2022 MISUI INDIA PVT LTD.</b></div>
        </div>
    </div>
  )
}

export default Footer