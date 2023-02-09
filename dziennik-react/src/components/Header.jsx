import React, { useEffect, useState } from 'react';
import profile from "../assets/Images/profile.svg";
import * as Session from "../connection/Session";
import "./Header/Header.css";

const Header = () => {
  const [data, setData] = useState({});

  useEffect(() => setData(Session.getLoggedStudentInfo()), []);

  return (
    <div className='header-container'>
      <div className='tytul'>Dziennik<br />Elektroniczny</div>
      <div className='zalogowany-uczen'>
        {data.firstName} {data.lastName}
        <img src={profile} alt="" />
      </div>
    </div>
  )
}

export default Header;

