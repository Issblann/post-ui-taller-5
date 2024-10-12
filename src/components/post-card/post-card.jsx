import React from 'react';
import { PostUI } from '../post';
import ToolsBar from '../Tools-bar/ToolsBar';
import '../../styles/post-card.styles.css';
export const PostCard = () => {
  return (
    <div className="post-card__container">
      <PostUI />
      <ToolsBar />
    </div>
  );
};
