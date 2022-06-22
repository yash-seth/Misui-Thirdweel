import './B_footer.css'

function B_footer(){
    return(<>
            <div className='featuresContainer'>
                <div id="features_header"><h1><b>ThirdWeel</b></h1></div>
                <div className='features'>
                    <div className='feature'>
                        <img className='featureImg' src={require('../../Assets/Pictures/D_img.png')} alt="feature" height="300px"/>
                        <div className='featureSubHeading'>30 mins delivery</div>
                        <div className='featureDetail'><div>Have your order delivered at your doorstep with ease & no hassle.</div></div>
                    </div>
                    <div className='feature'>
                        <img className='featureImg' src={require('../../Assets/Pictures/D_img2.png')} alt="feature" height="300px"/>
                        <div className='featureSubHeading'>Order Pickup</div>
                        <div className='featureDetail'><div>You can now pick your order from the store directly, no need to wait in long lines and long billing time.</div></div>
                    </div>
                    <div className='feature'>
                        <img className='featureImg' src={require('../../Assets/Pictures/D_img3.png')} alt="feature" height="300px"/>
                        <div className='featureSubHeading'>Cheaper than amazon</div>
                        <div className='featureDetail'><div>Get your orders at cheaper prices and with great offers.</div></div>
                    </div>
                </div>
            </div>
        <div className='reviewContainer'>
        <div id="review_header"><h1><b>Let customers speak for us.</b></h1></div>
        <div className='reviews'>
                <div className='column_cust_review'>
                    <img src={require('../../Assets/Icons/Reviews_icon.png')} width={25} height={25} alt="edit review icon"/>
                    <div className='reviewContent'>
                    “Thirdwheel is one of the best online shopping sites i've ever used! The customer service is very helpful and behaviour is good. I had a wonderful experience.”
                    <br/>~ Roshan Gupta
                    </div>
                </div>     
                <div className='column_cust_review'>
                    <img src={require('../../Assets/Icons/Reviews_icon.png')} width={25} height={25} alt="edit review icon"/>
                    <div className='reviewContent'>
                    “I like the service and the quality of goods. I love shopping on thirdwheel as quality, price and service is really excellent. I also get to support the local retail stores in my areas”                 
                    <br/>~ Aniruddha Bala 
                    </div>
                </div>
                <div className='column_cust_review'>
                    <img src={require('../../Assets/Icons/Reviews_icon.png')} width={25} height={25} alt="edit review icon"/>
                    <div className='reviewContent'>
                    “I really love the easy to use app interface, I had no difficulties in using the service. The features are also one of a kind and thirdwheel has done a very unique take on the features.”
                    <br/>~ Gautam Patil
                    </div>
                </div>
            </div>
        </div>
       
            </>  )
}

export default B_footer;