import React, { useState } from "react";
import MemoizedChild from "./Memoized";
import NoTMemoizedChild from "./NotMemoized";

const Parent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCound, setChildCount] = useState(0);

  const handleParentCount = () => setParentCount((prevCount) => prevCount + 1);

  const handleChildCount = () => setChildCount((prevCount) => prevCount + 1);

  return (
    <div>
      <h1>
        Parent Count: <span>{parentCount}</span>
      </h1>
      <MemoizedChild count={childCound} />
      <NoTMemoizedChild count={childCound} />
      <button onClick={handleParentCount}>Parent Count</button>
      <button onClick={handleChildCount}>Child Count</button>
    </div>
  );
};

export default Parent;
