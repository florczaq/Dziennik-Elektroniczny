import React, { useEffect, useState } from 'react';
import { loginStudent } from '../connection/Connection';
import { studentLogin } from '../connection/Session';
import "./LoginPage/LoginPage.css";
import Loader from './LoginPage/Loader';

const LoginPromt = () => {
  return <div className='login-prompt'>
    <h1>Zaloguj się, żeby zobaczyć zawartość strony.</h1>
  </div>
}

const LoginPage = () => {
  const [studentCode, setStudentCode] = useState("");
  const [password, setPassword] = useState("");
  const [showLoader, setLoader] = useState(false);

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


  return (
    <div className='login-container'>
      
      <Loader showLoader={showLoader} />
      <LoginPromt/>

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
