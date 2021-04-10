import React, { useState } from "react";
import { loginService } from "../../services/loginService";

const Login = () => {
  const [usuario, setUsuario] = useState({ userName: "", password: "" });

  const submitHandle = (e) => {
    e.preventDefault();
    loginService(usuario);
    console.log(usuario);
  };
  const handleInputChange = (e) => {
    e.preventDefault();

    // console.log(event.target.name)
    // console.log(event.target.value)
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={submitHandle}>
        <div>
          <h2>Sign-In</h2>
        </div>

        <div>
          <label id="userName"> Usuario</label>
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={handleInputChange}></input>
        </div>

        <div>
          <label id="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}></input>
        </div>

        <button type="submit" className="button primary">
          Signin
        </button>
      </form>
    </div>
  );
};

export default Login;
