import React, { useEffect, useState } from "react";
import Card from "./card";
import { PAGE_COUNT, PRODUCT_API } from "./constants";
import Pagination from "./pagination";
import "./tablePagination.css";


const TablePagination = () => {
  const [products, setproducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const startValue = currentPage * PAGE_COUNT;
  const endValue = startValue + PAGE_COUNT;
  const totalPageCount = Math.ceil(products?.length / PAGE_COUNT);
  const pagesCount = [...Array(totalPageCount)];

  const getProductsList = async () => {
    const response = await fetch(PRODUCT_API);
    const data = await response.json();
    setproducts(data?.products);
  };

  const handleOnPageClick = (pageNumber) => setCurrentPage(pageNumber);
  const handleOnPrevClick = () => setCurrentPage((prevState) => prevState - 1);
  const handleOnNextClick = () => setCurrentPage((prevState) => prevState + 1);

  useEffect(() => {
    getProductsList();
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div className="products-container">
        {products
          ?.slice(startValue, endValue)
          ?.map(({ thumbnail, title }, index) => (
            <Card key={index} thumbnail={thumbnail} title={title} />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        handleOnNextClick={handleOnNextClick}
        handleOnPrevClick={handleOnPrevClick}
        handleOnPageClick={handleOnPageClick}
        pagesCount={pagesCount}
      />
    </div>
  );
};

export default TablePagination;
