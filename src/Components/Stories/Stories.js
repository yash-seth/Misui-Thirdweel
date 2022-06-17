import React from 'react'
import "./Stories.css"

function Stories() {
  return (
    <>
    <div className='storiesContainer'>
        <p id="storiesHeading">Stories</p>
        <div className='stories'>
            <img id="story" src={require("./stories.jpg")} alt="stories circle" />
            <img id="story" src={require("./stories.jpg")} alt="stories circle" />
            <img id="story" src={require("./stories.jpg")} alt="stories circle" />
            <img id="story" src={require("./stories.jpg")} alt="stories circle" />
            <div id="moreStories">+ 5 more</div>
            <img id="story" src={require("./stories.jpg")} alt="stories circle" />
            <img id="story" src={require("./stories.jpg")} alt="stories circle" />
            <img id="story" src={require("./stories.jpg")} alt="stories circle" />
            <img id="story" src={require("./stories.jpg")} alt="stories circle" />
            <img id="story" src={require("./stories.jpg")} alt="stories circle" />
        </div>
    </div>
    </>
  )
}

export default Stories