import React from 'react';
import "./profile.css";
import FollowersCards from '../Followerscard/FollowersCards';

import LogoSearch from '../logoSearch/LogoSearch';
import ProfileCard from '../profileCard/ProfileCard';

const Profile = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch />
      <ProfileCard />
    <FollowersCards />
    
    </div>
  )
}

export default Profile