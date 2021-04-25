import React, { useState } from "react";
import UserContext from "./contextUser";
import axios from "axios";

const UserState = (props) => {
  // login
  const inizialite = {
    token: "",
    rolName: "",
  };

  const [tokenRolState, setTokenRolState] = useState(inizialite);

  const env = "http://localhost:5000/";
  const loginService = (usuario) => {
    return axios.post(`${env}api/auth/singin`, usuario).then((res) => {
      const token = res.data;

      setTokenRolState({ token: res.data.token, rolName: token.rol.name });

      if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("rolName", JSON.stringify(token.rol.name));
      }
      return res.data;
    });
  };

  // registro
  const registrarService = (usuario) => {
    return axios.post(`${env}api/auth/singup`, usuario).then((res) => {
      if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      }
      return res.data;
    });
  };
  const token = JSON.parse(localStorage.getItem("token"));
  const rolName = JSON.parse(localStorage.getItem("rolName"));
  if (token && !tokenRolState.token) {
    setTokenRolState({ token: token, rolName: rolName });
  }

  // cerrar sesion

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    setTokenRolState({ token: "", rolName: "" });
  };

  return (
    <UserContext.Provider
      value={{
        token: tokenRolState.token,
        rolName: tokenRolState.rolName,
        loginService,
        registrarService,
        cerrarSesion,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
