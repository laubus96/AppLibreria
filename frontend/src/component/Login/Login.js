import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalTitle } from "react-bootstrap";
import { validarPassword, validateEmail } from "../../helper";
/* Servicios */
import { loginService } from "../../services/loginService";
import { forgetPasswordService } from "../../services/forgetPasswordService";
/* Estilos */
import "./login.css";
/* materialUI */
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Input from "@material-ui/core/Input";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import EmailIcon from "@material-ui/icons/Email";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";

const Login = () => {
  // manejor de validaciones
  const [errorUsuarioVacio, setErrorUsuarioVacio] = useState("");
  const [errorPasswordVacio, setErrorPasswordVacio] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorEmailVacio, setErrorEmailVacio] = useState("");
  const [errors, setError] = useState(false);

  // estados
  const [usuario, setUsuario] = useState({ userName: "", password: "" });
  const [emailForget, setEmailForget] = useState({ email: "" });
  const [showModal, setModal] = useState(false);
  // enviar datos para recuperar la contraseña

  const cerrarModal = () => {
    setModal(false);
  };
  const submitHandleForgetPassword = (e) => {
    e.preventDefault();
    setError(validateDataModal());
    if (!errors) {
      return;
    }
    if (errors) {
      forgetPasswordService(emailForget);
      cerrarModal();
    }
  };
  const handleInputChangeForgetPassword = (e) => {
    e.preventDefault();

    setEmailForget({ ...emailForget, [e.target.name]: e.target.value });
  };

  // enviar datos para el login
  const submitHandle = (e) => {
    e.preventDefault();
    setError(validateData());

    if (!errors) {
      return;
    }
    if (errors) {
      loginService(usuario);
    }
  };
  const handleInputChange = (e) => {
    e.preventDefault();

    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //validaciones modal
  const validateDataModal = () => {
    setErrorEmail("");
    setErrorEmailVacio("");
    let isValid = true;
    if (emailForget.email === "") {
      setErrorEmailVacio("Debe ingresar un email*");
      isValid = false;
    }
    if (emailForget.email !== "" && !validateEmail(emailForget.email)) {
      setErrorEmail("Debes de ingresar un email válido*");
      isValid = false;
    }

    return isValid;
  };

  // validaciones login

  const validateData = () => {
    setErrorPassword("");
    setErrorUsuarioVacio("");
    setErrorPasswordVacio("");
    let isValid = true;
    if (usuario.userName === "") {
      setErrorUsuarioVacio("Debe ingresar un usuario*");
      isValid = false;
    }
    if (usuario.password === "") {
      setErrorPasswordVacio("Debe ingresar una contraseña*");
      isValid = false;
    }
    if (
      usuario.password !== "" &&
      usuario.password !== !validarPassword(usuario.password)
    ) {
      setErrorPassword(
        "Ingrese una contraseña de largo entre 4 y 12 caracteres*"
      );
      isValid = false;
    }
    return isValid;
  };
  const deleteSpan = (e) => {
    e.preventDefault();
    const b = document.getElementById("span01");
    const c = document.getElementById("span1");
    b.removeChild(c);
  };

  return (
    <div>
      <section>
        {/* Modal */}
        <div>
          <Modal className="modalLogin" show={showModal}>
            <ModalHeader>
              <ModalTitle className="modalTitle">
                ¿Olvidaste tu contraseña?
              </ModalTitle>
            </ModalHeader>
            <ModalBody>
              <br></br>
              <form onSubmit={submitHandleForgetPassword}>
                <p className="contenidoModal">
                  Debera ingresar su mail, y asi le llegara un enlase para poder
                  cambiar la contraseña a una nueva.
                </p>
                <div className="campos">
                  <span>
                    <EmailIcon></EmailIcon>
                  </span>
                  <span className="inputModal">Ingrese su mail: </span>
                  <Input
                    type="text"
                    name="email"
                    placeholder="campo obligatorio"
                    id="mail"
                    onChange={handleInputChangeForgetPassword}></Input>
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
                <br></br>

                <div className="buttonModal">
                  <Button
                    color="secondary"
                    variant="contained"
                    startIcon={<CloseIcon></CloseIcon>}
                    onClick={() => setModal(false)}>
                    Cerrar
                  </Button>
                </div>
                <div className="buttonModal">
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    startIcon={<SendIcon></SendIcon>}>
                    Enviar mail
                  </Button>
                </div>
              </form>
            </ModalBody>
          </Modal>
        </div>

        {/* Formulario para iniciar sesion */}
        <div className="form">
          <form onSubmit={submitHandle}>
            <div className="title">
              <h2>Iniciar Sesion</h2>
              <p className="subTitle">Llene los datos para iniciar sesion</p>
            </div>

            <div className="campos">
              <div className="largoSpan">
                <span>
                  <PersonIcon />
                </span>
                <span>Usuario:</span>
              </div>
              <div className="largoInput">
                <Input
                  type="text"
                  name="userName"
                  placeholder="Ingrese su usuario"
                  id="userName"
                  className="input"
                  onChange={handleInputChange}></Input>

                {errors ? (
                  <span id="span01">
                    <span id="span1" className="spanCampoObli"></span>
                  </span>
                ) : (
                  <span onChange={deleteSpan} className="spanError">
                    {errorUsuarioVacio}
                  </span>
                )}
              </div>
            </div>
            <div className="campos">
              <div className="largoSpan">
                <span>
                  <LockIcon></LockIcon>
                </span>
                <span id="password">Password: </span>
              </div>
              <div className="largoInput">
                <Input
                  type="password"
                  id="password"
                  placeholder="Ingrese su contraseña"
                  name="password"
                  onChange={handleInputChange}></Input>

                <span>
                  {errors ? (
                    <span className="spanCampoObli"></span>
                  ) : (
                    <span className="spanError">{errorPassword}</span>
                  )}
                  {errors ? (
                    <span className="spanCampoObli"></span>
                  ) : (
                    <span className="spanError">{errorPasswordVacio}</span>
                  )}
                </span>
              </div>
            </div>
            <div className="preguntas">
              <Link>
                <span onClick={() => setModal(true)}>
                  ¿Has olvidado tu contraseña?
                </span>
              </Link>
            </div>
            <div className="boton">
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                startIcon={<KeyboardArrowRightIcon />}>
                Ingresar
              </Button>

              <div className="preguntas">
                <Link to="/registro">
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
