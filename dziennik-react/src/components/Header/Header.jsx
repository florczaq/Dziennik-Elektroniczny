import React, { useEffect, useState } from 'react';
import profile from "../../assets/Images/profile.svg";
import * as Session from "../../connection/Session";
import "./Header.css";

const Header = () => {
  const [data, setData] = useState({});

  useEffect(() => setData(Session.getLoggedStudentInfo()), []);

  return (
    <div className='header-container'>
      <div className='tytul'>Dziennik<br />Elektroniczny</div>
      {
        Session.isUserLoggedIn &&
        <div className='zalogowany-uczen' >
          {data.firstName} {data.lastName}
          <img src={profile} alt="" />
          <button onClick={Session.logoutStudent} title="Naciśnij aby wylogować">Wyloguj</button>
        </div>
      }
    </div>
  )
}

export default Header;

