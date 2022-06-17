import React from 'react'
import './info.css';
import { GrEdit } from "react-icons/gr";
import ProfileModal from '../profileModal/ProfileModal';

const YourInfo = () => {
  const [opened,setOpened]=React.useState(false);

  return (
    <div className="your-info">
      <div className="top-heading">
        <span>Your info</span>
        <span onClick={()=>setOpened(true)}>
          <GrEdit />
        </span>
        <ProfileModal opened={opened} setOpened={setOpened} />
      </div>
      <div className="info">
        <span>
          <b>Status </b>Single
        </span>
        <span>
          <b>Lives In </b>Multan
        </span>
        <span>
          <b>Work at </b> Amazon
        </span>
      </div>

      <button>Log Out</button>
    </div>
  );
}

export default YourInfo