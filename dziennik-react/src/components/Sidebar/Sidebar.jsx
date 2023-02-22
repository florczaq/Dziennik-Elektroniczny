import React from "react";
import "./Sidebar.css"
import { Link } from "react-router-dom";


const Sidebar = () => {

  const links = [
    { name: "Strona główna", to: "/" },
    { name: "Oceny", to: "/grades" },
    { name: "Uwagi", to: "/comments" },
    { name: "Uczeń", to: "/student-info" },
    { name: "Plan Lekci", to: "/timetable" },
    { name: "Aktualności", to: "/news" },
    { name: "Wiadomości", to: "/messages" },
    { name: "Nowa Wiadomość", to: "/new-message" },
  ]

  const renderLinks = links.map((link, i) => <li key={i}>
    <Link to={link.to}>{link.name}</Link></li>)

  return (
    <div className="sidebar-container">
      <ul>{renderLinks}</ul>
    </div>
  )
}

export default Sidebar;