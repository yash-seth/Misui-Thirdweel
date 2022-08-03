import React, {useState} from "react";
import "./TeamBuyDescription.css";
import {
  localStoresData,
  imageGalleryData,
  TeamBuyProductData,
} from "../../../../Data";
import { Link } from "react-router-dom";

function Description() {
  const [TeamBuyBtnDropdownState, setTeamBuyBtnDropdown] = useState(false)
  return (
    <>
      <div className="DescriptionContainer">
        <div className="ProductDescription">
          <section id="productHeader">Product Description</section>
          <section id="categories">
            Home/Personal Care/Unisex Personal Care/Face Wash And
            Cleanser/Himalaya Face Wash and Cleanser{">"}More by Himalaya
          </section>
          <div className="product">
            <div className="imageGallery">
              {imageGalleryData.map((image) => {
                return (
                  <>
                    <div className="imageGalleryImageFrame">
                      <img
                        id="imageGalleryImage"
                        key={image.id}
                        src={require("./" + image.src)}
                        alt={image.alt}
                      />
                    </div>
                  </>
                );
              })}
            </div>
            <div className="TeamBuyProductDescControls">
              <img
                id="product_big_image"
                src={require("./product_big_photo.png")}
                alt="product big"
              />
              <div className="imageGalleryMobile">
                {imageGalleryData.map((image) => {
                  return (
                    <>
                      <div className="imageGalleryImageFrame">
                        <img
                          id="imageGalleryImage"
                          key={image.id}
                          src={require("./" + image.src)}
                          alt={image.alt}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
              <div></div>
            </div>
            <div className="productDescriptionDetails">
              <div className="productDescriptionDetailsHeader">
                <div className="productDescriptionDetailsHeaderDetails">
                  <div className="productDescriptionDetailsHeading">
                    Masala Lays
                  </div>
                  <div className="productDescriptionDetailsSubHeading">
                    Masala Magic - 115gm/130gm (Weight May Vary)
                  </div>
                </div>
                <button style={{ textDecoration: "none" }}>
                  <img
                    id="wishlist"
                    src={require("./wishlist_button.png")}
                    alt="wishlist"
                  />
                </button>
              </div>
              <br />
              <div className="productDescriptionDetailsDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                adipisci, rem tempore perferendis vero inventore blanditiis
                dolore modi odit minus distinctio quos dolor consequuntur
                repudiandae eaque porro amet eligendi esse.
                <div className="teamBuy">
                  <div>
                    <label id="teamBuyPrice">$40</label>
                    <label id="strikethrough">$75</label>
                  </div>
                  <div id="teamBuyDiscount">45% off</div>
                  <div className="teamBuyBtnContainer">
                    <button id="teamBuyBtn" onClick={()=>setTeamBuyBtnDropdown(!TeamBuyBtnDropdownState)}>Team Buy <img src={require("./dropdown.png")} alt="dropdown" /></button>
                    {TeamBuyBtnDropdownState && <div className="teamBuyBtnOptions">
                      <button id="teamBuyBtnOption" onClick={()=>setTeamBuyBtnDropdown(!TeamBuyBtnDropdownState)}>Join with Friends</button>
                      <button id="teamBuyBtnOption" onClick={()=>setTeamBuyBtnDropdown(!TeamBuyBtnDropdownState)}>Auto Join</button>
                    </div>}
                  </div>
                </div>
              </div>
              <div className="TeamBuyContainer">
                <div className="TeamBuyContainerHeaderContainer">
                  <div>
                    <div id="TeamBuyContainerHeader">Team Buy with others</div>
                    <div id="TeamBuyContainerHeaderText">94 others are making orders</div>
                  </div>
                  <button id="viewMoreBtn">View More <img src={require("./rightArrow.png")} alt="right arrow" /></button>
                </div>
                <div className="TeamBuyContainerContent">
                  {TeamBuyProductData.map((Team) => {
                    return Team.id !== Object.keys(Team).length - 1 ? (
                      <>
                        <div className="TeamBuyDetails">
                          <div className="TeamBuyDetailsInfo">
                            <img
                              id="TeamBuyProfileImage"
                              key={Team.id}
                              src={require("./" + Team.teamLeaderSrc)}
                              alt="team leader icon"
                            />
                            {Team.teamLeaderName}
                          </div>
                          <div className="TeamBuyControls">
                            <Link to="/teamBuyTeamAndItem" style={{textDecoration: "none"}}><button className="teamJoin">Team up</button></Link>
                            <div className="TeamBuyJoinDetails">
                              <div className="TeamBuyJoinIcons">
                                {Team.numOfMembers.map((teamMember) => {
                                  return teamMember === 1 ? (
                                    <img
                                      id="TeamIconActive"
                                      key={Team.id}
                                      src={require("./Vector-2.png")}
                                      alt="team icon active"
                                    />
                                  ) : (
                                    <img
                                      id="TeamIconInactive"
                                      key={Team.id}
                                      src={require("./Vector-3.png")}
                                      alt="team icon inactive"
                                      height="16.5px"
                                    />
                                  );
                                })}
                              </div>
                              <div id="TeamBuyTime">Time {Team.time}</div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="TeamBuyDetails">
                          <div className="TeamBuyDetailsInfo">
                            <img
                              id="TeamBuyProfileImage"
                              key={Team.id}
                              src={require("./" + Team.teamLeaderSrc)}
                              alt="team leader icon"
                            />
                            {Team.teamLeaderName}
                          </div>
                          <div className="TeamBuyControls">
                            <button className="teamJoin">Join</button>
                            <div className="TeamBuyJoinDetails">
                              <div className="TeamBuyJoinIcons">
                                {Team.numOfMembers.map((teamMember) => {
                                  return teamMember === 1 ? (
                                    <img
                                      id="TeamIconActive"
                                      key={Team.id}
                                      src={require("./Vector-2.png")}
                                      alt="team icon active"
                                    />
                                  ) : (
                                    <img
                                      id="TeamIconInactive"
                                      key={Team.id}
                                      src={require("./Vector-3.png")}
                                      alt="team icon inactive"
                                      height="16.5px"
                                    />
                                  );
                                })}
                              </div>
                              <div id="TeamBuyTime">{Team.time}</div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="localStoresContainer">
        <div className="localStoresRecommendations">
          <div className="localStoresRecommendationsHeader">
            <section id="localStoresRecommendationsHeading">
              Local Stores
            </section>
            <img src={require("./right_arrow.png")} alt="right arrow" />
          </div>
          <div className="localStores">
            {localStoresData.map((localStore) => {
              return (
                <>
                  <div className="localStore">
                    <Link
                      to="/storeProfile"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img
                        id="localStoreImage"
                        key={localStore.id}
                        src={require("./" + localStore.src)}
                        alt={localStore.alt}
                        height="100px"
                      />
                    </Link>
                    <div className="localStoreDetails">
                      <section id="localStoreHeader">
                        <Link
                          to="/storeProfile"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {localStore.name}
                        </Link>
                        <img src={require("./instock.png")} alt="instock" />
                        <br />
                        <section id="localStoreDistance">
                          {localStore.distance}
                        </section>
                      </section>
                      <section id="localStoreAddress">
                        {localStore.address_line_one}
                        <br />
                        {localStore.address_line_two}
                        <br />
                        {localStore.address_line_three}
                        <br />
                        <div id="contactContainer">
                          <img
                            id="phone_icon"
                            src={require("./phone.png")}
                            alt="phone icon"
                            height="10px"
                          />
                          {localStore.contact}
                        </div>
                        <div className="localStoreFooter">
                          <img
                            src={require("./" + localStore.rating)}
                            alt="rating"
                          />
                          <button style={{ textDecoration: "none" }}>
                            <img
                              src={require("./shop_button.png")}
                              alt="shop button"
                            />
                          </button>
                        </div>
                      </section>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="checkAvailContainer">
        <button style={{ textDecoration: "none" }}>
          <img
            id="checkAvailability"
            src={require("./check availability button.png")}
            alt="check availability"
            height="40px"
          />
        </button>
        <div className="last_checked">Last checked 11:34am</div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Description;
