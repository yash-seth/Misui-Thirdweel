import React from 'react'
import "./Stories.css"
// import {StoryData} from "../../Data"
import { useState, useEffect } from 'react'
import { websiteStoreUrl } from '../../api/urls'
import axios from 'axios';

function Stories() {
  const [stories, setStories] = useState([{}])

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
          {stories.map((Story) => {
            return <img id="story" key={Story.uuid} src={Story.src} alt={Story.alt} height="100px" />
          })}
          <div id="moreStories">+ 5 more</div>
        </div>
      </div>
    </>
  )
}

export default Stories