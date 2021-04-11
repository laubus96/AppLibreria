import React from "react";
import "./home.css";

const home = () => {
  return (
    <div>
      {/* Slaider */}
      <div className="slider">
        <ul>
          <li>
            <img
              className="imagenesSilder"
              src="/images/prueba1.png"
              alt=""></img>
          </li>
          <li>
            <img
              className="imagenesSilder"
              src="/images/Prueba2.jpg"
              alt=""></img>
          </li>
          <li>
            <img
              className="imagenesSilder"
              src="/images/LosCienAños.png"
              alt=""></img>
          </li>
          <li>
            <img
              className="imagenesSilder"
              src="/images/LaReinaSola.jpg"
              alt=""></img>
          </li>
        </ul>
      </div>
      {/* Slaider mas vendidos*/}

      <h1>Mas vendidos</h1>
      <p>En desarollo</p>

      {/* Slaider mejor rankiados*/}
      <h1>Mas rankiados</h1>
      <p>En desarollo</p>
    </div>
  );
};

export default home;
