import React from "react";

import { Link } from "react-router-dom";

function GameCard(props) {
  return (
    <Link to={`/games/${props.data._id}`}>
      <div className='game-card'>
        <img src={props.data.coverArtUrl} alt={props.data.title} />
      </div>
    </Link>
  );
}

export default GameCard;
