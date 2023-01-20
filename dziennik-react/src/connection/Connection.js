import axios from "axios";

const localhost = "http://localhost:8080";

export const getStudentInfo = (id) => {
  return axios.get(`${localhost}/student/${id}/info`);
}

