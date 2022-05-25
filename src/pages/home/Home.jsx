import React from "react";
import Profile from "../../component/profile/Profile";
import './home.css'

const Home=()=>{
    return(
        <div className="Home">
        <div className="profileSide"><Profile /></div>
        <div className="postSide">post side</div>
        <div className="rightSide">right side</div>
        
        </div>
    )
}

export default Home