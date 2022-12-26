import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import "./StudentInfo/StudentInfo.css";
import profilePicture from "../assets/Images/profile.svg";

const data = {
  name: "Mikołaj",
  lastname: "Florczak",
  adres: "Adres 123",
  phoneNumber: "000 000 000",
  email: "example@email.com"
}

const StudentInfo = () => {
  return <div className="studentinfo-container">
    <div className="main-info">
      <div className="student-picture"><img src={profilePicture} alt="profile picture" /></div>
      <div className="student-info">
        <div>
          <p>Imię: </p>
          <p>Nazwisko: </p>
          <p>Adres: </p>
        </div>
        <div>
          <p>{data.name}</p>
          <p>{data.lastname}</p>
          <p>{data.adres}</p>
        </div>
      </div>
    </div>
    <div className="kontakt-info">
      <div>
        <p>Telefon: </p>
        <p>Email: </p>
      </div>
      <div>
        <p>{data.phoneNumber}</p>
        <p>{data.email}</p>
      </div>
    </div>
  </div>
}

export default StudentInfo;