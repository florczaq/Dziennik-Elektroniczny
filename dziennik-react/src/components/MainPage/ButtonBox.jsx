import React from "react";
import "./MainPage.css";

const ButtonBox = ({ text = "", iconName = "", onClick }) => {
  return <div className="buttonbox" onClick={onClick}>
    <img src={iconName} alt="Button" />
    <p>{text}</p>
  </div>
}

export default ButtonBox;