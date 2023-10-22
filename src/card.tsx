import React from 'react';

const card = ({rank, suit, suitName}) => {
  return (
    <span className={`card rank-${rank} ${suitName}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suit}</span>
    </span>
  );
};

export default card;