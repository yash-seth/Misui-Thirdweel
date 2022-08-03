import React from 'react'
import "./Stories.css"
import {StoryData} from "../../Data"
import { useState, useEffect } from 'react'
import { websiteStoreUrl } from '../../api/urls'
import axios from 'axios';
import {Link} from "react-router-dom"

function Stories() {
  const [stories, setStories] = useState([{}])
  const [storyPopup, setStoryPopup] = useState();
  const toggleCurrentStorytView = (id) => {
    setStoryPopup(storyPopup === id ? undefined : id);
    if(storyPopup!==undefined) document.getElementsByClassName("storyPopupOverlay")[0].style.display = "block";
    else document.getElementsByClassName("storyPopupOverlay")[0].style.display = "none";
};
  useEffect(() => {
    axios
      .get(`${websiteStoreUrl}/stories`)
      .then((response) => {
        console.log(response)
        setStories(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <div className='storiesContainer'>
        <p id="storiesHeading">Stories</p>
        <div className='stories'>
          {StoryData.map((Story) => {
            return(<>
            <img id="story" key={Story.id} src={require("./"+Story.src)} alt={Story.alt} height="100px" onClick={() => toggleCurrentStorytView(Story.id)}/>
            {storyPopup===Story.id? 
            (<><div className='storyPopup'>
              {Story.type==="content" && <div className='storyPopupHeader'>
                <div className='storyPopupHeaderDetails'>
                  <div id="storyPopupHeaderStorePFP"><img key={Story.id} src={require("./"+Story.src)} alt={Story.alt} height="60px" /></div>
                  <div className='storyPopupHeaderProfileDetails'>
                    <Link to="/storeProfile" style={{textDecoration:"none", color:"inherit"}}><div id='storyPopupHeaderStoreName'>{Story.name}</div></Link>
                    <div id='storyPopupHeaderTimestamp'>{Story.timeAgo}</div>
                  </div>
                </div>
                <div className='storyPopupHeaderControls'>
                  <img id="storyPopupDropdown" src={require("./dropdown.png")} alt="dropdown"></img>
                  <button onClick={() => toggleCurrentStorytView()}><img id="storyPopupCross" src={require("./crossButton.png")} alt="cross button"/></button>
                </div>
              </div>}
              {Story.type==="promo" && <div className='storyPopupPromoHeader'>
                <div className='storyPopupHeaderDetails'>
                  <div id="storyPopupHeaderStorePFP"><img key={Story.id} src={require("./"+Story.src)} alt={Story.alt} height="60px" /></div>
                  <div className='storyPopupHeaderProfileDetails'>
                  <Link to="/storeProfile" style={{textDecoration:"none", color:"inherit"}}><div id='storyPopupHeaderStoreName'>{Story.name}</div></Link>
                    <div id='storyPopupHeaderTimestamp'>{Story.timeAgo}</div>
                  </div>
                </div>
                <div className='storyPopupHeaderControls'>
                  <img id="storyPopupDropdown" src={require("./dropdown.png")} alt="dropdown"></img>
                  <button onClick={() => toggleCurrentStorytView()}><img id="storyPopupCross" src={require("./crossButton.png")} alt="cross button"/></button>
                </div>
              </div>}
              {Story.id!==0 && <div className='navigationLeftStory'>
                <button onClick={() => toggleCurrentStorytView(Story.id-1)}>
                  <img src={require("./arrowRound.png")} alt="nav" id="arrowRoundLeft"/>
                  <img src={require('./left.png')} alt="nav" id="leftArrowStory"/>
                </button>
              </div>}
              {Story.type==="content" && <img id="storyImagePopup" src={require("./" + Story.storyImg)} alt="story content" height="560px" width="350px"/>}
              {Story.type==="promo" && <div className='promoStoryPopup'>
                <div className='promoStoryPopupHeader'>
                  <img src={require("./lightning.png")} id="lightningDeal" alt="lighting deal"/>
                  <div className='promoStoryPopupHeaderText'>Ultra Lighting Deal</div>
                  </div>
                  <div id='promoStoryPopupHeaderSubText'>Buy in 5 minutes or this deal will vanish</div>
                  <img src={require("./" + Story.prodImg)} alt="product" id="promoProdImg" height="200px" width="200px"/>
                  <div id="promoProductName">{Story.prodName}</div>
                  <div id="promoProductAmount">{Story.amount}</div>
                  <div className='promoProductPriceDetails'>
                    <div id="strikethrough">{Story.price}</div>
                    <div id="promoProductDiscount">{Story.discount}</div>
                  </div>
                  <div id="promoProductNumberOfWatching">{Story.peopleWatching} People are watching this deal</div>
                  <button id="promoPopupBuyNowButton"><Link to="/productDescription" style={{textDecoration:"none", color:"inherit"}}>Buy Now</Link></button>
                  <div id="promoProductFooterText">Order will be delivered in 30 min</div>
                  <div className='promoPopupStoreInfo'>
                    <b>Sold By:</b>
                    <div id="promoPopupStoreInfoName">{Story.name}</div>
                    <div id="promoPopupStoreInfoAddr">{Story.addr}</div>
                  </div>
                </div>}
              {Story.id!==StoryData.length-1 && <div className='navigationRightStory'>
                <button onClick={() => toggleCurrentStorytView(Story.id+1)}>
                  <img src={require("./arrowRound.png")} alt="nav" id="arrowRoundRight"/>
                  <img src={require('./right.png')} alt="nav" id="rightArrowStory"/>
                </button>
              </div>}
            </div>
            <div className='storyPopupOverlay'></div>
            </>)
            :
            (<span></span>)
            }
            </>)
          })}
          <div id="moreStories">+ 5 more</div>
        </div>
      </div>
      <button id="chatIconBtn" style={{textDecoration:"none"}}><img src={require("./chatIcon.png")} alt="chat icon" id="chatIcon"/></button>
    </>
    // <>
    //   <div className='storiesContainer'>
    //     <p id="storiesHeading">Stories</p>
    //     <div className='stories'>
    //       {stories.map((Story) => {
    //         return <img id="story" key={Story.uuid} src={Story.src} alt={Story.alt} height="100px" />
    //       })}
    //       <div id="moreStories">+ 5 more</div>
    //     </div>
    //   </div>
    // </>
  )
}

export default Stories