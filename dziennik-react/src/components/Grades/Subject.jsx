import React from "react";
import "./Grades.css";
import GradesList from "./GradesList";

const Subject = ({ name = "", grades = [] }) => {
  return <div>
    <div className="subject-title">{name}</div>
    <GradesList grades={grades} />
  </div>
}

export default Subject;