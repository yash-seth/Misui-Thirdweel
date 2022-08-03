import React from 'react'
import "./StoreProfilePageHeader.css"
import {storeProfileData, storeProfileImages, storeStoryData} from "../../../../Data"
import {Link} from "react-router-dom"
import { useState, useEffect } from "react";
import {
    ProfileData,
    ProfileImages,
    rewardsImages,
    profileStoryData,
    highlightStoryData,
  } from "../../../../Data";

function StoreProfilePageHeader() {
    const [imageGridView, setImageGridView] = useState("posts");
    const [postView, setPostView] = useState();
    const [newPostPopup, setNewPostPopup] = useState(false);
    const [createPostPopup, setCreatePostPopup] = useState(false);
    const [popup, setPopup] = useState(false);
    const [newHighlightPopup, setnewHighlightPopup] = useState(false);
  
    const toggleCurrentPostView = (id) => {
      setPostView(postView === id ? undefined : id);
    };
    useEffect(() => {
      setImageGridView("posts");
    }, []);
    const toggleNewPostView = () => {
      if (newPostPopup) {
        setPopup(true);
        setNewPostPopup(false);
        setnewHighlightPopup(false);
      } else {
        setPopup(false);
        setNewPostPopup(true);
      }
    };
  
    const toggleCreatePostView = () => {
      if (createPostPopup) {
        document.getElementsByClassName("createPostContainer")[0].style.display =
          "none";
        setNewPostPopup(false);
        setCreatePostPopup(true);
      } else {
        document.getElementsByClassName("createPostContainer")[0].style.display =
          "block";
        setNewPostPopup(false);
        setCreatePostPopup(false);
      }
    };
  
    const navigateCreatePost = () => {
      document.getElementsByClassName("createPostContainer")[0].style.display =
        "none";
    };
  return (
    <div className="StoreProfilePageHeaderMain">
        <div className="StoreProfilePageHeaderMainTopContainer"><span></span></div>
        <div className="StoreProfileDetails">
            <div className="StoreProfileDetailsMain">
                <div id="storeProfileName">{storeProfileData[0].name}</div>
                <div className="StoreProfileDetailsMainExtra">
                    <div id="storeProfileDistance">{storeProfileData[0].distance}</div>
                    <img id="storeProfileRating" src={require("./"+storeProfileData[0].rating)} alt="store rating" />
                </div>
            </div>
            <div className="storeProfileNumbers">
            <div className='StoreProfileDetailsPostsCount'>
                <div className="StoreProfileDetailsPostsCountHeader">Posts</div>
                <div className="StoreProfileDetailsPostsCountNumber">{storeProfileData[0].postsCount}</div>
            </div>
            <div className='StoreProfileDetailsFollowersCount'>
                <div className="StoreProfileDetailsFollowersCountHeader">Followers</div>
                <div className="StoreProfileDetailsFollowersCountNumber">{storeProfileData[0].followersCount}</div>
            </div>
            </div>
            <div className='storeProfileControlButtons'>
                <button id="follow">Follow</button>
                <Link to="/storeItems" style={{textDecoration:"none"}}><button id="visitStorePage">Visit Store</button></Link>
            </div>
        </div>
        <div className="StoreProfileExtraDetails">
            <div className='storeProfileExtraInfo'>
                <div className="storeProfileDistance"><button id="storeLocation"><img src={require("./location icon.png")} alt="location icon"/>{storeProfileData[0].location}</button></div>
                <div className="storeProfileAboutHeader">
                    <div className='storeProfileAboutHeading'>About Store</div>
                    <div className='storeProfileAbout'>{storeProfileData[0].about.substring(0,150)} <button><b>{"Read More..."}</b></button></div>
                </div>
            </div>
            <div className='StoreProfileExtraDetailsControls'>
                <div className="StoreProfileExtraDetailsControlsContainer">
                    <button id= "chatWithSeller"><img src={require("./message icon.png")} alt="message icon"/>
                    <div>Chat with Seller</div></button>    
                </div>
                <div className='storeProfileContacts'><img src={require("./phone.png")} alt="phone icon"/><div>{storeProfileData[0].contactDetails}</div></div>
            </div>
        </div>
        <div className='ProfileExtraDetailsStories'>
                {storeStoryData.map((story)=>{
                    return(
                        <>{story.id===0?
                        (<div className='profileStoryContainer'>
                            <button onClick={() => {setnewHighlightPopup(true);setPopup(true);}}><img key={story.id} id="profileStory" src={require("./" + story.src)} alt={story.alt} height="80px"/></button>
                            <div id="profileStoryCaption">{story.caption}</div>
                        </div>)
                        :
                        (
                            <div className='profileStoryContainer'>
                                <img key={story.id} id="profileStory" src={require("./" + story.src)} alt={story.alt} height="80px"/>
                                <div id="profileStoryCaption">{story.caption}</div>
                            </div>
                        )
                    }
                    </>
                    )
                })}
            </div>
        <div className='storeProfileImages'>
            {storeProfileImages.map((image)=>{
            return (<img id="storeProfileImage" key={image.key} src={require("./" + image.src)} alt={image.alt} height="200px"/>)
            })}
        </div>
        <img id="storeProfilePhoto" src={require("./Ellipse 72.png")} alt="store profile" />
        {popup && (
        <img
          id="PopupCrossButton"
          src={require("./crossExit.png")}
          alt="cross button"
          onClick={() => setPopup(false)}
        />
      )}
        {popup && <div id="popupNewPostOverlay"></div>}
        {popup && newHighlightPopup && (
        <div className="createHighlightContainer">
          <div className="createHighLightHeader">
            <button onClick={() => {setPopup(false);setnewHighlightPopup(false);}}>
              <img
                id="createPostLeftArrow"
                src={require("./leftArrow.png")}
                alt="left arrow"
                height="15px"
              />
            </button>
            <div id="createHighLightHeaderText">Choose Highlight</div>
          </div>
          <div className="hightlightGrid">
            {highlightStoryData.map((highlight) => {
              return (
                <>
                  <div id="hightlightFrame">
                    <div id="hightlightDate">{highlight.date}</div>
                    <button>
                      <img
                        id="highlightImg"
                        key={highlight.id}
                        src={require("./" + highlight.src)}
                        alt={highlight.alt}
                      />
                    </button>
                    <img
                      id="selectHightlightOption"
                      src={require("./selectHighlight.png")}
                      alt="select highlight option"
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default StoreProfilePageHeader