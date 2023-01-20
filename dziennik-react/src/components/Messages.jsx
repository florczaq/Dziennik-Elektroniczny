import React from 'react'
import "./Messages/Messages.css";

const data = [
  { from: "1", title: "nieodczytana", date: new Date(), read: false, content: "" },
  { from: "1", title: "nieodczytana", date: new Date(), read: false, content: "" },
  { from: "1", title: "nieodczytana", date: new Date(), read: false, content: "" },
  { from: "1", title: "nieodczytana", date: new Date(), read: false, content: "" },
  { from: "1", title: "nieodczytana", date: new Date(), read: false, content: "" },
  { from: "1", title: "nieodczytana", date: new Date(), read: false, content: "" },
  { from: "1", title: "nieodczytana", date: new Date(), read: false, content: "" },
  { from: "1", title: "nieodczytana", date: new Date(), read: false, content: "" },
  { from: "1", title: "nieodczytana", date: new Date(), read: false, content: "" },
  { from: "1", title: "nieodczytana", date: new Date(), read: false, content: "" },
  { from: "1", title: "nieodczytana", date: new Date(), read: false, content: "" },
  { from: "2", title: "odczytana", date: new Date(), read: true, content: "" },
  { from: "3", title: "ta nie jest", date: new Date(), read: false, content: "" },
  { from: "4", title: "ta jest", date: new Date(), read: true, content: "" },
  { from: "4", title: "ta jest", date: new Date(), read: true, content: "" },
  { from: "4", title: "ta jest", date: new Date(), read: true, content: "" },
  { from: "4", title: "ta jest", date: new Date(), read: true, content: "" },
  { from: "4", title: "ta jest", date: new Date(), read: true, content: "" },
  { from: "4", title: "ta jest", date: new Date(), read: true, content: "" },
  { from: "4", title: "ta jest", date: new Date(), read: true, content: "" },
]

const TitleBar = ({ title }) => {
  return (
    <div className='messages-titlebar'>
      <p>{title}</p>
    </div>
  )
}

const Message = ({ from = "", title = "", date = new Date(), content }) => {
  return (
    <div className='message'>
      <p>Od: {from}</p>
      <p>Tytuł: {title}</p>
      <p>Data: {date.toLocaleDateString()}</p>
    </div>
  )
}

export default function Messages() {
  return (
    <div className='messages-container'>
      <TitleBar title={"Nieodczytane"} />
      <div className='unreadmessages-container mc'>
        {
          data
            .filter(e => { return !e.read })
            .map((e, i) => { return <Message key={i} {...e} /> })
        }
      </div>

      <TitleBar title={"Odczytane"} />
      <div className='readmessages-container mc'>
        {
          data
            .filter(e => { return e.read })
            .map((e, i) => { return <Message key={i} {...e} /> })
        }
      </div>

    </div>
  )
}
