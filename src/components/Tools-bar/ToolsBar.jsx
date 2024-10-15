import React, { useMemo } from 'react';
import { useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { MdComment } from 'react-icons/md';
import { TbBellShare } from 'react-icons/tb';
import '../../styles/ToolsBar.css';
import PostComments from '../post-comments/PostComments';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/slice/posts/slice';

const ToolsBar = () => {
  const initialLikes = Math.floor(Math.random() * 1000) + 1;
  const [likes, setLikes] = useState(initialLikes);

  const randomComments = useMemo(() => Math.floor(Math.random() * 50) + 1, []);
  const randomShares = useMemo(() => Math.floor(Math.random() * 300) + 1, []);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const loadMorePosts = () => {};

  return (
    <div className="Tools-bar">
      <button className="ToolsBar-reactions" onClick={handleLikeClick}>
        <FcLike /> {likes} Likes
      </button>

      <button className="ToolsBar-reactions" onClick={handleLikeClick}>
        <MdComment /> {likes} Comentarios
      </button>
      <button className="ToolsBar-reactions" onClick={loadMorePosts}>
        <TbBellShare /> {randomShares} Shares
      </button>
    </div>
  );
};

export default ToolsBar;
