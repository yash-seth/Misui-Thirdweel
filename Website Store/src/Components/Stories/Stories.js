import React from 'react'
import "./Stories.css"
// import {StoryData} from "../../Data"
import { useState, useEffect } from 'react'

function Stories() {
  const [stories, setStories] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:8012/stories")
    .then(response => response.json())
    .then(data => setStories(data))
  },[])
  return (
    <>
    <div className='storiesContainer'>
        <p id="storiesHeading">Stories</p>
        <div className='stories'>
            {stories.map((Story)=>{
              return <img id="story" key={Story.uuid} src={Story.src} alt={Story.alt} height="100px"/>
              })}
             <div id="moreStories">+ 5 more</div>
        </div>
    </div>
    </>
  )
}

export default Stories