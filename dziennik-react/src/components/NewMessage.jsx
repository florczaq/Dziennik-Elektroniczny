import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTeachersList, sendNewMessage } from '../connection/Connection';
import * as Session from "../connection/Session";
import "./NewMessage/NewMessage.css";

export default function NewMessage() {
  const [recipient, setRecipient] = useState(undefined);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [recipientList, setRecipientList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTeachersList().then(res => {
      let arr = [];
      for (const value in res.data)
        arr.push({ code: value, name: res.data[value] });
      setRecipientList(arr)
    })
  }, [])

  const onSubmit = () => {
    if (!recipient) {
      window.alert("Proszę wybrać adresata.");
      return;
    }

    const studentCode = Session.getLoggedStudentInfo().studentCode;
    sendNewMessage({ title: title, from: studentCode, to: recipient, date: new Date().toLocaleDateString(), content: text })
      .then(() => navigate("/"))
      .catch(() => console.warn("Smth went wrong :("));
  }

  return (
    <div className='newmessage-container'>

      <p className='newmessage-title'>New Message</p>

      <div className='address-info'>
        <div>
          <p> Do: </p>
          <select value={recipient} onChange={e => setRecipient(e.target.value)}>
            <option value={undefined}> </option>
            {recipientList.map((element, i) => <option key={i} value={element.code}>{element.name}</option>)}
          </select>
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
