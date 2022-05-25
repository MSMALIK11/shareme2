import React from "react";
import './profileCard.css';
import prifileBanner from '../../images/cover.jpg';
import profileImg from '../../images/profileImg.jpg'
const ProfileCard=()=>{
    return (
      <>
        <div className="profile-card">
          <div className="profle-image">
            <img src={prifileBanner} alt="" />
            <img src={profileImg} alt="" />
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
            </div>
       <hr />

            <h2 className="my-profile-title">My profile</h2>
          </div>
        </div>
      </>
    );
}

export default ProfileCard;