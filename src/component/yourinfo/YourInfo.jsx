import React from 'react'
import './info.css';
import { GrEdit } from "react-icons/gr";
const YourInfo = () => {
  return (
    <div className='your-info'>
      <div className="top-heading">
          <span>Your info</span>
          <span><GrEdit /></span>

      </div>
      <div className="info">
          <span><b>Status </b>Single</span>
          <span><b>Lives In </b>Multan</span>
          <span><b>Work at </b> Amazon</span>
      </div>
        
        <button>Log Out</button>
        </div>
  )
}

export default YourInfo