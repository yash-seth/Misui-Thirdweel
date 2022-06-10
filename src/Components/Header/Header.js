import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
        <div className="mainHeader">
            <div className="company-info">
                <div className="logo"><img src="http://misui.in/media/logo.svg" alt="company-logo" height="25px" /></div>
                <div className="logo_text"><b>Thirdweel</b></div>
            </div>
            <div className='buttons'>
                <button id='Home'>Home</button>
                <button id='About'>About Us</button>
                <button id='Hiring'>Hiring</button>
                <button id='Contact'>Contact Us</button>
            </div>
        </div>
    </>
  )
}

export default Header