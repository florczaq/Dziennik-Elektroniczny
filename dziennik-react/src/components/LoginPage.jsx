import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { loginStudent } from '../connection/Connection';
import { studentLogin } from '../connection/Session';
import "./LoginPage/LoginPage.css";


const LoginPage = () => {
  const [studentCode, setStudentCode] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const validate = () => {
    if (studentCode !== "" && password !== "")
      return true;

    const wrongDataMessage = document.getElementById('wrong-data-alert');
    wrongDataMessage.classList.add("not-empty")
    wrongDataMessage.innerHTML = "Uzupełnij wszystie dane";

    return false;
  }

  const onSubmit = () => {
    if (validate()) {
      setLoader(true);
      loginStudent(studentCode, password)
        .then(res => {
          setLoader(false)
          if (res.data === "") {
            const wrongDataMessage = document.getElementById('wrong-data-alert');
            wrongDataMessage.classList.add("not-empty")
            wrongDataMessage.innerHTML = "Złe dane logowania";
            return;
          }
          studentLogin(res.data);
          window.location.reload();
        })
        .catch(err => console.error(err));
    }
  }

  const hideErrorMessage = () => {
    const wrongDataMessage = document.getElementById("wrong-data-alert");
    if (wrongDataMessage.classList.contains("not-empty"))
      wrongDataMessage.classList.remove("not-empty");
  }

  const handleChanges = (event) => {
    event.target.id === "studentCode"
      ? setStudentCode(event.target.value)
      : setPassword(event.target.value);

    hideErrorMessage();
  }

  const customStyles = {
    content: {
      position: "absolute",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: "30%",
      height: '20%',
      transform: 'translate(-50%, -50%)',
      borderRadius: "50px"
    },
    overlay: {
      backgroundColor: 'transparent'
    }
  };

  useEffect(() => ReactModal.setAppElement(".login-container"), [])

  return (
    <div className='login-container'>
      <ReactModal
        isOpen={loader}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='modal-container'>
          <p>Logowanie...</p>
        </div>
      </ReactModal>

      <div className='login-prompt'>
        <h1>Zaloguj się, żeby zobaczyć zawartość strony.</h1>
      </div>
      <div className='login-data'>
        <input id='studentCode' type="text" placeholder='Kod ucznia' value={studentCode} onChange={handleChanges} />
        <input type="password" placeholder='Hasło' value={password} onChange={handleChanges} />
        <p id='wrong-data-alert'>Uzupełnij wszystkie pola.</p>
        <div className='login-submit'>
          <button onClick={onSubmit} >Zaloguj</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
