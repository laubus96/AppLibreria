import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { validateEmail } from "../../helper";
// servicios

import { putUser } from "../../actions/userActions";

// estilos
import "bootstrap/dist/css/bootstrap.css";
import "./cuenta.css";

// material-ui
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import CloseIcon from "@material-ui/icons/Close";

const Cuenta = () => {
  const dispatch = useDispatch();
  const getUser = useSelector((state) => state.getByIdUser);
  const userR = getUser;

  console.log(userR.email);
  const history = useHistory();

  // cerrar sesion
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rolName");
    history.push("/");
  };
  // mostrar los datos del usuario

  const inizialiteUser = {
    firstName: userR.firstName,
    lastName: userR.lastName,
    userName: userR.userName,
    email: userR.email,
  };

  // estados de error
  const [errorFirstNameVacio, setErrorFirstNameVacio] = useState("");
  const [errorLastNameVacio, setErrorLastNameVacio] = useState("");
  const [errorUserNameVacio, setErrorUserNameVacio] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorEmailVacio, setErrorEmailVacio] = useState("");
  const [errors, setError] = useState(false);

  // estados

  const [user, setUser] = useState(inizialiteUser);

  // enviar el usuario editado
  const submitRegister = (e) => {
    e.preventDefault();
    setError(validateData());

    if (!errors) {
      return;
    }
    if (errors) {
      dispatch(putUser(user));

      history.push("/");
    }
  };

  // tomar los datos modificados

  const handleOnChangeRegister = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // validaciones
  const validateData = () => {
    setErrorFirstNameVacio("");
    setErrorLastNameVacio("");
    setErrorUserNameVacio("");

    setErrorEmail("");
    setErrorEmailVacio("");

    let isValid = true;
    if (user.firstName === "") {
      setErrorFirstNameVacio("Debe ingresar un nombre*");
      isValid = false;
    }
    if (user.lastName === "") {
      setErrorLastNameVacio("Debe ingresar un apellido*");
      isValid = false;
    }
    if (user.userName === "") {
      setErrorUserNameVacio("Debe ingresar un usuario*");
      isValid = false;
    }

    if (user.email === "") {
      setErrorEmailVacio("Debe ingresar un email*");
      isValid = false;
    }
    if (user.email !== "" && !validateEmail(user.email)) {
      setErrorEmail("Debes de ingresar un email válido*");
      isValid = false;
    }

    return isValid;
  };

  return (
    <div className="contactos">
      <div className="container paddins">
        <div className="row">
          <div className="col-md-6">
            <div className="cart">
              <h1>
                <strong>Mi cuenta</strong>
              </h1>
              <div>
                <p className="subTitle">
                  <strong>Datos personales</strong>
                </p>
                <div className="letraChica">
                  <p>
                    Aquie dejamos una opcion para que usted pieda ver sus datos
                    y a su vez poder modifivalos segun sea necesario. V a poder
                    acer la cantdad de las veces que desee y en breve le vamos a
                    da una funcionalida dpara que ustdes pueda ver las compras
                    efectuadas
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form">
              <div>
                <form onSubmit={submitRegister}>
                  <div className="title">
                    <h1>
                      <strong>Modificar datos</strong>
                    </h1>
                    <p className="subTitle">Llene los datos para modificar</p>
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
                        value={user.firstName}
                        type="text"
                        name="firstName"
                        placeholder="Ingresar tu nombre"
                        onChange={handleOnChangeRegister}></Input>

                      {errors ? (
                        <span className="spanCampoObli"></span>
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
                        value={user.lastName}
                        type="text"
                        name="lastName"
                        placeholder="Ingresar tu apellido"
                        onChange={handleOnChangeRegister}></Input>
                      {errors ? (
                        <span className="spanCampoObli"></span>
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
                        value={user.userName}
                        type="text"
                        name="userName"
                        placeholder="Ingresar un usuario"
                        onChange={handleOnChangeRegister}></Input>
                      {errors ? (
                        <span className="spanCampoObli"></span>
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
                        value={user.email}
                        type="text"
                        name="email"
                        placeholder="Ingresar un email"
                        onChange={handleOnChangeRegister}></Input>
                      {errors ? (
                        <span className="spanCampoObli"></span>
                      ) : (
                        <span className="spanError">{errorEmail}</span>
                      )}
                      {errors ? (
                        <span className="spanCampoObli"></span>
                      ) : (
                        <span className="spanError">{errorEmailVacio}</span>
                      )}
                    </div>
                  </div>

                  <div className="paddinBoton">
                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      startIcon={
                        <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                      }>
                      Editar
                    </Button>
                    <Button
                      type="button"
                      color="secondary"
                      variant="contained"
                      startIcon={<CloseIcon></CloseIcon>}
                      onClick={cerrarSesion}>
                      Cerrar sesion
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuenta;
