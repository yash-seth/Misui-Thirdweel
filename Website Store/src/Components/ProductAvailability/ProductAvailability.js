import React from "react";
import "./ProductAvailability.css";
import Header from "../Header/Header";
import PaginationFooter from "../StoreSearch/Components/PaginationFooter/PaginationFooter";
import ProductAvailabilitySearch from "./Components/ProductAvailabilitySearch/ProductAvailabilitySearch";
import { productAvailabilityData } from "../../Data";
import { Link } from "react-router-dom";

function ProductAvailability({ address, setAddress }) {
  return (
    <>
      <Header address={address} setAddress={setAddress} />
      <div className="ProductAvailabilityMainContainer">
        <div className="ProductAvailabilityMainContainerHeader">
          <div className="ProductAvailabilityMainContainerHeaderText">
            <div id="ProductAvailabilityMainContainerHeaderText">
              Availability History
              <img
                id="headerRightArrow"
                src={require("./rightArrow.png")}
                alt="right arrow icon"
                height="20px"
              />
            </div>
            <div id="ProductAvailabilityMainContainerHeaderSubText">
              My Profile / Product Availability History
            </div>
          </div>
          <div className="ProductAvailabilityMainContainerSubHeader">
            <div id="ProductAvailabilityMainContainerSubHeaderText">
              Products
            </div>
            <div id="ProductAvailabilityMainContainerSubHeaderTextSubtext">
              Showing results for last 30 days
            </div>
          </div>
          <ProductAvailabilitySearch />
        </div>
        <div className="ProductAvailabilityMainContent">
          <div className="ProductAvailabilityFilters">
            <div id="ProductAvailabilityFiltersHeader">Filters</div>
            <hr id="ProductAvailabilityHR" />
            <div id="ProductAvailabilityFiltersOrderTime">Order Time</div>
            <input
              type="checkbox"
              id="Last30Days"
              name="Last30Days"
              value="Last30Days"
            />
            <label for="Last30Days">Last 30 Days</label>
            <br></br>
            <input type="checkbox" id="2022" name="2022" value="2022" />
            <label for="2022">2022</label>
            <br></br>
            <input type="checkbox" id="2021" name="2021" value="2021" />
            <label for="2021">2021</label>
            <br></br>
            <input type="checkbox" id="2020" name="2020" value="2020" />
            <label for="2020">2020</label>
            <br></br>
            <input type="checkbox" id="2022" name="2022" value="2022" />
            <label for="2022">2022</label>
            <br></br>
            <input type="checkbox" id="2021" name="2021" value="2021" />
            <label for="2021">2021</label>
            <br></br>
            <input type="checkbox" id="2020" name="2020" value="2020" />
            <label for="2020">2020</label>
            <br></br>
          </div>
          <div className="ProductAvailabilityItems">
            <button id="deleteProdAvailabilityItem">
              <img src={require("./Delete button icon.png")} alt="delete" />
              Delete
            </button>
            {productAvailabilityData.map((item) => {
              return (
                <>
                  <div className="ProductAvailabilityItemsContainer">
                    <div className="selectProdAvailabilityItem">
                      <input type="checkbox" id="selectProdAvailabilityItem" />
                    </div>
                    <div className="ProductAvailabilityItem" key={item.id}>
                      <div className="ProductAvailabilityItemDetails">
                        <img
                          id="ProductAvailabilityItemImage"
                          src={require("./" + item.src)}
                          alt="product"
                        />
                        <div className="ProductAvailabilityItemDetailsInfo">
                          <b>Product Name:</b>
                          <div id="prodAvailabilityName">{item.name}</div>
                        </div>
                      </div>
                      <div className="ProductAvailabilityTimeSearched">
                        <b>Time Searched:</b>
                        <div id="prodAvailabilityDate">
                          {item.lastSearchedDate}
                        </div>
                        <div id="prodAvailabilityTime">
                          {item.lastSearchedTime}
                        </div>
                      </div>
                      <div className="ProductAvailabilityStoresFound">
                        <b>Number of Stores Found:</b>
                        <div id="prodAvailabilityDate">
                          {item.numOfStoresFound}
                        </div>
                        <Link to="/search" style={{ textDecoration: "none" }}>
                          <button id="prodAvailabilityViewStoresBtn">
                            View Stores
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <PaginationFooter />
      </div>
    </>
  );
}

export default ProductAvailability;
