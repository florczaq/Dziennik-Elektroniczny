import React, { useEffect, useState } from "react";

import { getStudentGrades } from "../connection/Connection";

import "./Grades/Grades.css"

// const subjects = [
//   {
//     name: "Matematyka", grades: [
//       { grade: "5", date: new Date().getFullYear() },
//       { grade: "4", date: new Date().getFullYear() },
//       { grade: "3", date: new Date().getFullYear() },
//       { grade: "2", date: new Date().getFullYear() },
//       { grade: "1", date: new Date().getFullYear() },
//       { grade: "6", date: new Date().getFullYear() },
//       { grade: "5", date: new Date().getFullYear() },
//     ]
//   },
//   {
//     name: "Informatyka", grades: [
//       { grade: "6", date: new Date().getFullYear() },
//       { grade: "5", date: new Date().getFullYear() },
//     ]
//   },
//   {
//     name: "Język Polski", grades: [
//       { grade: "1", date: new Date().getFullYear() },
//     ]
//   },
//   {
//     name: "Język Angielski", grades: [
//       { grade: "1", date: new Date().getFullYear() },
//     ]
//   },
// ]

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