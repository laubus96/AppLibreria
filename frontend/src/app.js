import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//import { tomarRol } from "./helper";
/* componentes */
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import ModalForgetPassword from "./component/Modal/ModalForgetPassword";
import Register from "./component/Register/Register.js";
import Presentacion from "./component/Presentacion/Presentacios";
import Contacto from "./component/Contacto/Contacto";
import Cuenta from "./component/Cuenta/Cuenta";
import Nav from "./component/Nav";
import ForgetPassword from "./component/ForgetPassword/ForgetPassword";
import BooksSearchGenere from "./component/Books/BooksSearchGenere";

/* estilos */
import "./app.css";
//import Input from "@material-ui/core/Input";
//import Button from "@material-ui/core/Button";
import "bootstrap/dist/css/bootstrap.css";
/* iconos */
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";

const app = () => {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <Nav></Nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route
              path="/modalForgetPassword"
              component={ModalForgetPassword}></Route>
            <Route path="/registro" component={Register}></Route>
            <Route path="/presentacion" component={Presentacion}></Route>
            <Route path="/contacto" component={Contacto}></Route>
            <Route path="/micuenta" component={Cuenta}></Route>
            <Route
              path="/forgetPassword/:token"
              component={ForgetPassword}></Route>
            <Route
              path="/booksSearchGenere"
              component={BooksSearchGenere}></Route>
          </Switch>
        </main>
        <footer>
          <div className="footer">
            <div className="logos">
              <Link to="/">
                <img className="img" src="/images/TuLogoSueño.png" alt=""></img>
              </Link>
            </div>
            <div>
              <p>
                <strong>Contactanos</strong>
              </p>
              <div className="campo">
                <span>
                  <LocationOnIcon color="action" />
                </span>
                <p className="datosFooter">Av. Ambrosio Olmos 900</p>
              </div>
              <div className="campo">
                <span>
                  <LocalPhoneIcon color="action" />
                </span>
                <p className="datosFooter">(0351)-854712 / 254789</p>
              </div>

              <div className="campo">
                <span>
                  <PhoneAndroidIcon />
                </span>
                <p className="datosFooter">(0351)-9856589 / 6958231</p>
              </div>
              <div className="campo">
                <span>
                  <EmailIcon />
                </span>
                <p className="datosFooter">tusueñolibreria@gmail.com</p>
              </div>
            </div>
            <div className="spanFooter">
              <p>
                <strong>Paseo Villa Rivera Indarte</strong>
              </p>
              <p className="datosFooter">Bodereau esq. Ricardo Rojas</p>
              <p className="datosFooter">Local 508</p>
              <p className="datosFooter">03543-895632</p>
            </div>
            <div className="spanFooter">
              <p>
                <strong>Shopping Dinosaurio Mall</strong>
              </p>
              <p className="datosFooter">Rodríguez del Busto 4086</p>
              <p className="datosFooter">Local 1059</p>
              <p className="datosFooter">0351-789546</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default app;
