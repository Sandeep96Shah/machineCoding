import React, { useEffect, useState } from "react";
import "./progressBar.css";

const Bar = ({ progress }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setValue(progress);
    }, 1000);
  }, []);
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{
          transform: `translateX(${value - 100}%)`,
          color: progress < 7 ? "black" : "white",
        }}
        role="progress Bar"
        aria-valuenow={progress}
        aria-vauemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

export default Bar;
