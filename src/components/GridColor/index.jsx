import React, { useState } from "react";
import "./styles.css";

const defaultValue = [true, true, true, true, true, true, true, true, true];

const GridColor = () => {
  const [matrix, setMatrix] = useState(defaultValue);

  const handleOnClick = (itemIndex) => {
    const updatedMatrix = matrix.map((item, index) =>
      index === itemIndex ? !item : item
    );
    setMatrix(updatedMatrix);
  };

  return (
    <div className="App">
      {matrix.map((item, index) => (
        <p
          key={index}
          className={item ? `item-container` : "black-bg"}
          onClick={() => handleOnClick(index)}
        >
          {item ? "True" : "False"}
        </p>
      ))}
    </div>
  );
}
export default GridColor;
