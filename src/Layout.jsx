import React from 'react';
import { PostUI } from './components/post';
import './App.css';
import { PostCard } from './components/post-card/post-card';
export const Layout = () => {
  return (
    <main>
      <h1>HOME</h1>
      <PostCard />
      <span className="layout--separator"></span>
      <PostUI />
      <span className="layout--separator"></span>
      <PostUI />
    </main>
  );
};