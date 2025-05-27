import React, { useEffect, useState } from "react";
import "./styles.css";

const LIMIT = 10;
const API = "https://jsonplaceholder.typicode.com/posts";
const ITEM_HEIGHT = 40;

const LimitInfiniteList = () => {
  const [list, setList] = useState([]);
  const [indices, setIndices] = useState([0, LIMIT]);

  const visibleList = list.slice(indices[0], indices[1]);

  const fetchList = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        alert("Something went wrong, please try again!");
        return;
      }
      const data = await response.json();
      setList(data);
    } catch (error) {
      alert(`Error while calling the api to get the list ${error}`);
    }
  };

  const handleOnScroll = (event) => {
    const { scrollTop } = event.target;

    const startIndex = Math.floor(scrollTop/ITEM_HEIGHT);
    const endIndex = startIndex + LIMIT;
    setIndices([startIndex, endIndex]);
  } 

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="limit-infinite-list-container" onScroll={handleOnScroll}>
      <div style={{height: list.length * ITEM_HEIGHT, position: "relative"}}>
        {visibleList.map(({ title, id }, index) => 
          <p key={id} className="item" style={{position: "absolute", top: (indices[0] + index)* ITEM_HEIGHT}}>{title}</p>
        )}
      </div>
    </div>
  );
};

export default LimitInfiniteList;
