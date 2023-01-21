import React, { useState } from 'react'
import "./NewMessage/NewMessage.css"
import { sendNewMessage } from '../connection/Connection';

export default function NewMessage() {
  const [recipient, setRecipient] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onSubmit = () => {
    sendNewMessage({ title: title, from: "mikflo00", to: recipient, date: "2020-01-01", content: text })
      .then(() => console.log("Message sent :D"))
      .catch(() => console.warn("Smth went wrong :("));
  }

  return (
    <div className='newmessage-container'>
      <p className='newmessage-title'>New Message</p>
      <div className='address-info'>
        <div>
          <p> Do: </p><input className='recipient-input' type="text" value={recipient} onChange={e => setRecipient(e.target.value)} />
        </div>
        <div>
          <p> Tytuł: </p><input className='title-input' type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
      </div>
      <textarea name="" id="" value={text} onChange={e => setText(e.target.value)} />
      <div className='button-container'>
        <button>Anuluj</button>
        <button onClick={onSubmit}>Wyślij</button>
      </div>
    </div>
  )
}
