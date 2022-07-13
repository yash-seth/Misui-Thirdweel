import React from "react";
import "./Login.css";
import {useState} from "react"
import {Link} from "react-router-dom"

function Login() {
  const [slider, setSlider] = useState("login")
  const toggleLoginSlider = () =>{
      if(slider==="login"){
        document.getElementById("login").style.backgroundColor = "#e0ffe7";
        document.getElementById("register").style.backgroundColor = "#4B8D5E";
        document.getElementById("login").style.color = "#4B8D5E";
        document.getElementById("register").style.color = "#e3fae9";
        setSlider("register")
      }else{
        document.getElementById("login").style.backgroundColor = "#4B8D5E";
        document.getElementById("register").style.backgroundColor = "#e0ffe7";
        document.getElementById("login").style.color = "#e3fae9";
        document.getElementById("register").style.color = "#4B8D5E";
        setSlider("login")
      }
  }
  return (
    <>
      <div className="loginContainer">
        <div className="loginIntro">
          <img
            src={require("./loginMascot.png")}
            alt="thirdweel mascot"
            height="400px"
          />
          <div className="loginText">
            <div id="loginWelcome">Welcome to Thirdweel</div>
            <div id="loginQuote">Support your local Neighbourhood stores</div>
            <div id="loginHashtag">#VocalForLocal</div>
          </div>
        </div>
        <div className="loginControls">
          <div className="loginHeader">
            <Link to="/" style={{ textDecoration: "none", color: "inherit"}}><img
              id="loginLogo"
              src={require("./thirdweel mini logo.png")}
              alt="thirdweel logo"
              height="25px"
            /></Link>
            <Link to="/" style={{ textDecoration: "none", color: "inherit"}}><div id="companyNameLogin">Thirdweel</div></Link>
          </div>
          <div className="loginControlsMain">
            <div id="loginControlsMainHeader">Welcome to Thirdweel</div>
            <div id="loginControlsMainHeaderTextMobileView">Support your local Neighbourhood stores</div>
            <div id="loginControlsMainHeaderSubTextMobileView">#VocalForLocal</div>
            <div id="loginControlsMainOptions">
              <button id="login" onClick={toggleLoginSlider}>Login</button>
              <button id="register" onClick={toggleLoginSlider}>Register</button>
            </div>
            <div className="loginControlsUsername">
              <div id="loginControlsUsername">Username</div>
              <input id="loginControlsUsernameInput" type="text" placeholder="Enter your username" />
            </div>
            <div className="loginControlsPassword">
              <div id="loginControlsPassword">Password</div>
              <input id="loginControlsPasswordInput" type="text" placeholder="Enter your password" />
            </div>
            <div className="loginControlsFooter">
              <div className="rememberMeContainer">
                <input type="checkbox" name="rememberMe" />
                <label for="rememberMe">Remember me</label>
              </div>
              <div className="forgotPasswordContainer">
                <button>Forgot password ?</button>
              </div>
            </div>
            <button id="loginToThirdweel">Login</button>
            <div className="otherLoginOptions">
              <div id="otherLoginOptionsHeader">or register with</div>
              <div id="otherLoginOptions">
                <button>
                  <img
                    src={require("./FixedF.png")}
                    alt="facebook login option"
                    height="40px"
                  />
                </button>
                <button>
                  <img
                    src={require("./FixedG.png")}
                    alt="google login option"
                    height="40px"
                  />
                </button>
                <button>
                  <img
                    src={require("./Fixed.png")}
                    alt="apple login option"
                    height="40px"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
