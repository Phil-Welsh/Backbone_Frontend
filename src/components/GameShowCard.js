import React from "react";

import { Link } from "react-router-dom";

function GameShowCard(props) {
  return (
    <Link to={`/games/${props._id}`}>
      <div className='game-card'>
        <img src={props.img} alt={props.title} />
      </div>
    </Link>
  );
}

export default GameShowCard;
