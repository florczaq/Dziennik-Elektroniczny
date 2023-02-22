import React, { useEffect, useState } from 'react'
import { getStudentTimetable } from '../../connection/Connection'
import * as Session from "../../connection/Session"

import "./Timetable.css"

const Subjects = ({ hours, days }) => {
  return hours.map(
    (hour, i) => {
      return <tr key={i}>
        <td className='hour'>
          <p>{hour.number}.</p>
          <p>{hour.time}</p>
        </td>
        {days.map((day, j) => <td key={j}>{day.subjects[i]?.name}</td>)}
      </tr>
    }
  )
}

const Timetable = () => {
  const [days, setDays] = useState([]);

  const hours = [
    { number: "1", time: "7.10-7.55" },
    { number: "2", time: "8.00-8.45" },
    { number: "3", time: "8.50-9.35" },
    { number: "4", time: "9.40-10.25" },
    { number: "5", time: "10.45-11.30" },
    { number: "6", time: "11.35-12.20" },
    { number: "7", time: "12.25-13.10" },
    { number: "8", time: "13.15-14.00" },
    { number: "9", time: "14.05-14.50" },
  ]

  useEffect(() => {
    getStudentTimetable(Session.getLoggedStudentInfo().classCode)
      .then(res => setDays(res.data))
      .catch(err => console.error(err));
  }, []);


  const renderDaysName = () =>days.map((day, i) => <td key={i}>{day.name}</td>)

  return (
    <div className='timetable-container'>
      <table>
        <thead>
          <tr>
            <th />
            {renderDaysName()}
          </tr>
        </thead>
        <tbody>
          <Subjects hours={hours} days={days} />
        </tbody>
      </table>
    </div>
  )
}

export default Timetable;