import React from "react";

const MovieTile = ({movieThumbnail, progress, movieName, movieDuration}) => {
  return (
    <div className="movie-tile-cont">
      <img id="movie-img" src={movieThumbnail} alt="" />
      <div className="playButton">
        <img id="playButton" src="./icons/playV2.png" alt="" />
      </div>
      <div className="progressBar">
        <div
          className="progressCurrent"
          style={{ width: `${progress}px` }}
        ></div>
      </div>
      <div className="movie-details-cont">
        <div className="movieDetails">
          <span id="movieName">{movieName}</span>
          <span id="duration">{movieDuration}</span>
        </div>
        <div className="infoBtn">
          <img id="infoBtn" src="./icons/info.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MovieTile;
