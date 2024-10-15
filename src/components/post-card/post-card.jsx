import React, { useEffect } from 'react';
import { PostUI } from '../post';
import ToolsBar from '../Tools-bar/ToolsBar';

import Comments from '../post-comments/Comments';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/post-card.styles.css';
import { actions, fetchPosts } from '../../redux/slice/posts/slice';
import { fetchComments } from '../../redux/slice/comments/slice';

export const PostCard = ({ post }) => {
  const showComment = useSelector(
    (state) => state.comment.showComment[post.id] || false
  );

  return (
    <div className="post-card__container">
      <PostUI post={post} />
      <ToolsBar post={post} />
      {showComment && <Comments postId={post.id} />}
    </div>
  );
};
