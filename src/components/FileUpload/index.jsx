import React, { useState } from "react";
import "./fileUpload.css";
import Preview from "./preview";

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDraging, setIsDragging] = useState(false);
  const handleUploadFiles = (event) => {
    setUploadedFiles((prevFiles) => [...prevFiles, ...event.target.files]);
  };

  const handleOnRemove = (fileName) => {
    const updatedFiles = uploadedFiles.filter(
      (fileDetails) => fileDetails.name !== fileName
    );
    setUploadedFiles(updatedFiles);
  };

  const handleOnDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleOnDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  }

  const handleOnDrop = (event) => {
    event.preventDefault();
    const draggedFiles = event.dataTransfer.files;
    setUploadedFiles((prevFiles) => [...prevFiles, ...draggedFiles])
    setIsDragging(false);
  }
  return (
    <div className="file-upload-container">
      <div className="container">
        <div
          className={`upload-container ${isDraging ? "dragging" : ""}`}
          onDragOver={handleOnDragOver}
          onDragLeave={handleOnDragLeave}
          onDrop={handleOnDrop}
        >
          <p className="title">Drag and drop files here or</p>
          <input
            onChange={handleUploadFiles}
            className="hide-file-upload"
            type="file"
            multiple
            id="file-upload"
          />
          <label htmlFor="file-upload" className="browse-files">
            Browse Files
          </label>
        </div>
        {uploadedFiles.map((fileDetails, index) => (
          <Preview
            key={index}
            fileDetails={fileDetails}
            onRemove={handleOnRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
