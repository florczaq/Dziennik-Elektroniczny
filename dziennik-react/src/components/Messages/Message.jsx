import React from 'react';

import "./Messages.css";

const Message = ({ from = "", title = "", date, content, onClick }) => {
  return (
    <div className='message' onClick={onClick}>
      <p>Od: {from}</p>
      <p>Tytuł: {title}</p>
      <p>Data: {date}</p>
    </div>
  )
}

export default Message;