import React from 'react'
import "./Stories.css"
import {StoryData} from "../../Data"

function Stories() {
  return (
    <>
    <div className='storiesContainer'>
        <p id="storiesHeading">Stories</p>
        <div className='stories'>
            {StoryData.map((Story)=>{
              return <img id="story" key={Story.id} src={require("./"+Story.src)} alt={Story.alt}/>
              })}
             <div id="moreStories">+ 5 more</div>
        </div>
    </div>
    </>
  )
}

export default Stories