import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [size, setSize] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
 
    const result = await response.json();
    setSize(result.size);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        {size && <p>Image size: {size} bytes</p>}
      </header>
    </div>
  );
}

export default App;
