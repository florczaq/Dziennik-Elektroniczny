import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Comments from './components/Comments';
import Grades from './components/Grades';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import MessageReader from './components/MessageReader';
import Messages from './components/Messages';
import NewMessage from './components/NewMessage';
import News from './components/News';
import Sidebar from './components/Sidebar';
import StudentInfo from './components/StudentInfo';
import Timetable from './components/Timetable';
import * as Session from './connection/Session';

const Element = ({ Component }) => {
  return <div className='content'>
    <Header />
    {Component !== MainPage && <Sidebar />}
    {Session.isUserLoggedIn ? <Component /> : <LoginPage />}
  </div>
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Element Component={MainPage} />} />
          <Route path='/grades' element={<Element Component={Grades} />} />
          <Route path='/comments' element={<Element Component={Comments} />} />
          <Route path='/student-info' element={<Element Component={StudentInfo} />} />
          <Route path='/timetable' element={<Element Component={Timetable} />} />
          <Route path='/new-message' element={<Element Component={NewMessage} />} />
          <Route path='/messages' element={<Element Component={Messages} />} />
          <Route path='/messages/read' element={<Element Component={MessageReader} />} />
          <Route path='/news' element={<Element Component={News} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
