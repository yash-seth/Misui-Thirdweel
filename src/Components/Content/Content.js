import React from "react";
import "./Content.css";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import HouseSidingOutlinedIcon from "@mui/icons-material/HouseSidingOutlined";

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
            ThirdWeel leverages the strength of the local retail shop <br />
            network to its best potential, benefiting both customers and <br />
            local retailers. Packed with new innovative features to connect <br />
            users and the retail shopkeepers on a deeper level to provide a<br />
            personalized e-commerce experience
          </div>
          <div className="content-area-middle-animation">
            <img src={require("./Green shopping lady swoosh animation.gif")} alt="shopping cart animation" height="400px"></img>
          </div>
        </div>
        <div className="services">
          <div>
            <img id="store" src={require("./neighbourhood local store.png")} alt="services" height="320px"></img>
          </div>
          <img id="left_point" src={require("./arrows.png")} alt="services" height="25px"></img>
          <img id="services_image" src={require("./thirdweel services.png")} alt="services" height="320px"></img>
          <img id="right_point" src={require("./arrows.png")} alt="services" height="25px"></img>
          <img id="shopping_lady" src={require("./lady_shopping.png")} alt="services" height="220px"></img>
        </div>
          <hr />
          <div className="testimonials">
            Let the customers speak for us.
            <div class="row">
              <div class="column">
                <br />
                <div className="list-items">
                  "ThirdWeel is one of <br/> the best online<br/> shopping
                  sites i've ever <br/> used! The customer <br/> service is very 
                  helpful <br/> and behaviour is good. I <br/> had a wonderful <br/>
                  experience."<br/> ~ Roshan Gupta
                </div>
              </div>
              <div class="column">
                <br />
                <div className="list-items">
                  "I like the quality of service and the <br/> quality of goods. I love
                  <br/> shopping on ThirdWeel <br/> as quality, price and <br/> service is
                  really excellent.<br/> I also get to support the <br/> local retail stores in <br/> areas."
                  <br/>~ Aniruddha Bala
                </div>
              </div>
              <div class="column">
                <br />
                <div className="list-items">
                  "I really love the easy to <br/> use app interface, I had <br/>
                  no difficulties in using<br/> the service. The features<br/> are also
                  one of a kind and <br/> thirdwheel has done a <br/> very unique take on the features."
                  <br/> ~ Gautam Patil
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Content;
