import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

/* componentes */
import Home from "./component/Home";
import Login from "./component/Login/Login";
import ModalForgetPassword from "./component/Modal/ModalForgetPassword";
/* estilos */
import "./app.css";
/* iconos */
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";

const app = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="logo">
            <Link to="/">
              <img className="img" src="/images/TuLogoSueño.png" alt=""></img>
            </Link>
          </div>
          <div className="header-links">
            <Link to="/">Inicio</Link>
            <Link to="#">Libros</Link>
            <Link to="#">Nosotros</Link>
            <Link to="#">Contacto</Link>
            <Link to="#">Carrito</Link>
            <Link to="/login">Iniciar Sesion</Link>
            {token ? (
              <div className="dropdown">
                <Link href="#">Admin</Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Ventas</Link>
                    <Link to="/products">Libros</Link>
                    <Link to="/dashboard">Visualizaciones</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route
              path="/modalForgetPassword"
              component={ModalForgetPassword}></Route>
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
