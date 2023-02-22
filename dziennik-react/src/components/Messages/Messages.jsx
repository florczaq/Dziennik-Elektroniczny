import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeMessageState, getStudentMessages, getTeachersList } from '../../connection/Connection';
import * as Session from "../../connection/Session";
import Message from './SingleMessage';

import "./Messages.css";

const TitleBar = ({ title }) => {
  return (
    <div className='messages-titlebar'>
      <p>{title}</p>
    </div>
  )
}

const renderMessages = (read = false, data = [], navigate) => {

  const onClick = (message) => {
    navigate("/messages/read", { state: { ...message } });
    changeMessageState(message.id).catch(err => console.error(err));
  }

  return data
    .filter(e => e.read === read)
    .map(
      (message, i) =>
        <Message
          key={i}
          {...message}
          onClick={() => onClick(message)}
        />
    )
}

const Messages = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const studentData = Session.getLoggedStudentInfo();

    getStudentMessages(studentData.studentCode)
      .then(response => getTeachersList()
        .then(teachers => {
          const messages = response.data;
          const nauczyciele = teachers.data;

          setData(messages.map(wiadomosc => {
            return { ...wiadomosc, from: nauczyciele[wiadomosc.from] };
          }))
        }).catch(err => console.error(err))
      ).catch(err => console.error(err));
  }, []);

  return (
    <div className='messages-container'>
      <TitleBar title="Nieodczytane" />
      <div className='unreadmessages-container mc'>{renderMessages(false, data, navigate)}</div>
      <TitleBar title="Odczytane" />
      <div className='readmessages-container mc'>{renderMessages(true, data, navigate)}</div>
    </div>
  )
}

export default Messages;
