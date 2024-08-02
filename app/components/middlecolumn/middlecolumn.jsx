import React, { useState } from 'react';
import './middlecolumn.css';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [file, setFile] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleTagsChange = (e) => {
        setTags(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    const handlePublish = () => {
        if (description && tags && file) {
            const newPost = {
                description,
                tags,
                file,
                timestamp: new Date().toLocaleString(),
            };
            setPosts([newPost, ...posts]);
            setDescription('');
            setTags('');
            setFile(null);
            setRefreshKey((prevKey) => prevKey + 1); // Update refreshKey to force re-render if necessary
        } else {
            alert('Please enter a description, tags, and upload a file.');
        }
    };

    return (
        <div className="post-container">
            <h2>Create a Post</h2>
            <div className="post-form">
        <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="What's on your mind?"
        />
                <input
                    type="text"
                    value={tags}
                    onChange={handleTagsChange}
                    placeholder="Tags (comma separated)"
                />
                <input type="file" onChange={handleFileChange} key={refreshKey} />
                <button onClick={handlePublish}>Publish</button>
            </div>
            <h3>Posts</h3>
            <div className="posts-list">
                {posts.map((post, index) => (
                    <div key={index} className="post-item">
                        <p>{post.description}</p>
                        <img src={post.file} alt="Post" />
                        <p><strong>Tags:</strong> {post.tags}</p>
                        <span>{post.timestamp}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Post;
