import React from 'react'
import './right.css';
import homeIcon from '../../images/home.png';
import commentIcon from '../../images/comment.png';
import notiIcon from '../../images/noti.png';
import { AiFillSetting } from "react-icons/ai";
import ListOftrends from '../trendcard/ListOftrends';
import Activefrnds from '../activefriends/Activefrnds';

const RightSlide = () => {
  return (
    <div className="right-side">
      <div className="nav-icons">
        <img src={homeIcon} alt="" />
        <AiFillSetting style={{fontSize:30}} />
        <img src={notiIcon} alt="" />
        <img src={commentIcon} alt="" />
      </div>
      <Activefrnds />
      <ListOftrends />
    </div>
  );
}

export default RightSlide