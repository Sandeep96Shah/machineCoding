import React, { useCallback, useRef } from 'react'

const useFocus = () => {
    const ref = useRef(null);

    const focus = useCallback(ref.current.focus(), [])
    return [ref, focus];
}

export default useFocus

// Implement a useFocus hook that enables programmatic focusing of an element.


// Arguments
// Nothing.

// Returns
// The hook returns an array with two elements:

// A ref object that will be attached to the ref prop of the element to focus. This has the type RefObject<T>, where T extends HTMLElement
// A function () => void that can be called to programmatically focus the element