const { useState } = require("react")

export const useCounter = (initialCount = 0) =>{
    const [count, setCount] = useState(initialCount);
    return {
        count, 
        setCount,
        increment: useCallback(() => setCount((prevCount) => prevCount + 1), []),
        decrement: useCallback(() => setCount((prevCount) => prevCount - 1), []),
        reset: useCallback(() => setCount(initialValue), []),
      }
}

// Implement an optimized version of the useCounter hook. The returned methods should be memoized, the same function instance is returned across re-renders.


// Arguments
// initialValue: number: Initial value of the counter state. If not provided, it should default to 0.

// Returns
// The useCounter hook returns an object with the following properties:

// count: number: The current counter value
// increment: () => void: A function to increment the counter value
// decrement: () => void: A function to decrement the counter value
// reset: () => void: A function to reset the counter value to initialValue, or 0 if not provided
// setCount: (value: number) => void: A function to set the counter value to value, it has the same signature as setState
// increment, decrement, reset, and setCount must be the same function instance across re-renders.