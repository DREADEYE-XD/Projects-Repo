import axios from "axios";
import React, { useEffect, useState } from "react";

const CategoryMvTiles = ({
  sliderPosition,
  movieThumbnail,
  recentlyAdded,
  newEpisodeAvailable,
  setToggleShowMovieDetails,
  movieID,
  setMovieID,
}) => {
  
    const fetchMovieThumbnail = (movieID) => {
      axios
        .get(`https://api.themoviedb.org/3/movie/1011985/images`, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTA4YjU0ZjYzMzg0YzcxZGZjMDJiMzMxYWU0YTEwZiIsInN1YiI6IjY1ZTFhMWY4YTI4NGViMDE2NGQ0YWE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y43951zZOqOXC2nP-4FUYK1vMFu5sFQ0wKH4Ei4o61Y",
          },
        })
        .then(async (response) => {
          console.log(response.backdrops);

          // setThumbnail(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    <div
      onClick={() => {
        setMovieID(movieID);
        fetchMovieThumbnail(movieID);
        setToggleShowMovieDetails(true);
      }}
      className="section-movie-tile-cont"
      style={{ transform: `translateX(${sliderPosition})` }}
    >
      <img id="section-mv-thumb" src={movieThumbnail} alt="" />
      {recentlyAdded ? (
        <div className="recentlyAddedBanner">
          <span>Reccently added</span>
        </div>
      ) : newEpisodeAvailable ? (
        <div className="newEpisodeAvailable">
          <span>New Episode</span>
        </div>
      ) : null}
    </div>
  );
};

export default CategoryMvTiles;
