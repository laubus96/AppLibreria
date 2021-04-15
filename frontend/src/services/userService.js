import axios from "axios";

const env = "http://localhost:5000/";
const token = JSON.parse(localStorage.getItem("token"));

export const getUserById = () => {
  return axios.get(`${env}user`, {
    headers: { "x-access-token": token.token },
  });
};
