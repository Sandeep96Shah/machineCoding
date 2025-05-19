import { useState } from 'react';


export const useDefault = (defaultValue, initailValue) => {
    const [user, updateUser] = useState(initailValue);
    const setUser = (value) => {
        if(value === null || value === undefined) updateUser(defaultValue)
        else updateUser(value)
    }
  return [user, setUser];
}

// Implement a useDefault hook that returns the default value when state is null or undefined.

// Arguments
// defaultValue: the default value to be returned when the state is null or undefined
// initialValue: the initial value of the state. This argument should be the same as the first argument of the useState hook


// Returns
// The useDefault hook returns the same values as the useState hook.
