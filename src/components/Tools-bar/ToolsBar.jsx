import React from 'react';
import { useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { MdComment } from 'react-icons/md';
import { TbBellShare } from 'react-icons/tb';
import '../../styles/ToolsBar.css';

const ToolsBar = () => {
  const initialLikes = Math.floor(Math.random() * 1000) + 1;
  const [likes, setLikes] = useState(initialLikes);

  const randomComments = Math.floor(Math.random() * 50) + 1;
  const randomShares = Math.floor(Math.random() * 300) + 1;

  const handleLikeClick = () => {
    setLikes(likes + 1); // Incrementar los likes en uno
  };

  return (
    <div className="Tools-bar">
      <button className="ToolsBar-reactions" onClick={handleLikeClick}>
        <FcLike /> {likes} Likes
      </button>
      <button className="ToolsBar-reactions">
        <MdComment /> {randomComments} Comments
      </button>
      <button className="ToolsBar-reactions">
        <TbBellShare /> {randomShares} Shares
      </button>
    </div>
  );
};

export default ToolsBar;
