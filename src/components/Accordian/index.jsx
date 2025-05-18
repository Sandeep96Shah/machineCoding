import React, { useState } from "react";
import "./accordian.css";

const items = [
  { id: 1, title: "A", content: "aaaaaaaaaaa" },
  { id: 2, title: "B", content: "bbbbbbbbbbb" },
  { id: 3, title: "C", content: "ccccccccccc" },
  { id: 4, title: "D", content: "ddddddddddd" },
  { id: 5, title: "E", content: "eeeeeeeeeee" },
  { id: 6, title: "F", content: "fffffffffff" },
];

const Accordian = () => {
  const [openSections, setOpenSections] = useState(
    new Set()
  );

    const handleOnClick = (title) => {
        const updatedOpenSections = new Set(openSections);
        updatedOpenSections.has(title) ? 
        updatedOpenSections.delete(title) :
        updatedOpenSections.add(title);
        setOpenSections(updatedOpenSections)
    }

  return (
    <div>
      {items.map(({ id, title, content }, index) => {
        const isExpanded = openSections.has(title);
        return (
        <div key={id} className="accordian-container">
          <p onClick={() => handleOnClick(title)} className="accordian-title-container">
            {title}
            <span>{isExpanded ? "▼" : "▶"}</span>
          </p>
          {isExpanded ? (
            <p className="accordian-content-container">{content}</p>
          ) : null}
        </div>
      )})}
    </div>
  );
};

export default Accordian;
