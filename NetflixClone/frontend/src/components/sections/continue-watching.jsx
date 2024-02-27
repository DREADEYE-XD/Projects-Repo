import React from "react";

const ContinueWatching = () => {
  return (
    <div className="continue-watching-cont">
      <span id="tile-heading">Continue Watching for Shreyansh</span>
      <div className="movie-tile-cont">
        <img id="movie-img" src="./images/movie-tiles/gamer.jpg" alt="" />
        <div className="playButton">
          <img id="playButton" src="./icons/playV2.png" alt="" />
        </div>
        <div className="progressBar">
          <div className="progressCurrent"></div>
        </div>
        <div className="movie-details-cont">
          <div className="movieDetails">
            <span id="movieName">Gamer</span>
            <span id="duration">1hr 52min</span>
          </div>
          <div className="infoBtn">
            <img id="infoBtn" src="./icons/info.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
