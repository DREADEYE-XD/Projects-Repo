import React from "react";
import { gameCategories } from "../lib/gameCategories";

const BodyView = ({activeIndex}) => {
  const gameId = activeIndex + 1;
  const game = gameCategories.find(game => game.id === gameId);
  console.log(game)
  const gameName = game ? game.game_name : "Game not found";
  
  return (
    <div className="bodyView">
      

      <div className="plotters" >
        <div className="mainGraph">
          Main
        </div>
        <div className="fpsChart">fps <br/> Game name is {gameName}</div>
        
        <div className="sensorData">sensor</div>
        <div className="stuttherChart">stutter</div>
      </div>
    </div>
  );
};

export default BodyView;


//  style={
//   pinMode
//   ? { transform: "translateX(-0%)" }
//   : { transform: "translateX(-11%)",  width: 'calc(100vw)'}
// }