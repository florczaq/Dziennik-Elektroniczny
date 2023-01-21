import axios from "axios";

const localhost = "http://localhost:8080";

export const getStudentInfo = (id) => {
  return axios.get(`${localhost}/student/${id}/info`);
}

export const getStudentMessages =(id)=>{
  return axios.get(`${localhost}/student/${id}/messages`);
}

export const sendNewMessage = (message) => {
  return axios.post(`${localhost}/newMessage`, message)
}

export const changeMessageState = (id) =>{
  return axios.put(`${localhost}/messages/read?id=${id}`);
}