import axios from "axios";
import {
  USER_SINGIN,
  USER_SINGUP,
  USER_UPDATE,
  USER_GET_ID,
} from "../constants/userContants";
const env = "http://localhost:5000/";
// login
const singin = (user) => async (dispach) => {
  const res = await axios.post(`${env}api/auth/singin`, user);
  console.log(res);
  localStorage.setItem("token", JSON.stringify(res.data.token));
  localStorage.setItem("rolName", JSON.stringify(res.data.rol.name));
  const token = JSON.parse(localStorage.getItem("token"));
  const rolName = JSON.parse(localStorage.getItem("rolName"));
  const userInfo = {
    token: token,
    rolName: rolName,
  };

  console.log(userInfo);

  if (token) {
    dispach({ type: USER_SINGIN, payload: userInfo });
  }
};
// register
const singup = (userUp) => async (dispach) => {
  const res = await axios.post(`${env}api/auth/singup`, userUp);
  dispach({ type: USER_SINGUP, payload: res });
};
// getUser
const getUserById = () => async (dispach, getState) => {
  const { singinUser: data } = getState();
  const res = await axios.get(`${env}user`, {
    headers: { "x-access-token": data.token },
  });

  const userInfos = {
    firstName: res.data.user.firstName,
    lastName: res.data.user.lastName,
    userName: res.data.user.userName,
    email: res.data.user.email,
  };
  console.log(userInfos.firstName);
  localStorage.setItem("user", JSON.stringify(userInfos));
  dispach({ type: USER_GET_ID, payload: userInfos });

  console.log(res);
};
// putUserss
const putUser = (putUser) => async (dispach, getState) => {
  const { singinUser: data } = getState();
  const res = await axios.put(`${env}user/update`, putUser, {
    headers: { "x-access-token": data.token },
  });
  dispach({ type: USER_UPDATE, payload: res.data });
};
export { singin, singup, getUserById, putUser };

//refresh
// const refrsh = () => async (dispach) => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   const rolName = JSON.parse(localStorage.getItem("rolName"));
//   const userInfo = {
//     token: token,
//     rolName: rolName,
//   };
//   const userNone = {
//     token: "null",
//     rolName: "",
//   };

//   console.log(userInfo);

//   if (token) {
//     dispach({ type: USER_SINGIN, payload: userInfo });
//   }
//   if (!token) {
//     dispach({ type: USER_SINGIN, payload: userNone });
//   }
// };
