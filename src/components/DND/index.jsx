import React, { useRef, useState } from "react";
import { dataList } from "./data";
import "./dnd.css";

const DND = () => {
  const [data, setData] = useState(dataList);
  const headingList = Object.keys(data);
  const currentContainer = useRef();
  const currentItemId = useRef();
  const dragOverItemIndex = useRef(null);

  const handleOnDragStart = (event, container, id) => {
    currentContainer.current = container;
    currentItemId.current = id;
    event.target.style.opacity = "0.5";
  };

  const handleOnDragEnd = (event) => (event.target.style.opacity = "1");

  const handleOnDrop = (targetContainer) => {
    const sourceContainer = currentContainer.current;
    const itemId = currentItemId.current;
    const insertAt = dragOverItemIndex.current;
    setData((prevData) => {
      const updatedData = { ...prevData };
      const item = updatedData[sourceContainer].find(({ id }) => id === itemId);
      updatedData[sourceContainer] = updatedData[sourceContainer].filter(
        ({ id }) => id !== itemId
      );
      if (insertAt !== null || insertAt !== undefined) {
        updatedData[targetContainer] = [
          ...updatedData[targetContainer].slice(0, insertAt),
          item,
          ...updatedData[targetContainer].slice(insertAt),
        ];
      } else {
        updatedData[targetContainer] = [...updatedData[targetContainer], item];
      }
      return updatedData;
    });
  };

  const handleOnDragOver = (event) => event.preventDefault();

  const handleOnDragEnter = (index) => (dragOverItemIndex.current = index);

  return (
    <div className="containers">
      {headingList?.map((container, index) => (
        <div
          key={index}
          className="task-container"
          onDrop={(event) => handleOnDrop(container)}
          onDragOver={handleOnDragOver}
        >
          <h2>{container}</h2>
          {data[container]?.map(({ id, message }, index) => (
            <p
              draggable
              key={id}
              className="task"
              onDragStart={(event) => handleOnDragStart(event, container, id)}
              onDragEnd={handleOnDragEnd}
              onDragEnter={() => handleOnDragEnter(index)}
            >
              {message}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DND;
