import React from 'react'
import "./ProfilePageHeader.css"
import {ProfileData, ProfileImages, rewardsImages} from "../../../../Data"
import {useState, useEffect} from "react"

function ProfilePageHeader() {
    const [imageGridView, setImageGridView] = useState("posts")
    useEffect(() => {
        setImageGridView("posts");
    }, [])
  return (
    <div className="ProfilePageHeaderMain">
        <div className="ProfilePageHeaderMainTopContainer"><span></span></div>
        <div className="ProfileDetails">
            <div className="ProfileDetailsMain">
                <div id="ProfileName">{ProfileData[0].name}</div>
            </div>
            <div className="ProfileNumbers">
            <div className='ProfileDetailsPostsCount'>
                <div className="ProfileDetailsPostsCountHeader">Posts</div>
                <div className="ProfileDetailsPostsCountNumber">{ProfileData[0].postsCount}</div>
            </div>
            <div className='ProfileDetailsFollowersCount'>
                <div className="ProfileDetailsFollowersCountHeader">Followers</div>
                <div className="ProfileDetailsFollowersCountNumber">{ProfileData[0].followersCount}</div>
            </div>
            </div>
            <div className='ProfileControlButtons'>
                <button id="follow">Follow</button>
                <button id= "messageBtn"><div className="ProfileExtraDetailsControlsContainer">
                  <img src={require("./message icon.png")} alt="message icon"/>
                    <div>Message</div>  
                </div></button>  
            </div>
        </div>
        <div className="ProfileExtraDetails">
            <div className='ProfileExtraInfo'>
                <div className="ProfileDistance"><button id="Location"><img src={require("./location icon.png")} alt="location icon"/>{ProfileData[0].location}</button></div>
                <div className="ProfileAboutHeader">
                    <div className='ProfileAboutHeading'>About Me</div>
                    <div className='ProfileAbout'>{ProfileData[0].about.substring(0,150)} <button><b>{"Read More..."}</b></button></div>
                </div>
            </div>
        </div>
        <div className="ImageGrid">
            <div className='ImageGridControlsBar'>
                <button id="postsImageBtn" onClick={()=> setImageGridView("posts")}>Posts</button>
                <button id="rewardsImagesBtn" onClick={()=> setImageGridView("rewards")}>Rewards</button>
            </div>
            <div className='ImageGridImages'>
                {imageGridView==="posts" ? ProfileImages.map((image)=>{
                return (<img id="ProfileImage" key={image.key} src={require("./" + image.src)} alt={image.alt}/>)
                })
                :
                (rewardsImages.map((image)=>{
                    return (<img id="rewardImage" key={image.key} src={require("./" + image.src)} alt={image.alt} height="220px"/>)
                    }))
                }
                
            </div>
        </div>
        <img id="ProfilePhoto" src={require("./Ellipse 72.png")} alt=" profile" />
    </div>
  )
}

export default ProfilePageHeader