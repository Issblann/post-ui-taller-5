import React from 'react';
import { PostUI } from '../post';
import ToolsBar from '../Tools-bar/ToolsBar';

import Comments from '../post-comments/Comments';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/post-card.styles.css';

export const PostCard = () => {
  const posts = useSelector((state) => state.post);

  const dispatch = useDispatch();
  console.log(posts);
  const showComment = useSelector((state) => state.comment.showComment);

  return (
    <div className="post-card__container">
      <PostUI />
      <ToolsBar />
      <Comments />
    </div>
  );
};
