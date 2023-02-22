import React from "react";
import { useNavigate } from "react-router-dom";
import aktualnosci from "../../assets/Images/MainPage/aktualnosci.svg";
import oceny from "../../assets/Images/MainPage/oceny.svg";
import planLekcji from "../../assets/Images/MainPage/plan-lekcji.svg";
import uczen from "../../assets/Images/MainPage/uczen.svg";
import uwagi from "../../assets/Images/MainPage/uwagi.svg";
import wiadomosci from "../../assets/Images/MainPage/wiadomosci.svg";
import ButtonBox from "./ButtonBox";
import "./MainPage.css";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mainpage-container">
      <div className="buttonbox-container">
        <ButtonBox text="Oceny" iconName={oceny} onClick={() => navigate("/grades")} />
        <ButtonBox text="Uwagi" iconName={uwagi} onClick={() => navigate("/comments")} />
        <ButtonBox text="Uczeń" iconName={uczen} onClick={() => navigate("/student-info")} />
        <ButtonBox text="Wiadomości" iconName={wiadomosci} onClick={() => navigate("/messages")} />
        <ButtonBox text="Plan Lekcji" iconName={planLekcji} onClick={() => navigate("/timetable")} />
        <ButtonBox text="Aktualności" iconName={aktualnosci} onClick={() => navigate("/news")} />
      </div>
    </div>

  )
}

export default MainPage;