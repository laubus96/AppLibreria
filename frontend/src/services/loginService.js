import axios from "axios";

// const env = "http://localhost:5000/";
export const loginService = (usuario) => {
  return axios.post("http://localhost:5000/api/auth/singin", usuario);
};
