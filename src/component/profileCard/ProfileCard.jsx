import React from "react";
import './profileCard.css';
import prifileBanner from '../../images/2775071.jpg';
import profileImg from '../../images/profileImg.jpg';
import { Link } from "react-router-dom";
const ProfileCard=({height,bottom,pWidth,myprofile})=>{
  
    return (
      <>
        <div className="profile-card">
          <div className="profle-image" style={{ height: height }}>
            <img src={prifileBanner} alt="" />
            <img
              src={profileImg}
              alt=""
              style={{ width: pWidth, bottom: bottom }}
            />
          </div>
          <div className="profile-name">
            <span>Zayanah MJ</span>
            <span>Senoir UI/UX Designer</span>
          </div>

          {/* following status */}
          <div className="profile-card-wraper">
            <hr />

            <div className="follow-status">
              <div className="follow">
                <span>6,8666</span>
                <span>Followers</span>
              </div>
              <div className="line-vr"></div>
              <div className="follow">
                <span>1</span>
                <span>Following</span>
              </div>
              <div className="line-vr"></div>
              <div className="follow">
                <span>12</span>
                <span>Post</span>
              </div>
            </div>
            <hr />
            {myprofile && (
              <Link to="/profile" className="my-profile-title">
                My Profile
              </Link>
            )}
          </div>
        </div>
      </>
    );
}

export default ProfileCard;