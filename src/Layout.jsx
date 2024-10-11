import React from 'react';
import { PostUI } from './components/post';
import './App.css';
export const Layout = () => {
  return (
    <main>
      <h1>HOME</h1>
      <PostUI />
      <span className="layout--separator"></span>
      <PostUI />
      <span className="layout--separator"></span>
      <PostUI />
    </main>
  );
};
