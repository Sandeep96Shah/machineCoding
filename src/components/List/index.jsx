import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./styles.css";

const API = "https://dummyjson.com/posts?limit=10";

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await fetch(API);

      if (!response.ok) {
        alert("Something went wrong, please try again");
        return;
      }
      const data = await response.json();
      setList(data.posts);
    } catch (error) {
      console.log(`Error while fetching the list: ${error}`);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="card-container">
      {list.map(({ title, userId, tags, id }) => (
        <Card title={title} userId={userId} tags={tags} id={id} />
      ))}
    </div>
  );
};

export default List;
