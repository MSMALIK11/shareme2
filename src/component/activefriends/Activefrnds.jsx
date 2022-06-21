import React from 'react';
import './active.css'
import { Followers } from '../../data/followersData'
const Activefrnds = () => {
  return (
    <div className="active-friends-wraper">
      <h4>Active Friends</h4>
      {Followers && Followers.map((frnds)=>{
          return (
          
              <div className="active-friends" key={frnds.username}>
                <div className="active-friends-img">
                  <img src={frnds.img} alt="" />
                </div>
                <div className="friends-info">
                  <h5>{frnds.username}</h5>
                </div>
              </div>
           
          );
      })}
     
    </div>
  );
}

export default Activefrnds