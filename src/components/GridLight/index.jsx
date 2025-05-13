import React, { useEffect, useState } from "react";
import "./gridLight.css";

const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

const GridLight = () => {
  const [grids, setGrids] = useState([]);

  const handleOnClick = (index) => {
    const isFilled = grids.findIndex((grid) => grid === index) !== -1;
    if(isFilled) return;
    setGrids((prevState) => [...prevState, index])
  };

  const getIsFilled = (index) => grids.findIndex((grid) => grid === index) !== -1;

  const lights = config.flat(1) || [];
  const noOfGridVisible = lights.filter((grid) => grid).length;

  const handleRemoveFilled = () => {
    for(let i = 0; i < grids.length; i++){
        setTimeout(() => {
            setGrids((prevState) => {
                const updatedState = prevState.slice(0, prevState.length - 1);
                return updatedState;
            })
        }, (i + 1) * 300);
    }
  }

  useEffect(() => {
    if(grids.length === noOfGridVisible) {
        handleRemoveFilled();
    }
  }, [grids])

  return (
    <div className="grid-template-container">
      {lights.map((item, index) => (
        <div key={index} className="outer-box">
          {item ? (
            <p className={`inner-box ${getIsFilled(index) ? "filled" : ""}`}onClick={() => handleOnClick(index)} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default GridLight;
