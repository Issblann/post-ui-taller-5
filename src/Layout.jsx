import React, { useState, useEffect } from 'react';
import { PostUI } from './components/post';
import './App.css';
import { PostCard } from './components/post-card/post-card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './redux/slice/posts/slice';

export const Layout = () => {
  const { posts, limit, start } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ start, limit }));
  }, []);

  const loadMorePost = () => {
    dispatch(fetchPosts({ start: posts.length, limit: limit }));
  };
  return (
    <main>
      <h1>HOME</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <button onClick={loadMorePost}>Cargar más posts</button>
    </main>
  );
};
