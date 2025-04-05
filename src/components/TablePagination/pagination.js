import React from "react";
import "./tablePagination.css";

const Pagination = ({
  currentPage,
  handleOnPrevClick,
  pagesCount,
  handleOnNextClick,
  handleOnPageClick,
}) => {
  return (
    <div className="page-count-container">
      <button
        disabled={currentPage === 0}
        onClick={handleOnPrevClick}
        className="prev-next-button"
      >
        Prev
      </button>
      {pagesCount?.map((_, index) => (
        <p
          key={index}
          className="page-count"
          onClick={() => handleOnPageClick(index)}
        >
          {index}
        </p>
      ))}
      <button
        disabled={currentPage === pagesCount?.length - 1}
        onClick={handleOnNextClick}
        className="prev-next-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
