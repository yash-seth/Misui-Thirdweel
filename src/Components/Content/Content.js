import React from 'react'
import './Content.css'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import HouseSidingOutlinedIcon from '@mui/icons-material/HouseSidingOutlined';

function Content() {
  return (
    <>
        <div className='mainContent'>
            <div className='content-area'>
                <p>Our mission is to <b><i>digitalise</i></b> physical market<br/> and <b><i>bridge the gap</i></b> between the physical 
                and<br /> digital market</p>
                <img src={require('./down_arrow.png')} height="80px" alt='down arrow'/><br />
                <img src={require('./diagram.png')} height="400px" alt='diagram'/><br />
                <img src={require('./down_arrow.png')} height="50px" alt='down arrow'/><br />
                <div className="introduction-text"><i>We present to you,</i><br/></div>
                <h2>Thirdweel.</h2>
            </div>
                <div className='content-area-middle'>
                    Thirdweel leverages the strength of the local retail shop <br/>
                    network to its best potential, benefiting both customers and <br/>
                    local retailers. Packed with new innovative features to connect <br/>
                    users and the retail shopkeepers on a deeper level to provide a<br/>
                    personalized e-commerce experience
            </div>
            <div className='content-area'>
                <div className='caption'>Thirdweel it.</div>
                <div className='flowchart'>
                    <CottageOutlinedIcon style={{ fontSize: 70 }}/>
                    <ArrowRightAltOutlinedIcon style={{ fontSize: 70 }}/>
                    <img src="http://misui.in/media/logo.svg" alt="company-logo" height="70px" />
                    <ArrowRightAltOutlinedIcon style={{ fontSize: 70 }}/>
                    <HouseSidingOutlinedIcon style={{ fontSize: 70 }}/> <br />
                    <div className='flowchart-left-text'>Your home.</div>
                    <div className='flowchart-right-text'>Your neighbourhood local stores.</div>
                </div><br />
                <div className='shapes'>
                    <img src={require('./square.png')} alt='square' height="370px"></img>
                    <img src={require('./circle.png')} alt='circle' height="400px"></img>
                </div>
                <hr/>
            </div>
        </div>
    </>
  )
}

export default Content