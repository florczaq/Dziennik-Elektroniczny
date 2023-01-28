import React, { useEffect, useState } from "react";

import { getStudentGrades } from "../connection/Connection";

import "./Grades/Grades.css"

/**
 * Modal - https://codepen.io/claydiffrient/pen/KNxgav
 * 
 */

const GradeBox = ({ grade, date = new Date() }) => {
  return <div className={`grade-${grade} gradeBox `}>
    <p style={{ fontSize: "3.5rem" }}>{grade}</p>
    <p>{date}</p>
  </div>
}

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

const Subject = ({ name = "", grades = [] }) => {
  return <div>
    <div className="subject-title">{name}</div>
    <GradesList grades={grades} />
  </div>
}

const Grades = () => {
  const [grades, setGrades] = useState([]);
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    getStudentGrades(1)
      .then(res => {
        setGrades(res.data);
        setSubjects([...new Set(res.data.map(e => e.subject))]);
      })
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="grades-container">
      {
        subjects.map((subject, i) => {
          return <Subject key={i} name={subject} grades={grades.filter(grade => { return grade.subject === subject })} />
        })
      }
    </div>)
}

export default Grades;