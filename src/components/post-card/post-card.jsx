import React from 'react';
import { PostUI } from '../post';
import ToolsBar from '../Tools-bar/ToolsBar';

import Comments from '../post-comments/Comments';
import { useSelector } from 'react-redux';
import '../../styles/post-card.styles.css';

export const PostCard = () => {
  const showComment = useSelector((state) => state.comment.showComment);

  return (
    <div className="post-card__container">
      <PostUI />
      <ToolsBar />
      {showComment ? <Comments /> : <div></div>}
    </div>
  );
};
