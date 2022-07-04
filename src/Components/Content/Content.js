import React from "react";
import "./Content.css";

function Content() {
  return (
    <>
      <div className="mainContent">
        <div className="content-area">
          <div className='content-area-header'>
            <div className="content-area-header-content">
                <p id="opening-header">Looking to <u id="underline">shop</u><br /> something?</p>
                <p id='opening-caption'>You can find sellers in your <br/><b>neighbourhood</b> with ThirdWeel</p>
                <p id="opening-hashtag">#VocalForLocal</p>
            </div>
            <div className="content-area-header-image">
                <img id="introduction-image" src={require("./ecommerce first gif.gif")} alt="ecommerce animation" height="500px"></img>
            </div>
          </div>
        </div>
        <div className="content-area-middle">
          <div className="content-area-middle-content">
            <h1 id="content-area-middle-content-header">What is ThirdWeel?</h1>
            <section id="content-area-middle-content-text">ThirdWeel leverages the strength of the local retail shop <br />
            network to its best potential, benefiting both customers and <br />
            local retailers. Packed with new innovative features to connect <br />
            users and the retail shopkeepers on a deeper level to provide a<br />
            personalized e-commerce experience</section>
          </div>
          <div className="content-area-middle-animation">
            <img src={require("./Green shopping lady swoosh animation.gif")} alt="shopping cart animation" height="400px"></img>
          </div>
        </div>
        <div className="services">
          <div>
            <img id="store" src={require("./neighbourhood local store.png")} alt="services" height="320px"></img>
            <section id="services-image-caption-one">Local Neighbourhood store</section>
          </div>
          <img id="left_point" src={require("./arrows.png")} alt="services" height="25px"></img>
          <img id="services_image" src={require("./thirdweel services.png")} alt="services" height="320px"></img>
          <img id="right_point" src={require("./arrows.png")} alt="services" height="25px"></img>
          <div>
            <img id="shopping_lady" src={require("./lady_shopping.png")} alt="services" height="220px"></img>
            <section id="services-image-caption-two">Customer</section>
          </div>
        </div>
        </div>
    </>
  );
}

export default Content;
