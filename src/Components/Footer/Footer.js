import React from 'react'
import './Footer.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CallIcon from '@mui/icons-material/Call';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AddIcon from '@mui/icons-material/Add';
import { fontSize } from '@mui/system';

function Footer() {
  return (
    <div className='mainFooter'>
        <div className="container">
            <h1><b>ThirdWeel</b></h1>
            <p>We provide the best in the class e-commerce <br/> service, we are always there for you</p>
            <p>Let's get started.</p>
            <b id="connectText">Connect with us.</b>
            <hr />
            <div class="row">
                <div class="column">
                  
                    <div className='list-items'>
                    <b style={{fontSize:'30px',}}>Links</b><br/>
                    
                    <div>
                        <ArrowUpwardIcon/>Home
                    </div>
                    
                    <div>
                        <ArrowUpwardIcon/>About Us<br/>
                    </div>
                    
                    <div>
                        <ArrowUpwardIcon/>Hiring<br/>
                    </div>
                    
                    <div>
                        <ArrowUpwardIcon/>Contact Us
                    </div>
                    </div>
                </div>
                <div class="column">
                   
                    <div className='list-items'>
                    <b style={{fontSize:'30px',}}>Contacts</b><br/>
                        <div><CallIcon />919191919191</div>
                        <div><FmdGoodOutlinedIcon /> 2nd floor, K-tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div className='list-items'>
                    <b style={{fontSize:'30px',}}>Legals</b><br />
                    <div> <AddIcon />Terms of use </div>
                    <div><AddIcon />Privacy Policy </div> 
                    <div> <AddIcon />Contact Information </div>
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