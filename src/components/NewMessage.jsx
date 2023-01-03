import React, { useState } from 'react'
import "./NewMessage/NewMessage.css"

export default function NewMessage() {
  const [recipient, setRecipient] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onSubmit = () => {
    console.table(recipient, title, text);
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
