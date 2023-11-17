import React, { useState } from 'react';

const UploadButton = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      onFileChange(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .gif"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id='fileInput'
      />
      <button onClick={() => document.getElementById('fileInput').click()} className='btn btn-success'>Upload File</button>
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
    </div>
  );
};

export default UploadButton;
