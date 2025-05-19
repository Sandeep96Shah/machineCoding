import { useState } from "react";

const useCycle = (...args) => {
  const [index, setIndex] = useState(0);
  const cycle = () => setIndex((prevIndex) => (prevIndex + 1) % args.length);
  return [args[index], cycle];
};

export default useCycle;


// Implement a useCycle hook that cycles through a sequence of values each time its function is called.

// Arguments
// The useCycle hook should accept an indefinite number of arguments, each representing a value in the sequence to cycle through.

// Returns
// A tuple containing the following elements:

// value: The current value
// cycle: A function that changes the current value to the next one in the sequence, or the first one if the current value is the last in the sequence