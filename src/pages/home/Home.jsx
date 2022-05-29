import React from "react";
import PostSlide from "../../component/postSlide/PostSlide";
import Profile from "../../component/profile/Profile";
import RightSlide from "../../component/rightSlide/RightSlide";
import './home.css'

const Home=()=>{
    return(
        <div className="Home">
        <div className="profileSide"><Profile /></div>
        <div className="postSide"><PostSlide /></div>
        <div className="rightSide"><RightSlide /></div>
        
        </div>
    )
}

export default Home