import React from "react";
import "./TeamBuyDescription.css";
import {
  localStoresData,
  imageGalleryData,
  TeamBuyProductData,
} from "../../../../Data";

function Description() {
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
              <div>
                <button style={{ textDecoration: "none" }}>
                  <img
                    id="check_availability"
                    src={require("./check availability button.png")}
                    alt="check availability"
                    height="40px"
                  />
                </button>
                <div className="last_checked">Last checked 11:34am</div>
              </div>
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
                <button className="teamBuy">
                  <label id="strikethrough">$75</label> $45 Team Buy
                </button>
              </div>
              <div className="TeamBuyContainer">
                <div>Team Buy</div>
                <div className="TeamBuyContainerContent">
                  {TeamBuyProductData.map((Team) => {
                    return (
                      <>
                        <div className="TeamBuyDetails">
                          <div className="TeamBuyDetailsInfo">
                            <img
                              id="TeamBuyProfileImage"
                              key={Team.id}
                              src={require("./" + Team.teamLeaderSrc)}
                              alt="team leader photo"
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
                        <hr />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <img
                      id="localStoreImage"
                      key={localStore.id}
                      src={require("./" + localStore.src)}
                      alt={localStore.alt}
                      height="100px"
                    />
                    <div className="localStoreDetails">
                      <section id="localStoreHeader">
                        {localStore.name}
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
      </div>
    </>
  );
}

export default Description;
