import React, { useEffect } from 'react'
import { throttling } from './constants';

const ThrottlingComp = () => {

    useEffect(() => {
        const handleThrottling = throttling(() => {
            console.log("X coordinate is: ", window.scrollY);
        }, 500);

        window.addEventListener("scroll", handleThrottling);

        return () => {
            window.removeEventListener("scroll", handleThrottling);
        }
    }, [])
  return (
    <div>
        <h1>Throttling</h1>
        <div style={{ height: "2000px", background: "#f5f5f5" }}></div>
    </div>
  )
}

export default ThrottlingComp