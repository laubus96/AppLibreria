import axios from "axios";

const env = "http://localhost:5000/";
export const loginService = (usuario) => {
  return axios.post(`${env}api/auth/singin`, usuario).then((res) => {
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data));
    }
    return res.data;
  });
};

export const registrarService = (usuario) => {
  return axios.post(`${env}api/auth/singup`, usuario).then((res) => {
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data));
    }
    return res.data;
  });
};
