import React, { useEffect, useRef, useState } from "react";

const ITEM_HEIGHT = 20;
const BATCH_SIZE = 20;
const VIEWPORT_HEIGHT = 400;
const MAX_ITEMS = 1000;

const initialState = Array.from(
  { length: BATCH_SIZE },
  (_, index) => `Item ${index}`
);

const addMoreItems = (start) =>
  Array.from({ length: BATCH_SIZE }, (_, index) => `Item ${index + start}`);

const InfiniteVirtualizedListScroll = () => {
  const observerRef = useRef(null);
  const visibleItemsCount = Math.floor(VIEWPORT_HEIGHT / ITEM_HEIGHT);
  const [items, setItems] = useState(initialState);
  const [indices, setIndices] = useState([0, visibleItemsCount]);
  const visibleItems = items.slice(indices[0], indices[1]);

  const handleOnScroll = (event) => {
    const { scrollTop } = event.target;
    const newStartIndex = Math.floor(scrollTop/ITEM_HEIGHT);
    const newEndIndex = newStartIndex +  visibleItemsCount;
    setIndices([newStartIndex, newEndIndex]);
  }
   

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting)
        setItems((prevItems) => [
          ...prevItems,
          ...addMoreItems(prevItems.length),
        ]);
    });

    if (observerRef.current) observer.observe(observerRef.current);
  }, [items]);
  return (
    <div
      style={{
        height: VIEWPORT_HEIGHT,
        width: "200px",
        backgroundColor: "grey",
        borderRadius: "20px",
        overflow: "auto",
        position: "relative"
      }}
      onScroll={handleOnScroll}
    >
      <div style={{ height: MAX_ITEMS * ITEM_HEIGHT }}>
        {visibleItems.map((item, index) => (
          <p key={index} style={{position: "absolute", top: (indices[0] + index) * ITEM_HEIGHT}}>
            {item}
          </p>
        ))}
        <p ref={observerRef}></p>
      </div>
    </div>
  );
};

export default InfiniteVirtualizedListScroll;
