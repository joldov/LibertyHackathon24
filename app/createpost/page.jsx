'use client';

import React, { useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handlePost = () => {
    // Create a FormData object
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description);

    axios.post('http://localhost:8080/learningPost', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setDescription('');
          setFile(null);
        } else {
          console.warn("it didn't work");
        }
      })
      .catch((err) => console.warn(err));
  };

  return (
    <div>
      <h1>Post Details:</h1>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="button" onClick={handlePost}>
        Create Post
      </button>
    </div>
  );
}
