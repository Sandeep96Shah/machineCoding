import React from 'react';
import Bar from './Bar';
import "./progressBar.css";

const ProgressBar = () => {
    const list = [5, 10, 20, 50, 70];

    return (
        <div>
            <h1>Progress Bar</h1>
            {list.map((value, index) => (
               <Bar key={index} progress={value} />
            ))}
        </div>
    )
}

export default ProgressBar