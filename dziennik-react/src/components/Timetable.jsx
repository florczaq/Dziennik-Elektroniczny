import React from 'react'
import "./Timetable/Timetable.css"

const days = [
  { name: "Poniedziałek", subjects: ["Matematyka", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu",] },
  { name: "Wtorek", subjects: ["Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu",] },
  { name: "Środa", subjects: ["Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu",] },
  { name: "Czwartek", subjects: ["Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu",] },
  { name: "Piątek", subjects: ["Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu", "Nazwa Przedmiotu",] },
]

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

const Timetable = () => {
  return (
    <div className='timetable-container'>
      <table>
        <thead>
          <tr>
            <th />
            {
              days.map(
                (day, i) => {
                  return <td key={i}>{day.name}</td>
                }
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            hours.map(
              (hour, i) => {
                return <tr key={i}>
                  <td className='hour'>
                    <p>{hour.number}.</p>
                    <p>{hour.time}</p>
                  </td>
                  {
                    days.map(
                      (day, j) => {
                        return <td key={j}>{day.subjects[i]}</td>
                      }
                    )
                  }
                </tr>
              }
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Timetable;