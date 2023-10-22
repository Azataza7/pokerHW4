import React from 'react';

interface Props {
  rank: string;
  suit: string;
  suitName:string;
}

const card: React.FC<Props> = ({rank, suit, suitName}) => {
  return (
    <span className={`card rank-${rank} ${suitName}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suit}</span>
    </span>
  );
};

export default card;