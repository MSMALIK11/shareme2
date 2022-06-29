import React from "react";

import "../../pages/home/home.css";
import ProfileCard from "../profileCard/ProfileCard";
import PostShare from "../postShare/PostShare";
import LogoSearch from "../logoSearch/LogoSearch";
import YourInfo from "../yourinfo/YourInfo";
import FolowersCards from '../Followerscard/FollowersCards'
import Trends from '../trendcard/Trends';
import Post from '../postcard/Posts'
import Activefrnds from "../activefriends/Activefrnds";
const MyProfile = () => {
  return (
    <div className="Hom">
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3 order-lg-0 order-md-0 order-1 ">
          <div className="d-none d-md-block d-lg-block">
            <LogoSearch />
          </div>

          <YourInfo />

          <div className="d-none d-md-block d-lg-block">
            <FolowersCards />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6  order-md-1 order-lg-1 order-0">
          <PostShare />
          <div style={{ marginTop: 20 }}>
            <ProfileCard height={220} pWidth={130} bottom={-60} isHome />
            <Post />
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 order-2">
          <Activefrnds />
          <div className="mt-3">
            <Trends />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
