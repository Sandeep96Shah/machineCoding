import React, { useRef, useState } from "react";
import "./toast.css";

const Toast = () => {
  const [toastList, setToastList] = useState([]);
  const toastRef = useRef({});

  const handleCloseToast = ({ toastId }) => {
    clearTimeout(toastRef.current[toastId]);
    delete toastRef.current[toastId];
    setToastList((prevToastList) => {
      const updatedToastList = prevToastList.filter(({ id }) => id !== toastId);
      return updatedToastList;
    });
  };
  const handleAddToast = ({ message, type }) => {
    const id = new Date().getTime();
    setToastList((prevToastList) => [...prevToastList, { message, type, id }]);
    toastRef.current[id] = setTimeout(() => handleCloseToast({ toastId: id }), 5000);
  };

  return (
    <div>
      <div className="toast-container">
        {toastList.map(({ message, type, id }) => (
          <div className={`toast ${type}`}>
            {message}{" "}
            <span
              className="cancel"
              onClick={() => handleCloseToast({ toastId: id })}
            >
              X
            </span>
          </div>
        ))}
      </div>
      <div className="toast-options-container">
        <button
          onClick={() =>
            handleAddToast({ message: "Success", type: "success" })
          }
        >
          Success
        </button>
        <button
          onClick={() => handleAddToast({ message: "Info", type: "info" })}
        >
          Info
        </button>
        <button
          onClick={() =>
            handleAddToast({ message: "Warning", type: "warning" })
          }
        >
          Warning
        </button>
        <button
          onClick={() => handleAddToast({ message: "Error", type: "error" })}
        >
          Error
        </button>
      </div>
    </div>
  );
};

export default Toast;
