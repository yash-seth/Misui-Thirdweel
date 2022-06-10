import React from 'react'
import './Footer.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CallIcon from '@mui/icons-material/Call';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AddIcon from '@mui/icons-material/Add';

function Footer() {
  return (
    <div className='mainFooter'>
        <div className="container">
            <h1><b>Thirdweel</b></h1>
            <p>We provide the best in the class e-commerce <br/> service, we are always there for you</p>
            <p>Let's get started.</p>
            <b id="connectText">Connect with us.</b>
            <hr />
            <div class="row">
                <div class="column">
                    <b>Links</b><br/>
                    <div className='list-items'>
                        <ArrowUpwardIcon/>Home<br/>
                        <ArrowUpwardIcon/>About Us<br/>
                        <ArrowUpwardIcon/>Hiring<br/>
                        <ArrowUpwardIcon/>Contact Us
                    </div>
                </div>
                <div class="column">
                    <b>Contacts</b><br/>
                    <div className='list-items'>
                        <CallIcon />919191919191<br/>
                        <FmdGoodOutlinedIcon /> 2nd floor, K-tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
                    </div>
                </div>
                <div class="column">
                    <b>Legals</b><br />
                    <div className='list-items'>
                    <AddIcon />Terms of use<br />
                    <AddIcon />Privacy Policy<br />
                    <AddIcon />Contact Information<br />
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