import React from 'react'
import "./Header/Header.css";
import profile from "../assets/Images/profile.svg"

const Header = () => {
  return (
    <div className='header-container'>
      <div className='tytul'>Dziennik<br />Elektroniczny</div>
      <div className='zalogowany-uczen'>Mikołaj Florczak
        <img src={profile} alt="" />
      </div>

    </div>
  )
}

export default Header;

