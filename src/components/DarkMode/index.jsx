import React, { useState } from 'react';
import "./darkMode.css";

const DarkMode = () => {
    const [mode, setMode] = useState("light");
    const handleOnChange = (event) => 
        setMode(event.target.checked ? "dark" : "light");
    
  return (
    <div className={`${mode === "light" ? "light-mode" : "dark-mode"}`}>
        <h1 className='title'>Dark Mode Toggle</h1>
        <input type="checkbox" onChange={handleOnChange}  />
        <span className='content'>{mode === "light" ? "Light Mode" : "Dark Mode"}</span>
    </div>
  )
}

export default DarkMode