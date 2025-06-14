import React, { useState, useCallback } from "react";
import Button from "./Button";
import Counter from "./Counter";
import Label from "./Label";
import "./styles.css";

const PSCounter = () =>  {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    [count]
  );

  const handleDecrement = useCallback(() => {
    if (!count) {
      alert("Count value cannot be less than 0");
      return;
    }
    setCount((prevCount) => prevCount - 1);
  }, [count]);
  return (
    <div className="App">
      <Label label="Counter" />
      <Counter count={count} />
      <div className="action-buttons">
        <Button onClick={handleIncrement} label="+" />
        <Button onClick={handleDecrement} label="-" />
      </div>
    </div>
  );
}

export default PSCounter
