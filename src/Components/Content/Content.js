import React from 'react'
import './Content.css'

function Content() {
  return (
    <>
        <div className='mainContent'>
            <div className='content-area'>
                <p>Our mission is to <b><i>digitalise</i></b> physical market<br/> and <b><i>bridge the gap</i></b> between the physical 
                and<br /> digital market</p>
                <img src={require('./down_arrow.png')} height="80px"/><br />
                <img src={require('./diagram.png')} height="400px"/><br />
                <img src={require('./down_arrow.png')} height="50px"/><br />
                <div className="introduction-text"><i>We present to you,</i><br/></div>
                <h2>Thirdweel.</h2>
            </div>
        </div>
    </>
  )
}

export default Content