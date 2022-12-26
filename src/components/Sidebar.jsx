import React from "react";
import "./Sidebar/Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul>
        <li><p>Strona główna</p></li>
        <li><p>Oceny</p></li>
        <li><p>Uwagi</p></li>
        <li><p>Uczeń</p></li>
        <li><p>Wiadomości</p></li>
        <li><p>Plan lekcji</p></li>
        <li><p>Aktualności</p></li>
      </ul>
    </div>
  )
}


export default Sidebar;