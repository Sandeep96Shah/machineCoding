import React, { useState } from "react";
import "./modal.css";
import ModalBody from "./modalBody";

const Modal = () => {
  const [isModal, setIsModal] = useState(false);
  const handleModal = () => setIsModal((prevState) => !prevState);

  const handleSubmit = () => handleModal();
  return (
    <div className="modal-container">
      {isModal ? (
        <ModalBody
          title="Modal Header"
          onClose={handleModal}
          onSubmit={handleSubmit}
          isFooter
        >
          <p className="modal-content">This is replica of antd Modal</p>
        </ModalBody>
      ) : null}
      <button className="click-me-button" onClick={handleModal}>Click Me</button>
    </div>
  );
};

export default Modal;
