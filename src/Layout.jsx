import React, { useState, useEffect } from "react";
import { PostUI } from './components/post';
import './App.css';
import { PostCard } from './components/post-card/post-card';

export const Layout = () => {
  return (
    <main>
      <h1>HOME</h1>
      <PostCard />

      <PostCard />

      <PostCard />
    </main>
  );
};

const [posts, setPosts] = useState([]);
const [comments, setComments] = useState([]);
const [start, setStart] = useState(0);
const limit = 15; 
const totalPosts = 15; 

const fetchPosts = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
    );
    const data = await response.json();
    setPosts((prevPosts) => [...prevPosts, ...data]);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

useEffect(() => {
  if (start < totalPosts) {
    fetchPosts();
  }
}, [start]);

useEffect(() => {
  const fetchComments = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await response.json();
      setComments(data.slice(0, 5)); 
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  fetchComments();
}, []);

useEffect(() => {
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.offsetHeight
    ) {
      if (start < totalPosts) { 
        setStart((prevStart) => prevStart + limit); 
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [start]);

// return (
//   <div>
//     {posts.map((post) => (
//       <PostCard key={post.id} post={post} />
//     ))}
//     <PostComments comments={comments} />
//   </div>
// );

