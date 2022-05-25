import React from 'react';
import './logoSearch.css'
import logo from '../../images/logo.png';
import { AiOutlineSearch } from "react-icons/ai";
const LogoSearch = () => {
  return (
    <div className='logo-search'>
      <img src={logo} alt="" className='logo' />
      <div className="logo-search-box">
      <input type="text" placeholder='#Explore' />
      <div className='search-icon'><AiOutlineSearch /></div>

      </div>
    </div>
  )
}

export default LogoSearch