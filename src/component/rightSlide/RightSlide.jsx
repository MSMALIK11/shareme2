import React from 'react'
import './right.css';
import homeIcon from '../../images/home.png';
import commentIcon from '../../images/comment.png';
import notiIcon from '../../images/noti.png';
import { AiFillSetting } from "react-icons/ai";
import ListOftrends from '../trendcard/ListOftrends';
import Activefrnds from '../activefriends/Activefrnds';
import { Link } from 'react-router-dom';

const RightSlide = () => {
  return (
    <div className="right-side">
      <div className="nav-icons">
        <img src={homeIcon} alt="" />
        <Link to="/login" style={{color:'inherit',textDecoration:'none'}}>
          <AiFillSetting style={{ fontSize: 30 }} />
        </Link>

        <img src={notiIcon} alt="" />
        <img src={commentIcon} alt="" />
      </div>
      <Activefrnds />
      <ListOftrends />
    </div>
  );
}

export default RightSlide