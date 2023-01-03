import React from "react";
import "./MainPage/MainPage.css"
import oceny from "../assets/Images/MainPage/oceny.svg";
import aktualnosci from "../assets/Images/MainPage/aktualnosci.svg";
import planLekcji from "../assets/Images/MainPage/plan-lekcji.svg";
import uczen from "../assets/Images/MainPage/uczen.svg";
import uwagi from "../assets/Images/MainPage/uwagi.svg";
import wiadomosci from "../assets/Images/MainPage/wiadomosci.svg";


const ButtonBox = ({text = "", iconName}) =>{
  return <div className="buttonbox">
    <img src={iconName} alt="Button" />
    <p>{text}</p>
  </div>
}

const MainPage = () =>{
  return(
    <div className="mainpage-container">
      <div className="buttonbox-container">
        <ButtonBox text="Oceny" iconName={oceny}/>
        <ButtonBox text="Uwagi" iconName={uwagi}/>
        <ButtonBox text="Uczeń" iconName={uczen}/>
        <ButtonBox text="Wiadomości" iconName={wiadomosci}/>
        <ButtonBox text="Plan Lekcji" iconName={planLekcji}/>
        <ButtonBox text="Aktualności" iconName={aktualnosci}/>
      </div>
    </div>
  
  )
}

export default MainPage;