import React, { useState } from "react";

const List = ({ list, itemHeight, height, width }) => {
    const totalVisibleItems = Math.floor(height / itemHeight);
  const [indices, setIndices] = useState([0, totalVisibleItems]);
  const visibleItems = list.slice(indices[0], indices[1] + 1);

  const handleOnScroll = (event) => {
    const { scrollTop } = event.target;
    const newStartIndex = Math.floor(scrollTop/itemHeight);
    const newEndIndex = newStartIndex + totalVisibleItems;
    setIndices([newStartIndex, newEndIndex]);
  }

  return (
    <div style={{ backgroundColor: "grey", height, width, overflow: "auto" }} onScroll={handleOnScroll}>
      <div style={{ height: list.length * itemHeight, position: "relative" }}>
        {visibleItems.map((item, index) => (
          <p key={index} style={{position: "absolute", top: (indices[0] + index)*itemHeight}}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default List;
