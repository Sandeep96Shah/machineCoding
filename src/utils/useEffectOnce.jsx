import  { useEffect, ref } from 'react'

export const useEffectOnce = (effect) => {
    const ref = useRef(false);

    useEffect(() => {
        if(ref.current) return

        ref.current = true;
        return effect();
    }, [])
}

export default useEffectOnce;

// Implement a useEffectOnce hook that runs an effect only once.

// Arguments
// effect: The function that will be executed once. This function has the same parameters and behavior as the first argument of useEffect
// Returns
// Nothing, just like useEffect.