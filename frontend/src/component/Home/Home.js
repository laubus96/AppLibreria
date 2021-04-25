import React from "react";
import "./home.css";
import MoreSold from "./moreSold";
import "bootstrap/dist/css/bootstrap.css";
const Home = () => {
  return (
    <div className="container">
      {/* Slaider */}
      <div className="row">
        <div className="col-xl-12">
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
                  src="/images/banner oct-05.png"
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
        </div>
      </div>
      {/* Slaider mas vendidos*/}
      <div className="row align-self-center">
        <div className="col-xl-12">
          <div className="titleVendidos">
            <h1>
              <strong>Mas vendidos</strong>
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="large">
            <MoreSold></MoreSold>
          </div>
        </div>
      </div>

      {/* Slaider mejor rankiados*/}

      <div className="row">
        <div className="col-xl-12">
          <h1>Mas rankiados</h1>
          <p>En desarollo</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
