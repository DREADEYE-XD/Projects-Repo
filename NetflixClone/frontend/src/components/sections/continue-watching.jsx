import React from "react";
import MovieTile from "./movie-tile";

const ContinueWatching = () => {
  return (
    <div className="continue-watching-cont">
      <span id="tile-heading">Continue Watching for Shreyansh</span>
      
      <MovieTile 
        movieThumbnail="./images/movie-tiles/gamer.jpg"
        progress={220}
        movieName="Gamer"
        movieDuration="1hr 52min"
      />

    </div>
  );
};

export default ContinueWatching;
