import axios from "axios";

const localhost = "http://localhost:8080";

export const getStudentInfo = (id) => {
  return axios.get(`${localhost}/student/${id}/info`);
}

export const getStudentMessages = (id) => {
  return axios.get(`${localhost}/student/${id}/messages`);
}

export const sendNewMessage = (message) => {
  return axios.post(`${localhost}/newMessage`, message)
}

export const changeMessageState = (id) => {
  return axios.put(`${localhost}/messages/read?id=${id}`);
}

export const getSchoolNews = () => {
  return axios.get(`${localhost}/school/news`);
}

export const getStudentGrades = (id) => {
  return axios.get(`${localhost}/student/${id}/grades`);
}

export const getStudentTimetable = (classCode) => {
  return axios.get(`${localhost}/student/timetable?classCode=4ig`);
}

export const loginStudent = (studentCode, password) => {
  return axios.get(`${localhost}/login?s=${studentCode}&p=${password}`)
}

export const getStudentComments = (id) => {
  return axios.get(`${localhost}/student/${id}/comments`);
}