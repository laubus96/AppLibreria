import axios from "axios";

const env = "http://localhost:5000/";
export const forgetPasswordService = async (email) => {
  return await axios.post(`${env}api/forgot`, email);
};

export const changePassword = async (password) => {
  return await axios.put(`${env}api/changePassword`, password);
};

export const getTokenForgetPassport = async (token) => {
  return await axios.get(`${env}api/resetVerify`, {
    params: { resetPasswordToken: token },
  });
};
