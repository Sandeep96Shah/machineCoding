import React, { useEffect, useState } from "react";
import "./pagination.css";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData((prevData) => [...prevData, ...data]);
      });
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((params) => {
        if(params[0].isIntersecting) setPage((prevPage) => prevPage + 1);
    })
    const lastImage = document?.querySelector(".image:last-child");
    if(lastImage) observer.observe(lastImage);
  }, [data])
  return (
    <div className="image-container">
      {data.map((item, index) => (
        <img
          key={index}
          className="image"
          src={item.download_url}
          alt={`image${index}`}
        />
      ))}
    </div>
  );
};

export default Pagination;
