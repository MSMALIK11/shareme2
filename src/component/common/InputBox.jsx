import React from 'react'
import '../auth/login.css';
const InputBox = ({name,placeText}) => {
  return (
   
      <input type="text" name={name} placeholder={placeText} className="custom-input"  />
  );
}

export default InputBox