import React, { useState } from "react";
import { Link } from "react-router-dom";
/* Servicios */
import { loginService } from "../../services/loginService";
/* Estilos */
import "./login.css";
/* materialUI */
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Input from "@material-ui/core/Input";

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
      <section>
        <div className="form">
          <form onSubmit={submitHandle}>
            <div className="title">
              <h2>Iniciar Sesion</h2>
            </div>
            <div className="campos">
              <span>
                <PersonIcon />
              </span>
              <span>Usuario:</span>
              <Input
                type="text"
                name="userName"
                id="userName"
                className="input"
                onChange={handleInputChange}></Input>
            </div>
            <div className="campos">
              <span>
                <LockIcon></LockIcon>
              </span>
              <span id="password">Password: </span>
              <Input
                type="password"
                id="password"
                name="password"
                onChange={handleInputChange}></Input>
            </div>
            <div className="preguntas">
              <Link>
                <span>¿Has olvidado tu contraseña?</span>
              </Link>
            </div>
            <div className="boton">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<KeyboardArrowRightIcon />}>
                Ingresar
              </Button>

              <div className="preguntas">
                <Link>
                  <span>¿No tienes una cuenta?</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
