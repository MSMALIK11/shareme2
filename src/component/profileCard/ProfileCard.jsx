import React from "react";
import './profileCard.css';
import prifileBanner from '../../images/2775071.jpg';
import profileImg from '../../images/profileImg.jpg';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileCard=({height,bottom,pWidth,myprofile,isHome})=>{
  const {user}=useSelector((state)=>state.user);

  
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
            <span>{user ? user.name : "username"}</span>
            <span>Senoir UI/UX Designer</span>
          </div>

          {/* following status */}
          <div className="profile-card-wraper">
            <hr />

            <div className="follow-status">
              <div className="follow">
                <span>{user ? user.followers.length:'0'}</span>
                <span>Followers</span>
              </div>
              <div className="line-vr"></div>
              <div className="follow">
                <span>{user? user.following.length:'0'}</span>
                <span>Following</span>
              </div>
              {isHome && (
                <>
                  <div className="line-vr"></div>
                  <div className="follow">
                    <span>{user ? user.post.length:'no post'}</span>
                    <span>Posts</span>
                  </div>
                </>
              )}
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