import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data.slice(0, 16));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts(); 
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;



