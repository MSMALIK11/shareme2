import React from "react";

import "../../pages/home/home.css";
import ProfileCard from "../profileCard/ProfileCard";
import PostShare from "../postShare/PostShare";
import LogoSearch from "../logoSearch/LogoSearch";
import YourInfo from "../yourinfo/YourInfo";
import FolowersCards from '../Followerscard/FollowersCards'
import Trends from '../trendcard/Trends';
import Post from '../postcard/Posts'
const MyProfile = () => {
  return (
    <div className="Home">
      <div className="profile-left-side">
        <LogoSearch />
        <YourInfo />

        <FolowersCards />
      </div>
      <div className="my-profile card">
        <PostShare />
        <div style={{ marginTop: 20 }}>
          
          <ProfileCard height={220} pWidth={130}  bottom={-60}  />
<Post />
      
        </div>
      </div>
      <div className="right-side-profile-info">
        <Trends />
      </div>
    </div>
  );
};

export default MyProfile;
