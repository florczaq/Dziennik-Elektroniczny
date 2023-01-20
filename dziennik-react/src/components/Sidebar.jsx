import React from "react";
import "./Sidebar/Sidebar.css"
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul>
        <li><Link to={"/"}>Strona główna</Link></li>
        <li><Link to={"/grades"}>Oceny</Link></li>
        <li><Link to={"/comments"}>Uwagi</Link></li>
        <li><Link to={"/student-info"}>Uczeń</Link></li>
        <li><Link to={"/timetable"}>Plan lekcji</Link></li>
        <li><Link to={"/news"}>Aktualności</Link></li>
        <li><Link to={"/messages"}>Wiadomości</Link></li>
        <li><Link to={"/new-message"}>Nowa Wiadomość</Link></li>
      </ul>
    </div>
  )
}


export default Sidebar;