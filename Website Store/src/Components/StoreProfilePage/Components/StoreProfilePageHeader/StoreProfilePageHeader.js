import React from "react";
import "./StoreProfilePageHeader.css";
import {
  storeProfileData,
  storeProfileImages,
  storeStoryData,
} from "../../../../Data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ProfileData,
  ProfileImages,
  rewardsImages,
  profileStoryData,
  highlightStoryData,
} from "../../../../Data";

function StoreProfilePageHeader({ profileView }) {
//   const [imageGridView, setImageGridView] = useState("posts");
  const [postView, setPostView] = useState();
  const [newPostPopup, setNewPostPopup] = useState(false);
  const [createPostPopup, setCreatePostPopup] = useState(false);
  const [popup, setPopup] = useState(false);
  const [newHighlightPopup, setnewHighlightPopup] = useState(false);

  const toggleCurrentPostView = (id) => {
    setPostView(postView === id ? undefined : id);
  };
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
      <div className="StoreProfilePageHeaderMainTopContainer">
        <span></span>
      </div>
      <div className="StoreProfileDetails">
        <div className="StoreProfileDetailsMain">
          <div id="storeProfileName">{storeProfileData[0].name}</div>
          <div className="StoreProfileDetailsMainExtra">
            <div id="storeProfileDistance">{storeProfileData[0].distance}</div>
            <img
              id="storeProfileRating"
              src={require("./" + storeProfileData[0].rating)}
              alt="store rating"
            />
          </div>
        </div>
        <div className="storeProfileNumbers">
          <div className="StoreProfileDetailsPostsCount">
            <div className="StoreProfileDetailsPostsCountHeader">Posts</div>
            <div className="StoreProfileDetailsPostsCountNumber">
              {storeProfileData[0].postsCount}
            </div>
          </div>
          <div className="StoreProfileDetailsFollowersCount">
            <div className="StoreProfileDetailsFollowersCountHeader">
              Followers
            </div>
            <div className="StoreProfileDetailsFollowersCountNumber">
              {storeProfileData[0].followersCount}
            </div>
          </div>
        </div>
        <div className="storeProfileControlButtons">
          <button id="follow">Follow</button>
          <Link to="/storeItems" style={{ textDecoration: "none" }}>
            <button id="visitStorePage">Visit Store</button>
          </Link>
        </div>
      </div>
      <div className="StoreProfileExtraDetails">
        <div className="storeProfileExtraInfo">
          <div className="storeProfileDistance">
            <button id="storeLocation">
              <img src={require("./location icon.png")} alt="location icon" />
              {storeProfileData[0].location}
            </button>
          </div>
          <div className="storeProfileAboutHeader">
            <div className="storeProfileAboutHeading">About Store</div>
            <div className="storeProfileAbout">
              {storeProfileData[0].about.substring(0, 150)}{" "}
              <button>
                <b>{"Read More..."}</b>
              </button>
            </div>
          </div>
        </div>
        <div className="StoreProfileExtraDetailsControls">
          <div className="StoreProfileExtraDetailsControlsContainer">
            <button id="chatWithSeller">
              <img src={require("./message icon.png")} alt="message icon" />
              <div>Chat with Seller</div>
            </button>
          </div>
          <div className="storeProfileContacts">
            <img src={require("./phone.png")} alt="phone icon" />
            <div>{storeProfileData[0].contactDetails}</div>
          </div>
        </div>
      </div>
      <div className="ProfileExtraDetailsStories">
        {storeStoryData.map((story) => {
          return (
            <>
              {story.id === 0 ? (
                <div className="profileStoryContainer">
                  <button
                    onClick={() => {
                      setnewHighlightPopup(true);
                      setPopup(true);
                    }}
                  >
                    <img
                      key={story.id}
                      id="profileStory"
                      src={require("./" + story.src)}
                      alt={story.alt}
                      height="80px"
                    />
                  </button>
                  <div id="profileStoryCaption">{story.caption}</div>
                </div>
              ) : (
                <div className="profileStoryContainer">
                  <img
                    key={story.id}
                    id="profileStory"
                    src={require("./" + story.src)}
                    alt={story.alt}
                    height="80px"
                  />
                  <div id="profileStoryCaption">{story.caption}</div>
                </div>
              )}
            </>
          );
        })}
      </div>
      <div className="ImageGrid">
        <div className="ImageGridImages">
          {ProfileImages.map((image) => {
                return (
                  <>
                    {profileView && image.id === 0 ? (
                      <img
                        id="ProfileImage"
                        key={image.key}
                        src={require("./" + image.src)}
                        alt={image.alt}
                        onClick={() => {
                          toggleNewPostView();
                          setPopup(true);
                        }}
                        height="200px"
                      />
                    ) : (
                      <img
                        id="ProfileImage"
                        key={image.key}
                        src={require("./" + image.src)}
                        alt={image.alt}
                        onClick={() => toggleCurrentPostView(image.id)}
                        height="200px"
                      />
                    )}
                    {postView === image.id ? (
                      <>
                        <div className="imagePopup">
                          <img
                            id="imagePopupImg"
                            src={require("./" + image.src)}
                            alt={image.alt}
                            height="500px"
                          />
                          <div className="imagePopupContent">
                            <div className="imagePopupContentHeader">
                              <img
                                src={require("./Ellipse 72.png")}
                                alt="profileImagePopup"
                                height="40px"
                              />
                              <div id="profilePopupName">
                                {ProfileData[0].name}
                              </div>
                            </div>
                            <div className="imagePopupContentCaption">
                              {image.caption}
                            </div>
                            <div className="imagePopupContentFooter">
                              <div id="profileImagePopupLikesContainer">
                                <img
                                  src={require("./likes.png")}
                                  alt="likes icon"
                                  height="12px"
                                />
                                {image.likes} Likes
                              </div>
                              <div id="profileImagePopupLikesContainer">
                                <img
                                  src={require("./comments.png")}
                                  alt="likes icon"
                                  height="12px"
                                />
                                {image.comments} Comments
                              </div>
                            </div>
                            <hr id="popupHR" />
                            <div className="profileImagePopupComments">
                              {image.commentsList.map((comment) => {
                                return (
                                  <div className="profileImagePopupComment">
                                    <div className="profileImagePopupCommentUserinfo">
                                      <img
                                        src={require("./" + comment.profileImg)}
                                        alt="comment pfp"
                                        height="25px"
                                      />
                                      <div id="profileImagePopupCommentDetails">
                                        <div id="profileImagePopupCommentName">
                                          {comment.name}
                                        </div>
                                        <div id="profileImagePopupCommentTime">
                                          {comment.timePosted}
                                        </div>
                                      </div>
                                    </div>
                                    <div id="profileImagePopupCommentContent">
                                      {comment.comment}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <hr id="popupHR" />
                            <div className="profileImagePopupAddComment">
                              <input
                                id="profileImagePopupAddComment"
                                type="text"
                                placeholder="Add a comment..."
                              ></input>
                              <button id="profileImagePopupShareComment">
                                Share
                              </button>
                            </div>
                          </div>
                        </div>
                        <img
                          id="profileImagePopupCrossButton"
                          src={require("./crossExit.png")}
                          alt="cross button"
                          onClick={() => toggleCurrentPostView(image.id)}
                        />
                        <div id="popupPostOverlay"></div>
                      </>
                    ) : (
                      <span></span>
                    )}
                  </>
                );
              })}
        </div>
      </div>
      <img
        id="storeProfilePhoto"
        src={require("./Ellipse 72.png")}
        alt="store profile"
      />
      {popup && (
        <div className="newPostContainer">
          <div className="newPostContainerMain">
            <div id="newPostContainerHeader">Create Post</div>
            <img
              src={require("./newPostGraphic.png")}
              alt="new post graphic"
              height="200px"
            />
            <div id="newPostContainerContent">
              Drag photos or videos for your post here
            </div>
            <button
              id="selectFromComputer"
              onClick={() => toggleCreatePostView()}
            >
              Select from computer
            </button>
            <div className="mobileCreatePostContainer">
              <div>OR</div>
              <button onClick={() => toggleCreatePostView()}>
                <div className="openCamera">
                  <img
                    src={require("./cameraBackground.png")}
                    alt="camera icon background"
                    id="openCameraBackground"
                  />
                  <img
                    src={require("./camera.png")}
                    alt="open camera"
                    id="openCamera"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      {popup && (
        <div className="createPostContainer">
          <div className="createPostContainerMain">
            <div className="createPostContainerHeader">
              <button onClick={() => navigateCreatePost()}>
                <img
                  id="createPostLeftArrow"
                  src={require("./leftArrow.png")}
                  alt="left arrow"
                  height="15px"
                />
              </button>
              <div id="createPostContainerHeaderText">Create Post</div>
              <button id="postBtnCreatePost" onClick={() => setPopup(false)}>
                Post
              </button>
            </div>
            <div className="createPostContainerMainContent">
              <img
                id="createPostSelectedPost"
                src={require("./post 1.png")}
                alt="post"
                height="500px"
              />
              <div className="createPostContainerMainContentDetails">
                <div className="createPostContainerMainContentUserDetails">
                  <img
                    src={require("./Ellipse 72.png")}
                    alt="profileImagePopup"
                    height="40px"
                  />
                  <div id="profilePopupName">{ProfileData[0].name}</div>
                </div>
                <textarea
                  id="createPostCaption"
                  placeholder="Write a caption"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      )}
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
            <button
              onClick={() => {
                setPopup(false);
                setnewHighlightPopup(false);
              }}
            >
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
  );
}

export default StoreProfilePageHeader;
