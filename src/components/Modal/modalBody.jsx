import React, { useEffect, useRef } from "react";
import "./modal.css";

const ModalBody = ({
  title = "Modal Header",
  onClose = () => {},
  children,
  isFooter = true,
  onSubmit = () => {}
}) => {
    const modalBodyRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(modalBodyRef.current && !modalBodyRef.current.contains(event.target)) onClose();
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [onClose])

  return (
    <div className="modal-body-container">
      <div className="body-container" ref={modalBodyRef}>
        <div className="header-container">
          <p className="header-title">{title}</p>
          <p className="close-icon" onClick={onClose}>X</p>
        </div>
        {children}
        {isFooter ? <div className="footer-buttons">
            <button className="primary-button" onClick={onSubmit}>Submit</button>
            <button className="secondary-button" onClick={onClose} >Cancel</button>
        </div> : null}
      </div>
    </div>
  );
};

export default ModalBody;
