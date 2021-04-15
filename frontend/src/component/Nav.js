import React, { useContext } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import UserContext from "../services/contextUser";

const Nav = () => {
  console.log("dgdbgbz");
  // const token = JSON.parse(localStorage.getItem("token"));

  // function tomarRol() {
  //   const token = JSON.parse(localStorage.getItem("token"));
  //   if (token !== null) {
  //     const rol = token.rol;
  //     const rolName = rol.name;
  //     const vacio = "vacio";
  //     if (rolName !== null) {
  //       return rolName;
  //     }
  //     if (rolName === null) {
  //       return vacio;
  //     }
  //   }
  // }
  // const rolName = tomarRol();
  // const { token, rolName } = useRolToken();
  // console.log(token);
  // console.log(rolName);
  const userContext = useContext(UserContext);
  const token = userContext.token;
  const rolName = userContext.rolName;
  console.log(token);
  console.log(rolName);
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
            <Button type="submit" variant="outlined" color="secondary">
              Buscar
            </Button>
          </div>
        </form>
      </div>
      <div className="header-links">
        <Link to="/">Inicio</Link>
        <Link to="#">Libros</Link>
        <Link to="/presentacion">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="#">Carrito</Link>
        {token ? (
          <Link to="/micuenta">Mi cuenta</Link>
        ) : (
          <Link to="/login">Iniciar Sesion</Link>
        )}

        {token && rolName === "Admin" ? (
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
