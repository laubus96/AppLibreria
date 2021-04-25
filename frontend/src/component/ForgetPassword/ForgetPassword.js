import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  getTokenForgetPassport,
  changePassword,
} from "../../services/forgetPasswordService";
import { validarPassword } from "../../helper";

// estilos

import "./forgetPassword.css";
//   material-ui
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
const ForgetPassword = () => {
  const history = useHistory();
  // Estado de errores
  const [errorPasswordVacio, setErrorPasswordVacio] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordVacioRepi, setErrorPasswordVacioRepi] = useState("");
  const [errorPasswordRepi, setErrorPasswordRepi] = useState("");
  const [errorPasswordComfir, setErrorPasswordComfir] = useState("");
  const [errors, setError] = useState(false);
  // estados
  const [password, setPassword] = useState();
  const [passwordRepi, setPasswordRepi] = useState();
  const [tokenReset, setTokenReset] = useState();
  const [resVerify, setResVerify] = useState();

  //mandar token y verificar su aunteticidad
  const tokenPassword = useParams();
  useEffect(() => {
    console.log(tokenPassword);
    setTokenReset(tokenPassword);
    setResVerify(getTokenForgetPassport(tokenReset));
  }, []);

  const sumbitForgetPassword = (e) => {
    e.preventDefault();
    setError(validateData());

    if (!errors) {
      return;
    }
    if (errors) {
      changePassword(password);
      console.log(password);
      history.push("/");
    }
  };
  const changeForgetPassword = (e) => {
    e.preventDefault();
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  const changeForgetPasswordRepi = (e) => {
    e.preventDefault();
    setPasswordRepi({ ...passwordRepi, [e.target.name]: e.target.value });
  };

  // validaciones
  const validateData = () => {
    setErrorPasswordVacio("");
    setErrorPassword("");
    setErrorPasswordComfir("");
    setErrorPasswordVacioRepi("");
    setErrorPasswordRepi("");
    let isValid = true;
    if (password === "") {
      setErrorPasswordVacio("Debe ingresar los datos*");
      isValid = false;
    }
    if (password !== "" && !validarPassword(password)) {
      setErrorPassword(
        "Ingrese una contraseña de largo entre 4 y 12 caracteres*"
      );
      isValid = false;
    }
    if (passwordRepi === "") {
      setErrorPasswordVacioRepi("Debe ingresar los datos*");
      isValid = false;
    }
    if (passwordRepi !== "" && !validarPassword(passwordRepi)) {
      setErrorPasswordRepi(
        "Ingrese una contraseña de largo entre 4 y 12 caracteres*"
      );
    }

    if (password !== passwordRepi) {
      setErrorPasswordComfir("La contraseña y la confirmación no son iguales.");
      isValid = false;
    }
    return isValid;
  };
  return (
    <div className="container">
      {resVerify ? (
        <div className="row justify-content-md-center">
          <div className="form">
            <form onSubmit={sumbitForgetPassword}>
              <div className="title">
                <h1>
                  <strong>Ingrese su contraseña nueva</strong>
                </h1>
              </div>
              <br></br>
              <div className="campos">
                <div className="largoSpan">
                  <span>
                    <LockIcon></LockIcon>
                  </span>
                  <span>Contraseña</span>
                </div>
                <div className="largoInput">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Ingrese conraseña"
                    onChange={changeForgetPassword}></Input>
                  {errors ? (
                    <span className="spanCampoObli">Campo obligatorio *</span>
                  ) : (
                    <span className="spanError">{errorPassword}</span>
                  )}
                  {errors ? (
                    <span className="spanCampoObli">Campo obligatorio *</span>
                  ) : (
                    <span className="spanError">{errorPasswordVacio}</span>
                  )}
                </div>
              </div>
              <div className="campos">
                <div className="largoSpan">
                  <span>
                    <LockIcon></LockIcon>
                  </span>
                  <span>Contraseña</span>
                </div>
                <div className="largoInput">
                  <Input
                    type="password"
                    name="passwordRepi"
                    placeholder="Ingrese conraseña otra vez"
                    onChange={changeForgetPasswordRepi}></Input>
                  {errors ? (
                    <span className="spanCampoObli">Campo obligatorio *</span>
                  ) : (
                    <span className="spanError">{errorPasswordRepi}</span>
                  )}
                  {errors ? (
                    <span className="spanCampoObli">Campo obligatorio *</span>
                  ) : (
                    <span className="spanError">{errorPasswordVacioRepi}</span>
                  )}
                  {errors ? (
                    <span className="spanCampoObli">Campo obligatorio *</span>
                  ) : (
                    <span className="spanError">{errorPasswordComfir}</span>
                  )}
                </div>
              </div>
              <br></br>
              <div className="paddinBoton">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  startIcon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}>
                  {" "}
                  Cambiar contraseña
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h1>No tiene autorizacion</h1>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
