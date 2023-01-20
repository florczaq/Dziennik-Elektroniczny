import React, { useState } from "react";
import "./StudentInfo/StudentInfo.css";
import profilePicture from "../assets/Images/profile.svg";
import { getStudentInfo } from "../connection/Connection";


const StudentInfo = () => {
  const [data, setData] = useState({});

  React.useEffect(() => {
    getStudentInfo(1).then(res => setData(res.data));
  }, []);

  return <div className="studentinfo-container">
    <div className="main-info">
      <div className="student-picture"><img src={profilePicture} alt="profile" /></div>
      <div className="student-info">
        <div>
          <p>Imię: </p>
          <p>Nazwisko: </p>
          <p>Adres: </p>
        </div>
        <div>
          <p>{data.firstName}</p>
          <p>{data.lastName}</p>
          <p>{data.address}</p>
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