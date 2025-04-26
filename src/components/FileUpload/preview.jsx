import React from 'react';
import './fileUpload.css';

const Preview = ({fileDetails, onRemove}) => {
    console.log(fileDetails);
  return (
    <div className='preview-container'>
        <div className='file-name-details'>
        <img className='file-image' src={URL.createObjectURL(fileDetails)} alt={fileDetails.name} />
        <div>
            <p className='file-name'>{fileDetails.name}</p>
            <p className='file-size'>{fileDetails.size}</p>
        </div>
        </div>
       
        <button className='remove-file' onClick={() => onRemove(fileDetails.name)}>X</button>
    </div>
  )
}

export default Preview