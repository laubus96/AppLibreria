import axios from "axios";

const env = "http://localhost:5000/";
export const forgetPasswordService = (email) => {
  axios.post(`${env}api/forgotpassword`, email);
};
