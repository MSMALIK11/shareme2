import React from 'react'
import './card.css';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
const FollowersCards = () => {
  return (
    <div className="Folower-card">
      <h3>Who is follow you </h3>
      {/* < folower> */}
      <div className="follower">
        <div>
          <img src={img1} alt="" className="follower-image" />
          <div className="name">
            <span>name</span>
            <span>@sub name</span>
          </div>
        </div>
        <a>follow</a>
      </div>
      {/* < /folower> */}
      {/* < folower> */}
      <div className="follower">
        <div>
          <img src={img2} alt="" className="follower-image" />
          <div className="name">
            <span>name</span>
            <span>@sub name</span>
          </div>
        </div>
        <a>follow</a>
      </div>
      {/* < /folower> */}

      <h4 className='see-more'>See More</h4>
    </div>
  );
}

export default FollowersCards