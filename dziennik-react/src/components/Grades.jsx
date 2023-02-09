import React, { useEffect, useState } from "react";
import { getStudentGrades } from "../connection/Connection";
import * as Session from "../connection/Session";
import "./Grades/Grades.css";
import Subject from "./Grades/Subject";


const Grades = () => {
  const [grades, setGrades] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getStudentGrades(Session.getLoggedStudentInfo().id)
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
          return <Subject
            key={i}
            name={subject}
            grades={grades.filter(
              grade => { return grade.subject === subject })
            }
          />
        })
      }
    </div>)
}

export default Grades;
