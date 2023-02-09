import React from "react";

import "./Grades.css";

const GradeBox = ({ grade, date = new Date() }) => {
  return <div className={`grade-${grade} gradeBox `}>
    <p style={{ fontSize: "3.5rem" }}>{grade}</p>
    <p>{date}</p>
  </div>
}

export default GradeBox;
