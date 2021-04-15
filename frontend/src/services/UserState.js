import React, { useState } from "react";
import UserContext from "./contextUser";
import axios from "axios";

const UserState = (props) => {
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
        localStorage.setItem("token", JSON.stringify(res.data));
      }
      return res.data;
    });
  };

  const registrarService = (usuario) => {
    return axios.post(`${env}api/auth/singup`, usuario).then((res) => {
      if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data));
      }
      return res.data;
    });
  };

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
