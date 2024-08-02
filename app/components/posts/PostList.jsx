'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/learningPost/get')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Fetched data:', data);
                if (Array.isArray(data)) {
                    setPosts(data);
                } else {
                    throw new Error('Data is not an array');
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const fetchPosts = () => {
        fetch('http://localhost:8080/learningPost/get')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Fetched data:', data);
                if (Array.isArray(data)) {
                    setPosts(data);
                } else {
                    throw new Error('Data is not an array');
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }

    const handleLike = (postId) => {
        //need to call endpoint that updates the click by one
        axios.post('http://localhost:8080/learningPost/likes', null, {
            params: {
                id: postId
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            fetchPosts();
        }).catch(err => console.warn(err));
    }

    return (
        <div>
            <h1>Post Details:</h1>
            {posts.length === 0 ? (
                <div>Loading...</div>
            ) : (
                // eslint-disable-next-line
                posts.map((post, index) => (
                    // eslint-disable-next-line
                    <div key={index}>
                        <img src={`data:image/png;base64,${post.image}`} alt="cool" style={{ width: '30%', height: '50%' }} />
                        <ul>
                            <li><strong>Description:</strong> {post.description}</li>
                            <li><strong>Likes:</strong> {post.likes}</li>
                            <li><strong>User:</strong> {post.userId}</li>
                        </ul>
                        <button onClick={() => handleLike(post.id)}> Like </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default PostList;
