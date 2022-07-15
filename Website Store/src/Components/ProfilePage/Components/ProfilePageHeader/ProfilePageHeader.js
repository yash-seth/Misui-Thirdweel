import React from 'react'
import "./ProfilePageHeader.css"
import {ProfileData, ProfileImages, rewardsImages, profileStoryData} from "../../../../Data"
import {useState, useEffect} from "react"

function ProfilePageHeader() {
    const [imageGridView, setImageGridView] = useState("posts")
    const [postView, setPostView] = useState();
    const [newPostPopup, setNewPostPopup] = useState(false);
    const [createPostPopup, setCreatePostPopup] = useState(false);
    const [popup, setPopup] = useState(false);
    const toggleCurrentPostView = (id) => {
        setPostView(postView === id ? undefined : id);
    };
    useEffect(() => {
        setImageGridView("posts");
    }, [])
    console.log(popup)
    const toggleNewPostView =()=>{
        console.log("I was here")
        if(newPostPopup){
            setPopup(true);
            setNewPostPopup(false);
        }else{
            setPopup(false);
            setNewPostPopup(true);
        }
    }

    const toggleCreatePostView = () =>{
        if(createPostPopup){
            document.getElementsByClassName("createPostContainer")[0].style.display = "none";
            setNewPostPopup(false);
            setCreatePostPopup(true);
        }else{
            document.getElementsByClassName("createPostContainer")[0].style.display = "block";
            setNewPostPopup(false);
            setCreatePostPopup(false);
        }
    }

    const navigateCreatePost = () =>{
        document.getElementsByClassName("createPostContainer")[0].style.display = "none";
    }

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
            <div className='ProfileExtraDetailsStories'>
                {profileStoryData.map((story)=>{
                    return(
                        <>{story.id===0?
                        (<div className='profileStoryContainer'>
                            <button><img key={story.id} id="profileStory" src={require("./" + story.src)} alt={story.alt} height="80px"/></button>
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
        </div>
        <div className="ImageGrid">
            <div className='ImageGridControlsBar'>
                <button id="postsImageBtn" onClick={()=> setImageGridView("posts")}>Posts</button>
                <button id="rewardsImagesBtn" onClick={()=> setImageGridView("rewards")}>Rewards</button>
            </div>
            <div className='ImageGridImages'>
                {imageGridView==="posts" ? ProfileImages.map((image)=>{
                return (<>
                            {image.id===0? (<img id="ProfileImage" key={image.key} src={require("./" + image.src)} alt={image.alt} onClick={()=>{toggleNewPostView();setPopup(true);}} height="200px"/>):(<img id="ProfileImage" key={image.key} src={require("./" + image.src)} alt={image.alt} onClick={() => toggleCurrentPostView(image.id)} height="200px"/>)}
                            {postView===image.id?
                            (<>
                            <div className='imagePopup'>
                                <img id="imagePopupImg" src={require("./" + image.src)} alt={image.alt} height="500px"/>
                                <div className='imagePopupContent'>
                                    <div className='imagePopupContentHeader'>
                                        <img src={require("./Ellipse 72.png")} alt="profileImagePopup" height="40px"/>
                                        <div id="profilePopupName">{ProfileData[0].name}</div>
                                    </div>
                                    <div className='imagePopupContentCaption'>{image.caption}</div>
                                    <div className='imagePopupContentFooter'>
                                        <div id="profileImagePopupLikesContainer">
                                            <img src={require("./likes.png")} alt="likes icon" height="12px"/>
                                            {image.likes} Likes
                                        </div>
                                        <div id="profileImagePopupLikesContainer">
                                            <img src={require("./comments.png")} alt="likes icon" height="12px"/>
                                            {image.comments} Comments
                                        </div>
                                    </div>
                                    <hr id="popupHR"/>
                                    <div className='profileImagePopupComments'>
                                        {image.commentsList.map((comment)=>{
                                            return(
                                                <div className='profileImagePopupComment'>
                                                    <div className='profileImagePopupCommentUserinfo'>
                                                        <img src={require("./" + comment.profileImg)} alt="comment pfp" height="25px"/>
                                                        <div id="profileImagePopupCommentDetails">
                                                            <div id="profileImagePopupCommentName">{comment.name}</div>
                                                            <div id="profileImagePopupCommentTime">{comment.timePosted}</div>
                                                        </div>
                                                    </div>
                                                    <div id="profileImagePopupCommentContent">{comment.comment}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <hr id="popupHR"/>
                                    <div className='profileImagePopupAddComment'>
                                        <input id="profileImagePopupAddComment" type="text" placeholder='Add a comment...'></input>
                                        <button id="profileImagePopupShareComment">Share</button>
                                    </div>
                                </div>
                            </div>
                            <img id="profileImagePopupCrossButton" src={require("./crossExit.png")} alt="cross button" onClick={() => toggleCurrentPostView(image.id)}/>
                            <div id='popupPostOverlay'></div>
                            </>
                            )
                            :
                            (<span></span>)
                            }
                        </>
                    )
                })
                :
                (rewardsImages.map((image)=>{
                    return (
                    <>
                    <img id="rewardImage" key={image.key} src={require("./" + image.src)} alt={image.alt} height="220px" onClick={() => toggleCurrentPostView(image.id)}/>
                    {postView===image.id?
                        (<>
                        <div className='rewardImagePopup' key={image.id}>
                            <div className='rewardImagePopupHeaderBar'>
                                <img id="leftArrowPopup" src={require("./leftArrow.png")} alt="left arrow" height="15px"/>
                                <div id="rewardImagePopupHeaderBarText">Offer</div>
                            </div>
                            <div className="rewardImagePopupContent">
                                <img id="rewardImagePopupImg" src={require("./" + image.src)} alt={image.alt} height="400px"/>
                                <div className='rewardImagePopupContentMain'>
                                    <div id="rewardImagePopupContentMainName">{image.storeName}:</div>
                                    <div id="rewardImagePopupContentMainAddr">{image.storeAddr}</div>
                                    <div id="rewardImagePopupContentMainExpiry">
                                        <img src={require("./redAlert.png")} alt="red info icon"/>
                                        <div id="rewardImagePopupContentMainExpiryDateContainer">
                                            <div id="rewardImagePopupContentMainExpiryDateContainerMessage">Offer Expiry Date</div>
                                            <div id="rewardImagePopupContentMainExpiryDate">{image.offerExpiry}</div>
                                        </div>
                                    </div>
                                    <div className='rewardImagePopupContentMainBody'>Keep shopping from the same shop to keep progressing and keep getting more exciting offers with your shopping.</div>
                                    <button id="giftReward">Gift this to your friend</button>
                                    <div><button id="giftOffer">Apply this offer</button></div>
                                </div>
                            </div>
                        </div>
                        <img id="profileImagePopupCrossButton" src={require("./crossExit.png")} alt="cross button" onClick={() => toggleCurrentPostView(image.id)}/>
                        <div id='popupPostOverlay'></div>
                        </>
                        )
                        :
                        (<span></span>)
                        }
                    </>
                    )
                    }))
                }
                
            </div>
        </div>
        <img id="ProfilePhoto" src={require("./Ellipse 72.png")} alt=" profile" />
        {popup && <div className='newPostContainer'>
            <div className='newPostContainerMain'>
                <div id='newPostContainerHeader'>Create Post</div>
                <img src={require("./newPostGraphic.png")} alt="new post graphic" height="200px"/>
                <div id="newPostContainerContent">Drag photos or videos for your post here</div>
                <button id="selectFromComputer" onClick={()=>toggleCreatePostView()}>Select from computer</button>
            </div>
        </div>}
        {popup && <div className='createPostContainer'>
            <div className='createPostContainerMain'>
                <div className='createPostContainerHeader'>
                    <button onClick={()=>navigateCreatePost()}><img id="createPostLeftArrow" src={require("./leftArrow.png")} alt="left arrow" height="15px"/></button>
                    <div id="createPostContainerHeaderText">Create Post</div>
                    <button id="postBtnCreatePost" onClick={()=>setPopup(false)}>Post</button>
                </div>
                <div className='createPostContainerMainContent'>
                    <img id="createPostSelectedPost" src={require('./post 1.png')} alt="post" height="500px"/>
                    <div className='createPostContainerMainContentDetails'>
                        <div className='createPostContainerMainContentUserDetails'>
                            <img src={require("./Ellipse 72.png")} alt="profileImagePopup" height="40px"/>
                            <div id="profilePopupName">{ProfileData[0].name}</div>
                        </div>
                        <textarea id="createPostCaption" placeholder='Write a caption'></textarea>
                    </div>
                </div>
            </div>
        </div>}
        {popup && <div id='popupNewPostOverlay'></div>}
        {popup && <img id="PopupCrossButton" src={require("./crossExit.png")} alt="cross button" onClick={()=>setPopup(false)}/> }
    </div>
  )
}

export default ProfilePageHeader