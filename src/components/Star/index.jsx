import React, { useState } from "react";
import "./star.css";

const Star = ({ star = 10 }) => {
  const [selectedStarValue, setSelectedStarValue] = useState();
  const [hoverStarValue, setHoverStarValue] = useState(-1);
  const starList = new Array(star).fill(0);

  const handleSelectedStarValue = (starValue) =>
    setSelectedStarValue(starValue);

  const handleHoverStarValue = (starValue) => setHoverStarValue(starValue);

  return (
    <div>
      {starList.map((_, index) => (
        <span
          key={index}
          onClick={() => handleSelectedStarValue(index)}
          onMouseEnter={() => handleHoverStarValue(index)}
          onMouseLeave={() => handleHoverStarValue(-1)}
          className={
            (hoverStarValue === -1 && index <= selectedStarValue) ||
            index <= hoverStarValue
              ? "selected-star"
              : "star"
          }
        >
          ☆
        </span>
      ))}
    </div>
  );
};

export default Star;
