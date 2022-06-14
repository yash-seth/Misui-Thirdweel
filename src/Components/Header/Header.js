import React from 'react'
import './Header.css'
//import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <>
        <div className="mainHeader">
            <div className="company-info">
                <div className="logo"><img src="http://misui.in/media/logo.svg" alt="company-logo" height="35px" /></div>
                <div className="logo_text"><b>ThirdWeel</b></div>
            </div>
            <div className='buttons'>
                <button id='Home'>Home</button>
                <button id='About'>About Us</button>
                <button id='Hiring'>Hiring</button>
                <button id='Contact'>Contact Us</button>
            </div>
            <div className='mobile-menu'>

              </div>
        </div>
    </>
  )
}

export default Header