import React from 'react';
import { useLocation } from 'react-router-dom';
import "./NewMessage.css";

export default function MessageReader() {
  const { state } = useLocation();

  return (
    <div className='newmessage-container'>
      <p className='newmessage-title'>{state.title}</p>
      <div className='address-info'>
        <div>
          <p> Od: </p>
          <input className='recipient-input' type="text" value={state.from} disabled />
        </div>
        <div>
          <p> Data: </p>
          <input className='title-input' type="text" value={state.date} disabled />
        </div>
      </div>
      <textarea name="" id="" value={state.content} disabled style={{ height: '45vh' }} />
    </div>
  )
}
