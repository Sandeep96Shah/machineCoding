import React, { memo } from "react";

const MemoizedChild = memo(({ count }) => {
  console.log("Memoized");
  return (
    <div>
      <h1>Memoized Child Component</h1>
      <p>{count}</p>
    </div>
  );
});

export default MemoizedChild;
