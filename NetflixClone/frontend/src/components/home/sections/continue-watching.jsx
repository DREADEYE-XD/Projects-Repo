import React from "react";
import MovieTile from "./movie-tile";

const ContinueWatching = () => {
  return (
    <div className="continue-watching-cont">
      <span id="tile-heading">Continue Watching for Admin</span>

      <div className="movie-tile-comp">
        <MovieTile
          movieThumbnail="./images/movie-tiles/gamer.jpg"
          progress={220}
          movieName="Gamer"
          movieDuration="1hr 52min"
        />

        <MovieTile
          movieThumbnail="./images/movie-tiles/wolverine.jpg"
          progress={34}
          movieName="Wolverine"
          movieDuration="2hr 38min"
        />

        <MovieTile
          movieThumbnail="./images/movie-tiles/darkKnight.jpg"
          progress={170}
          movieName="The Dark Knight"
          movieDuration="2hr 10min"
        />

        
      </div>
    </div>
  );
};

export default ContinueWatching;
