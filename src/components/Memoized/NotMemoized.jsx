import React from "react";

const NoTMemoizedChild = ({ count }) => {
  console.log("NotMemoized");
  return (
    <div>
      <h1>Not Memoized Child Component</h1>
      <p>{count}</p>
    </div>
  );
};

export default NoTMemoizedChild;
