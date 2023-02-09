import React, { useEffect, useState } from "react";
import profilePicture from "../assets/Images/profile.svg";
import { getStudentInfo } from "../connection/Connection";
import * as Session from "../connection/Session";
import "./StudentInfo/StudentInfo.css";


const StudentInfo = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getStudentInfo(Session.getLoggedStudentInfo().id)
    .then(res => setData(res.data))
  }, []);

  return <div className="studentinfo-container">
    <div className="main-info">
      <div className="student-picture"><img src={profilePicture} alt="profile" /></div>

      <div className="student-info">
        <div>
          <p>Imię: </p>
          <p>Nazwisko: </p>
          <p>Adres: </p>
          <p>Klasa: </p>
        </div>

        <div>
          <p>{data.firstName}</p>
          <p>{data.lastName}</p>
          <p>{data.address}</p>
          <p>{data.classCode}</p>
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