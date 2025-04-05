import React from "react";
import "./tablePagination.css";

const Card = ({ thumbnail, title }) => {
  return (
    <div>
      <div className="product-card">
        <img className="image-element" src={thumbnail} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
