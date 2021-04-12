import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalTitle } from "react-bootstrap";
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
  const [usuario, setUsuario] = useState({ userName: "", password: "" });
  const [emailForget, setEmailForget] = useState({ email: "" });
  const [showModal, setModal] = useState(false);
  // enviar datos para recuperar la contraseña
  const submitHandleForgetPassword = (e) => {
    e.preventDefault();
    forgetPasswordService(emailForget);
    console.log(emailForget);
  };
  const handleInputChangeForgetPassword = (e) => {
    e.preventDefault();
    setEmailForget({ ...emailForget, [e.target.name]: e.target.value });
  };

  // enviar datos para el login
  const submitHandle = (e) => {
    e.preventDefault();
    loginService(usuario);
  };
  const handleInputChange = (e) => {
    e.preventDefault();

    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
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
                    id="mail"
                    onChange={handleInputChangeForgetPassword}></Input>
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
                    startIcon={<SendIcon></SendIcon>}
                    onClick={() => setModal(false)}>
                    Enviar mail
                  </Button>
                </div>
              </form>
            </ModalBody>
          </Modal>
        </div>
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
                <span onClick={() => setModal(true)}>
                  ¿Has olvidado tu contraseña?
                </span>
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
