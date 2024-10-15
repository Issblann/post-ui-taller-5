import React, { useState, useEffect } from 'react';
import { PostUI } from './components/post';
import './App.css';
import { PostCard } from './components/post-card/post-card';

export const Layout = () => {
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
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    if (start < totalPosts) {
      fetchPosts();
    }
  }, [start]);

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://jsonplaceholder.typicode.com/comments?postId=${posts.id}`
  //       );
  //       const data = await response.json();
  //       setComments(data);
  //     } catch (error) {
  //       console.error('Error fetching comments:', error);
  //     }
  //   };

  //   fetchComments();
  // }, []);

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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [start]);

  console.log(comments, 'comentarios');
  return (
    <main>
      <h1>HOME</h1>
      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  );
};