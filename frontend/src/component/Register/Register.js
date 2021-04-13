import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// material-ui
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import MailIcon from "@material-ui/icons/Mail";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// servicios

import { registrarService } from "../../services/loginService";
import { validarPassword, validateEmail } from "../../helper";

import "./register.css";

const Register = () => {
  const history = useHistory();
  const inizialite = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    rol: "",
  };

  // estados de error
  const [errorFirstNameVacio, setErrorFirstNameVacio] = useState("");
  const [errorLastNameVacio, setErrorLastNameVacio] = useState("");
  const [errorUserNameVacio, setErrorUserNameVacio] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorEmailVacio, setErrorEmailVacio] = useState("");
  const [errorPasswordVacio, setErrorPasswordVacio] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordVacioRepi, setErrorPasswordVacioRepi] = useState("");
  const [errorPasswordRepi, setErrorPasswordRepi] = useState("");
  const [errorPasswordComfir, setErrorPasswordComfir] = useState("");
  const [errors, setError] = useState(false);

  // estados
  const [newUsuario, setNewUsuario] = useState(inizialite);
  const [passwordRepi, setPasswordRepi] = useState({ passwordRepi: "" });
  const submitRegister = (e) => {
    e.preventDefault();
    setError(validateData());

    if (!errors) {
      return;
    }
    if (errors) {
      registrarService(newUsuario);
      console.log(newUsuario);
      history.push("/");
    }
  };
  const handleOnChangeRegister = (e) => {
    e.preventDefault();
    setNewUsuario({ ...newUsuario, [e.target.name]: e.target.value });
  };
  const handleOnChangePasswordRepetido = (e) => {
    e.preventDefault();
    setPasswordRepi({ ...passwordRepi, [e.target.name]: e.target.value });
  };

  // validaciones
  const validateData = () => {
    setErrorFirstNameVacio("");
    setErrorLastNameVacio("");
    setErrorUserNameVacio("");

    setErrorEmail("");
    setErrorEmailVacio("");
    setErrorPasswordVacio("");
    setErrorPassword("");
    setErrorPasswordComfir("");
    setErrorPasswordVacioRepi("");
    setErrorPasswordRepi("");

    let isValid = true;
    if (newUsuario.firstName === "") {
      setErrorFirstNameVacio("Debe ingresar un nombre*");
      isValid = false;
    }
    if (newUsuario.lastName === "") {
      setErrorLastNameVacio("Debe ingresar un apellido*");
      isValid = false;
    }
    if (newUsuario.userName === "") {
      setErrorUserNameVacio("Debe ingresar un usuario*");
      isValid = false;
    }

    if (newUsuario.email === "") {
      setErrorEmailVacio("Debe ingresar un email*");
      isValid = false;
    }
    if (newUsuario.email !== "" && !validateEmail(newUsuario.email)) {
      setErrorEmail("Debes de ingresar un email válido*");
      isValid = false;
    }

    if (newUsuario.password === "") {
      setErrorPasswordVacio("Debe ingresar los datos*");
      isValid = false;
    }
    if (newUsuario.password !== "" && !validarPassword(newUsuario.password)) {
      setErrorPassword(
        "Ingrese una contraseña de largo entre 4 y 12 caracteres*"
      );
    }
    if (passwordRepi.passwordRepi === "") {
      setErrorPasswordVacioRepi("Debe ingresar los datos*");
      isValid = false;
    }
    if (
      passwordRepi.passwordRepi !== "" &&
      !validarPassword(passwordRepi.passwordRepi)
    ) {
      setErrorPasswordRepi(
        "Ingrese una contraseña de largo entre 4 y 12 caracteres*"
      );
    }

    if (newUsuario.password !== passwordRepi.passwordRepi) {
      setErrorPasswordComfir("La contraseña y la confirmación no son iguales.");
      isValid = false;
    }
    return isValid;
  };
  return (
    <div className="form">
      <form onSubmit={submitRegister}>
        <div className="title">
          <h1>Registrarse</h1>
          <p className="subTitle">Llene los datos para registrarse</p>
        </div>
        <div className="campos">
          <div className="largoSpan">
            <span>
              <PersonIcon></PersonIcon>
            </span>
            <span>Nombre: </span>
          </div>
          <div className="largoInput">
            <Input
              type="text"
              name="firstName"
              placeholder="Ingresar tu nombre"
              onChange={handleOnChangeRegister}></Input>

            {errors ? (
              <span className="spanCampoObli">Campo obligatorio *</span>
            ) : (
              <span className="spanError">{errorFirstNameVacio}</span>
            )}
          </div>
        </div>
        <div className="campos">
          <div className="largoSpan">
            <span>
              <PersonIcon></PersonIcon>
            </span>
            <span>Apellido: </span>
          </div>
          <div className="largoInput">
            <Input
              type="text"
              name="lastName"
              placeholder="Ingresar tu apellido"
              onChange={handleOnChangeRegister}></Input>
            {errors ? (
              <span className="spanCampoObli">Campo obligatorio *</span>
            ) : (
              <span className="spanError">{errorLastNameVacio}</span>
            )}
          </div>
        </div>
        <div className="campos">
          <div className="largoSpan">
            <span>
              <AccountCircleIcon></AccountCircleIcon>
            </span>
            <span>Usuario: </span>
          </div>
          <div className="largoInput">
            <Input
              type="text"
              name="userName"
              placeholder="Ingresar un usuario"
              onChange={handleOnChangeRegister}></Input>
            {errors ? (
              <span className="spanCampoObli">Campo obligatorio *</span>
            ) : (
              <span className="spanError">{errorUserNameVacio}</span>
            )}
          </div>
        </div>
        <div className="campos">
          <div className="largoSpan">
            <span>
              <MailIcon></MailIcon>
            </span>
            <span>Email: </span>
          </div>
          <div className="largoInput">
            <Input
              type="text"
              name="email"
              placeholder="Ingresar un email"
              onChange={handleOnChangeRegister}></Input>
            {errors ? (
              <span className="spanCampoObli">Campo obligatorio *</span>
            ) : (
              <span className="spanError">{errorEmail}</span>
            )}
            {errors ? (
              <span className="spanCampoObli">Campo obligatorio *</span>
            ) : (
              <span className="spanError">{errorEmailVacio}</span>
            )}
          </div>
        </div>
        <div className="campos">
          <div className="largoSpan">
            <span>
              <LockIcon></LockIcon>
            </span>
            <span>Contraseña:</span>
          </div>
          <div className="largoInput">
            <Input
              type="password"
              name="password"
              placeholder="Ingrese una contraseña 4-12"
              onChange={handleOnChangeRegister}></Input>
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
            <span>Contraseña:</span>
          </div>
          <div className="largoInput">
            <Input
              type="password"
              placeholder="Repita contraseña"
              name="passwordRepetido"
              onChange={handleOnChangePasswordRepetido}></Input>
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
        <div className="campos">
          <div className="largoSpan">
            <span>
              <AssignmentIndIcon></AssignmentIndIcon>
            </span>
            <span>Rol: </span>
          </div>
          <div className="largoInput">
            <Input
              type="text"
              placeholder="campo obligatorio"
              disabled
              value="Admin"
              name="rol"
              onChange={handleOnChangeRegister}></Input>
          </div>
        </div>
        <div className="preguntas">
          <Link to="/login">
            <span>¿Ya tiene una cuenta? </span>
          </Link>
        </div>
        <div className="boton">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            startIcon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}>
            Registrarse
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
