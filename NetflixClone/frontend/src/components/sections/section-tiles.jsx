import React, { useEffect, useState } from "react";
import CategoryMvTiles from "./category-mv-tiles";
import RightArrowIcon from "../nav/sidebar/sidebar-layer/right-arrow-icon";

const SectionTiles = ({
  categoryHeading,
  recentlyAdded,
  newEpisodeAvailable,
}) => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const popularMovieUrl = "movie/popular?language=en-US&page=1";
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const [popularMovie, setPopularMovie] = useState([]);

  // Fetch popular movies data
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTA4YjU0ZjYzMzg0YzcxZGZjMDJiMzMxYWU0YTEwZiIsInN1YiI6IjY1ZTFhMWY4YTI4NGViMDE2NGQ0YWE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y43951zZOqOXC2nP-4FUYK1vMFu5sFQ0wKH4Ei4o61Y",
      },
    };

    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(`${baseUrl + popularMovieUrl}`, options);
        const data = await response.json();
        console.log(data.results);
        setPopularMovie(data.results); // Assuming 'results' is the array of movies
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="section-tiles">
      <div className="tile-header">
        <span>{categoryHeading}</span>
      </div>

      <div className="section-category-mv-cont">
        <div className="slider leftArrow">
          <RightArrowIcon />
        </div>

        {popularMovie.map((movie, index) => (
          <CategoryMvTiles
            key={index}
            movieThumbnail={imageUrl + movie.backdrop_path}
            recentlyAdded={recentlyAdded}
            newEpisodeAvailable={newEpisodeAvailable}
            movieName={movie.original_title}
          />
        ))}

        <div className="slider rightArrow">
          <RightArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default SectionTiles;
