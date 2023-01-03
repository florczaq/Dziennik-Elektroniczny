import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import MainPage from './components/MainPage';
import Grades from './components/Grades';
import Comments from './components/Comments';
import StudentInfo from './components/StudentInfo';
import Timetable from './components/Timetable';
import NewMessage from './components/NewMessage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Sidebar />
        {/* <MainPage /> */}
        {/* <Grades/> */}
        {/* <Comments /> */}
        {/* <StudentInfo/> */}
        {/* <Timetable /> */}
        {/* <NewMessage/> */}
      </div>
    </div>
  );
}

export default App;
