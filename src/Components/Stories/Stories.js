import React from 'react'
import "./Stories.css"

function Stories() {
  return (
    <>
    <div className='storiesContainer'>
        <p id="storiesHeading">Stories</p>
        <div className='stories'>
            <img className="stories" src={require("./stories.jpg")} alt="stories circle" />
            <img className="stories" src={require("./stories.jpg")} alt="stories circle" />
            <img className="stories" src={require("./stories.jpg")} alt="stories circle" />
            <img className="stories" src={require("./stories.jpg")} alt="stories circle" />
            <img className="stories" src={require("./stories.jpg")} alt="stories circle" />
            <img className="stories" src={require("./stories.jpg")} alt="stories circle" />
            <img className="stories" src={require("./stories.jpg")} alt="stories circle" />
            <img className="stories" src={require("./stories.jpg")} alt="stories circle" />
            <img className="stories" src={require("./stories.jpg")} alt="stories circle" />
        </div>
    </div>
    </>
  )
}

export default Stories