import React from 'react';
import Player from './Player';
import players from './Players';

// we use the .map() method in order not to repeat the cards

const PlayersList = () => {
  return (
    <div className="players">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
