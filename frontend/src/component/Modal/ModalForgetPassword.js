import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import Button from "@material-ui/core/Button";

const ModalForgetPassword = () => {
  const [showModal, setModal] = useState(true);
  return (
    <div>
      {/* Modal */}
      <div className="modalLogin">
        <Modal show={showModal} onHide={() => setModal(true)}>
          <ModalHeader>
            <ModalTitle>Enviar mail para recuperar contraseña</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Button color="secundary" onClick={() => setModal(false)}>
              Cerrar
            </Button>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default ModalForgetPassword;
