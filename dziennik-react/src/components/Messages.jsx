import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { getStudentMessages, changeMessageState, getTeachersList } from '../connection/Connection';
import * as Session from "../connection/Session";

import "./Messages/Messages.css";

const TitleBar = ({ title }) => {
  return (
    <div className='messages-titlebar'>
      <p>{title}</p>
    </div>
  )
}

const Message = ({ from = "", title = "", date, content, onClick }) => {
  return (
    <div className='message' onClick={onClick}>
      <p>Od: {from}</p>
      <p>Tytuł: {title}</p>
      <p>Data: {date}</p>
    </div>
  )
}

const renderMessages = (read = false, data = [], navigate) => data
  .filter(e => { return e.read === read })
  .map((message, i) => {
    return <Message key={i} {...message} onClick={() => {
      navigate("/messages/read", { state: { ...message } });
      changeMessageState(message.id).catch(err => console.error(err));
    }} />
  })


export default function Messages() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getStudentMessages(Session.getLoggedStudentInfo().studentCode)
      .then(response => {
        getTeachersList()
          .then(
            teachers => {
              response.data = response.data.map(
                wiadomosc => {
                  wiadomosc['from'] = teachers.data[wiadomosc.from];
                  return wiadomosc;
                }
              )
              setData(response.data)
            }
          )
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='messages-container'>

      <TitleBar title={"Nieodczytane"} />
      <div className='unreadmessages-container mc'>{renderMessages(false, data, navigate)}</div>

      <TitleBar title={"Odczytane"} />
      <div className='readmessages-container mc'>{renderMessages(true, data, navigate)}</div>

    </div>
  )
}
