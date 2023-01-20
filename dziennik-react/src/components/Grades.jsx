import React from "react";
import "./Grades/Grades.css"

const subjects = [
  {
    name: "Matematyka", grades: [
      { grade: "5", date: new Date().getFullYear() },
      { grade: "4", date: new Date().getFullYear() },
      { grade: "3", date: new Date().getFullYear() },
      { grade: "2", date: new Date().getFullYear() },
      { grade: "1", date: new Date().getFullYear() },
      { grade: "6", date: new Date().getFullYear() },
      { grade: "5", date: new Date().getFullYear() },
    ]
  },
  {
    name: "Informatyka", grades: [
      { grade: "6", date: new Date().getFullYear() },
      { grade: "5", date: new Date().getFullYear() },
    ]
  },
  {
    name: "Język Polski", grades: [
      { grade: "1", date: new Date().getFullYear() },
    ]
  },
  {
    name: "Język Angielski", grades: [
      { grade: "1", date: new Date().getFullYear() },
    ]
  },
]

const GradeBox = ({ grade = "", date = new Date() }) => {
  return <div className={`grade-${grade} gradeBox `}>
    <p style={{ fontSize: "3.5rem" }}>{grade}</p>
    <p>{date}</p>
  </div>
}

const GradesList = ({ grades = [] }) => {
  return <div className="gradesList">
    {
      grades.map((e, i) => {
        return <GradeBox
          key={i}
          grade={e.grade}
          date={e.date}
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
  return (
    <div className="grades-container">
      {
        subjects.map((e, i) => {
          return <Subject key={i} name={e.name} grades={e.grades} />
        })
      }
    </div>)
}

export default Grades;