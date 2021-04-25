import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserById } from "../actions/userActions";
import "./nav.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Nav = () => {
  console.log("dgdbgbz");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.singinUser);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img className="img" src="/images/TuLogoSueño.png" alt=""></img>
        </Link>
      </div>
      <div>
        <form className="formApp">
          <div className="inputApp">
            <input
              type="text"
              placeholder="Buscar libro"
              className="form-control"></input>
          </div>
          <div className="boton">
            <Button type="submit" variant="contained" color="secondary">
              Buscar
            </Button>
          </div>
        </form>
      </div>
      <div className="header-links">
        <Link to="/">Inicio</Link>
        <Link to="/booksSearchGenere">Libros</Link>
        <Link to="/presentacion">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="#">Carrito</Link>
        {userLogin.token !== "null" ? (
          <Link
            to="/micuenta"
            onClick={(user) => {
              dispatch(getUserById());
            }}>
            Mi cuenta
          </Link>
        ) : (
          <Link to="/login">Iniciar Sesion</Link>
        )}

        {userLogin.token !== "null" && userLogin.rolName === "Admin" ? (
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
    </div>
  );
};

export default Nav;
