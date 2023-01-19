import React from 'react'
import "./NewMessage/NewMessage.css"

export default function MessageReader({ title = "Tytuł", from = "Nadawca", content = "Lorem ipsum itd. " }) {
  return (
    <div className='newmessage-container'>
      <p className='newmessage-title'>New Message</p>
      <div className='address-info'>
        <div>
          <p> Od: </p><input className='recipient-input' type="text" value={from} disabled />
        </div>
        <div>
          <p> Tytuł: </p><input className='title-input' type="text" value={title} disabled />
        </div>
      </div>
      <textarea name="" id="" value={content} disabled style={{ height: '60vh' }} />
      <div className='button-container'>
      </div>
    </div>
  )
}
