import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./contacto.css";
/* iconos */
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import SubjectIcon from "@material-ui/icons/Subject";
import EmailIcon from "@material-ui/icons/Email";
import SendIcon from "@material-ui/icons/Send";
// material-ui
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const Contacto = () => {
  return (
    <div className="contactos">
      <div className="container paddins">
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="cart">
                <h4>
                  <strong>Ponte en contacto con nostros</strong>
                </h4>
                <div>
                  <p className="subTitle">
                    <strong>Contactanos</strong>
                  </p>
                  <div className="letraChica">
                    <p>
                      Aqui le dejamos una manera de poder contactarse con
                      nosotros, puede mandarnos una consulta sobre un libro o
                      una opinion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cart">
                <div>
                  <h3>
                    <strong>Mandanos tu consulta</strong>
                  </h3>
                </div>
                <form>
                  <div className="campos">
                    <span>
                      <EmailIcon></EmailIcon>
                    </span>
                    <span>Email</span>
                    <Input type="text"></Input>
                  </div>
                  <div className="campos">
                    <span>
                      <SubjectIcon></SubjectIcon>
                    </span>
                    <span>Asunto</span>
                    <Input type="text"></Input>
                  </div>
                  <div className="campos">
                    <span>
                      <ViewHeadlineIcon></ViewHeadlineIcon>
                    </span>
                    <span>Mensaje</span>
                    <textarea type="text" rows="4" cols="50"></textarea>
                  </div>
                  <Button
                    color="secondary"
                    variant="contained"
                    startIcon={<SendIcon />}>
                    Enviar{" "}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
