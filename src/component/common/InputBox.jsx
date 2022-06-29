import React from 'react'
import './inputBox.css'
const InputBox = ({ name,type,value, placeText, handleChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeText}
      className="custom-input"
      onChange={handleChange}
      autoComplete="true"
      value={value}
    />
  
  );
};

export default InputBox