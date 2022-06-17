import React from "react";
import "./login.css";
import logo from "../../images/logo.png";
const Auth = () => {
  return (
    <div className="auth-wraper">
      <div className="left-logo-area">
        <img src={logo} alt="" />
        <div className="info">
          <h1>SHAREME</h1>
          <h6>EXPLORE THE IDEAS throughout the world</h6>
        </div>
      </div>
      <div className="right-form">
        <h4>sign in</h4>
        <form action="">
          <div className="input-container" style={{width:'100%'}}>
            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div className="user-name-input">
            <input type="text" placeholder="username" />
          </div>
          <div className="input-container" style={{width:'100%'}}>
            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Enter Your Name" />
          </div>
        </form>

        <span>Already have an account  <span style={{color:'blue'}}>login</span></span>
        <button>signup</button>
      </div>
    </div>
  );
};

export default Auth;
