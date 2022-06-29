import React from 'react';
import "./profile.css";
import FollowersCards from '../Followerscard/FollowersCards';

import LogoSearch from '../logoSearch/LogoSearch';
import ProfileCard from '../profileCard/ProfileCard';

const Profile = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard height={130} myprofile  />
      <FollowersCards />
    </div>
  );
}

export default Profile