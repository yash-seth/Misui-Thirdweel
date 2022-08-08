import React from "react";
import Header from "../Header/Header";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "./TeamBuyItemSearch.css";
import { sortByData, teamBuyItems } from "../../Data";
import PaginationFooter from "../StoreSearch/Components/PaginationFooter/PaginationFooter";
import { Link } from "react-router-dom";

function TeamBuyItemSearch({ address, setAddress, setProfileView }) {
  return (
    <>
      <Header address={address} setAddress={setAddress} />
      <div className="mobileView">
        <HeaderMenu setProfileView={setProfileView} />
      </div>
      <div className="StoreSearchHeaderContainer">
        <div id="itemInfo">Items (50+)</div>
        <div id="storeInfo">
          <b>Stores (36+)</b>
        </div>
        <div id="StoreSearchSort">
          Sort By: Relevance
          <button style={{ textDecoration: "none" }}>
            <img
              id="dropdown"
              src={require("./dropdown.png")}
              alt="dropdown icon"
              height="20px"
            />
          </button>
          <div className="sortByMenuContainer">
            {sortByData.map((sortBy) => {
              return (
                <>
                  <button id="sortByButton" style={{ textDecoration: "none" }}>
                    <div id="sortByName">{sortBy.name}</div>
                  </button>
                  <br />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <hr id="hr" />
      <div className="teamBuyItemSearchContainer">
        <div className="groupBuyProductGrid">
          {teamBuyItems.map((product) => {
            return (
              <div className="groupBuySearchProductFrame">
                <Link to="/teamBuyProductDescription"><img
                  id="teamBuyItemSearchImg"
                  src={require("./" + product.src)}
                  alt={product.alt}
                />
                </Link>
                <div id="groupBuySearchProductName">{product.name}</div>
                <div id="groupBuySearchProductWeight">{product.weight}</div>
                <div className="groupBuySearchProductPriceConatainer">
                  <div id="groupBuySearchProductPrice">{product.price}</div>
                  <Link to="/teamBuyProductDescription">
                    <button id="groupBuyItemSearchViewStoresBtn">View Stores</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <PaginationFooter />
    </>
  );
}

export default TeamBuyItemSearch;
