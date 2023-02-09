import React from "react";
import "./Grades.css";
import GradeBox from "./GradesBox";

const GradesList = ({ grades = [] }) => {
  return <div className="gradesList">
    {
      grades.map((grade, i) => {
        return <GradeBox
          key={i}
          grade={grade.value}
          date={grade.date}
        />
      })
    }
  </div>
}

export default GradesList;