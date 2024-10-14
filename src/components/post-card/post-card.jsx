import React from 'react';
import { PostUI } from '../post';
import ToolsBar from '../Tools-bar/ToolsBar';
import Comments from '../post-comments/Comments';
import { useSelector } from 'react-redux';


export const PostCard = () => {

  const showComment = useSelector(state => state.comment.showComment)

  return (
    <div>
      <PostUI />
      <ToolsBar />
      {showComment ? <Comments /> : <div></div>}
    </div>
  );
};