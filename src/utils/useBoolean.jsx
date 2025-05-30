import { useCallback, useState } from 'react';

const useBoolean = (initialvalue = false) => {
    const [value, setValue] = useState(initialvalue);
    const setTrue = useCallback(() => setValue(true), []);
    const setFalse = useCallback(() => setValue(false), []);
    return {
        value, setTrue, setFalse
    }
}

export default useBoolean;

// Implement an optimized version of the useBoolean hook. The returned methods should be memoized, the same function instance is returned across re-renders.
// Arguements: initialValue: boolean: Initial value of the boolean state. If not provided, it should default to false.

// Returns

// The useBoolean hook returns an object with the following properties.

// value: boolean: The current boolean state
// setTrue: () => void: A function to set the boolean state to true
// setFalse: () => void: A function to set the boolean state to false
// setTrue and setFalse must be the same function instance across re-renders.