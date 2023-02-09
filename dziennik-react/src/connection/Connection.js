import axios from "axios";

const localhost = "http://localhost:8080";

//Pobiernie informacji o uczniu według id 
export const getStudentInfo = (id) => {
  return axios.get(`${localhost}/student/${id}/info`);
}

// Pobiera widomości ucznia według kodu ucznia
export const getStudentMessages = (studentCode) => {
  return axios.get(`${localhost}/messages?c=${studentCode}`);
}

// Wysyła nową wiadomość 
export const sendNewMessage = (message) => {
  return axios.post(`${localhost}/messages/new`, message)
}

// Zmienia status wiadomości na odczytaną
export const changeMessageState = (id) => {
  return axios.put(`${localhost}/messages/read?id=${id}`);
}

// Pobiera aktualności szkolne
export const getSchoolNews = () => {
  return axios.get(`${localhost}/school/news`);
}

// Pobiera oceny ucznia według id
export const getStudentGrades = (id) => {
  return axios.get(`${localhost}/student/${id}/grades`);
}

// Pobiera plan lekcji według kodu klasy
export const getStudentTimetable = (classCode) => {
  return axios.get(`${localhost}/student/timetable?classCode=4ig`);
}

// Sprawdza poprawność logowania
export const loginStudent = (studentCode, password) => {
  return axios.get(`${localhost}/login?s=${studentCode}&p=${password}`)
}

// Pobiera uwagi ucznia
export const getStudentComments = (id) => {
  return axios.get(`${localhost}/student/${id}/comments`);
}

// Pobiera list kodów i nazwisko nauczycieli
export const getTeachersList = () => {
  return axios.get(`${localhost}/school/teachers`)
}

