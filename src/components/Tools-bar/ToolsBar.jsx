import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { MdComment } from 'react-icons/md';
import { TbBellShare } from 'react-icons/tb';
import '../../styles/ToolsBar.css';
import PostComments from '../post-comments/PostComments';
import { useDispatch, useSelector } from 'react-redux';

import { actions, fetchComments } from '../../redux/slice/comments/slice';

const ToolsBar = ({ post }) => {
  const initialLikes = Math.floor(Math.random() * 1000) + 1;
  const [likes, setLikes] = useState(initialLikes);
  const { comments } = useSelector((state) => state.comment);
  const showComment = useSelector(
    (state) => state.comment.showComment[post.id] || false
  );
  const randomShares = useMemo(() => Math.floor(Math.random() * 300) + 1, []);
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleCommentClick = () => {
    dispatch(fetchComments({ postId: post.id }));
    dispatch(actions.setComment({ postId: post.id, visibility: !showComment }));
  };
  const loadMorePosts = () => {};

  return (
    <div className="Tools-bar">
      <button className="ToolsBar-reactions" onClick={handleLikeClick}>
        <FcLike /> {likes} Likes
      </button>

      <button className="ToolsBar-reactions" onClick={handleCommentClick}>
        <MdComment /> {showComment ? 'Cerrar' : 'Comentarios'}
      </button>
      <button className="ToolsBar-reactions" onClick={loadMorePosts}>
        <TbBellShare /> {randomShares} Shares
      </button>
    </div>
  );
};

export default ToolsBar;
