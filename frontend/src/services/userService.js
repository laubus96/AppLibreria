import axios from "axios";

const env = "http://localhost:5000/";
const token = JSON.parse(localStorage.getItem("token"));

export const putUser = async (user) => {
  return await axios.put(`${env}user/update`, user, {
    headers: { "x-access-token": token },
  });
};
