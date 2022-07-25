import React from 'react'
import "./Stories.css"
import {StoryData} from "../../Data"
import { useState, useEffect } from 'react'
import { websiteStoreUrl } from '../../api/urls'
import axios from 'axios';

function Stories() {
  const [stories, setStories] = useState([{}])
  const [storyPopup, setStoryPopup] = useState();
  const toggleCurrentStorytView = (id) => {
    setStoryPopup(storyPopup === id ? undefined : id);
    if(storyPopup!=undefined) document.getElementsByClassName("storyPopupOverlay")[0].style.display = "block";
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
              <div className='storyPopupHeader'>
                <div className='storyPopupHeaderDetails'>
                  <div id="storyPopupHeaderStorePFP"><img key={Story.id} src={require("./"+Story.src)} alt={Story.alt} height="60px" /></div>
                  <div className='storyPopupHeaderProfileDetails'>
                    <div id='storyPopupHeaderStoreName'>{Story.name}</div>
                    <div id='storyPopupHeaderTimestamp'>{Story.timeAgo}</div>
                  </div>
                </div>
                <div className='storyPopupHeaderControls'>
                  <img id="storyPopupDropdown" src={require("./dropdown.png")} alt="dropdown"></img>
                  <img id="storyPopupCross" src={require("./crossButton.png")} alt="cross button" onClick={() => toggleCurrentStorytView()}></img>
                </div>
              </div>
              <img id="storyImagePopup" src={require("./" + Story.storyImg)} alt="story content" height="560px"/>
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