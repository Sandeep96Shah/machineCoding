import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

  const startCounter = () => {
    setInterval(() => {
        const newCount = count + 1;
        setCount(newCount);
        // setCount((prevCount) => prevCount + 1);
    }, 500);
  }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={startCounter}>Start Counter</button>
    </div>
  )
}

export default Counter