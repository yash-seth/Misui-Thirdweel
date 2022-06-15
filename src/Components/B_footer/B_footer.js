import react from 'react'

import './style.css'

function B_footer(){
    return(<>
        <div className='background'>
            
                <div><h1><b>ThirdWeel</b></h1></div>
                <div className='row'>
                    <div className='container'>
                        <div className='column'>
                                <img className='bac_img'  src={require('../../assets/Pictures/D_img.png')}/>
                                <div className='bac'>
                                   <div className='bac_text'> 30 mins delivery </div> 
                                   <div className='bac_details'>Have your order delivered at your doorstep with ease & no hassle.</div>
                                </div>
                            </div>
                            <div className='column'>
                                <img className='bac_img' src={require('../../assets/Pictures/D_img2.png')}/> 
                                <div className='bac'>
                                <div className='bac_text'> Order Pickup </div> 
                                <div className='bac_details'> You can now pick your order from the store directly, no need to wait in long lines and long billing time.</div>
                                </div>
                            </div>
                            <div className='column'>
                                <img className='bac_img' src={require('../../assets/Pictures/D_img3.png')}/> 
                                <div className='bac'>
                                <div className='bac_text'>Cheaper than amazon</div> 
                                <div className='bac_details'>Get your orders at cheaper prices and with great offers.</div>
                                </div>
                            </div>        
                </div>
            </div>
        </div>
        <div className='background_1'>
            <div><h1><b>Let customers speak for us.</b></h1></div>
        
                <div className='column cust_review'>
                <img src={require('../../assets/Icons/Reviews_icon.png')} width={25} height={25}/>
                “Thirdwheel is one of the best online shopping sites i’ve ever used! The customer service is very helpful and behaviour is good. I had a wonderful experience.”
                <br/>~ Roshan Gupta
                </div>
        
                <div className='column cust_review'>
                <img src={require('../../assets/Icons/Reviews_icon.png')} width={25} height={25}/>
                “I like the service and the quality of goods. I love shopping on thirdwheel as quality, price and service is really excellent. I also get to support the local retail stores in my areas”                 
                <br/>~ Aniruddha Bala 
                </div>

                <div className='column cust_review'>
                <img src={require('../../assets/Icons/Reviews_icon.png')} width={25} height={25}/>
                “I really love the easy to use app interface, I had no difficulties in using the service. The features are also one of a kind and thirdwheel has done a very unique take on the features.”
                <br/>~ Gautam Patil

                </div>
        </div>
       
            </>  )
}

export default B_footer;