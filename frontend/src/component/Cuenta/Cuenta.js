import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import UserContext from "../../services/contextUser";
import { getUserById } from "../../services/userService";

const Cuenta = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();
  const cerrarSesion = () => {
    userContext.cerrarSesion();

    history.push("/");
  };
  const mostrar = () => {
    const user = getUserById();
    console.log(user);
  };
  return (
    <div>
      <h1>aegaee</h1>
      <Button type="button" color="secondary" onClick={cerrarSesion}>
        Cerrar sesion
      </Button>
      <Button type="button" color="secondary" onClick={mostrar}>
        mostrar
      </Button>
    </div>
  );
};

export default Cuenta;
