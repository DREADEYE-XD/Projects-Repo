import React, { useEffect, useState } from "react";
import ContinueWatching from "./continue-watching";
import "./sections.css";
import SectionTiles from "./section-tiles";
import axios from "axios";
const Sections = () => {
  const movieImages = [
    "./images/movie-tiles/avatar.jpg",
    "./images/movie-tiles/batman.jpg",
    "./images/movie-tiles/hulk.jpg",
    "./images/movie-tiles/ironman.jpg",
    "./images/movie-tiles/pacific-rim.jpg",
    "./images/movie-tiles/spiderman.jpg",
    "./images/movie-tiles/superman.jpg",
    "./images/movie-tiles/world-warz.jpg",
  ];

  const baseUrl = "https://api.themoviedb.org/3/";
  const popularMovieUrl = "movie/popular?language=en-US&page=1";
  const topRatedMovieUrl = "movie/top_rated?language=en-US&page=1";
  const upcomingMovieUrl = "movie/upcoming?language=en-US&page=1";
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const [popularMovie, setPopularMovie] = useState({});
  const [topRatedMovie, setTopRatedMovie] = useState({});
  const [upcomingMovie, setUpcomingMovie] = useState({});

  // Fetch popular movies data
  useEffect(() => {
    axios
      .get(`${baseUrl + popularMovieUrl}`, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTA4YjU0ZjYzMzg0YzcxZGZjMDJiMzMxYWU0YTEwZiIsInN1YiI6IjY1ZTFhMWY4YTI4NGViMDE2NGQ0YWE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y43951zZOqOXC2nP-4FUYK1vMFu5sFQ0wKH4Ei4o61Y",
        },
      })
      .then(async (response) => {
        const data = response.data.results;
        console.log(response);
        setPopularMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${baseUrl + topRatedMovieUrl}`, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTA4YjU0ZjYzMzg0YzcxZGZjMDJiMzMxYWU0YTEwZiIsInN1YiI6IjY1ZTFhMWY4YTI4NGViMDE2NGQ0YWE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y43951zZOqOXC2nP-4FUYK1vMFu5sFQ0wKH4Ei4o61Y",
        },
      })
      .then(async (response) => {
        const data = response.data.results;
        console.log(response);
        setTopRatedMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${baseUrl + upcomingMovieUrl}`, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTA4YjU0ZjYzMzg0YzcxZGZjMDJiMzMxYWU0YTEwZiIsInN1YiI6IjY1ZTFhMWY4YTI4NGViMDE2NGQ0YWE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y43951zZOqOXC2nP-4FUYK1vMFu5sFQ0wKH4Ei4o61Y",
        },
      })
      .then(async (response) => {
        const data = response.data.results;
        console.log(response);
        setUpcomingMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });

    // fetchPopularMovies();
  }, []);

  console.log(popularMovie);

  return (
    <div className="sections">
      <section>
        <ContinueWatching />
      </section>

      <section>
        <SectionTiles
          categoryHeading="Popular Movies"
          recentlyAdded={false}
          newEpisodeAvailable={false}
          movieData={popularMovie}
          imageUrl={imageUrl}
        />
      </section>

      <section>
        <SectionTiles
          categoryHeading="Top Rated Movies"
          recentlyAdded={false}
          newEpisodeAvailable={true}
          movieData={topRatedMovie}
          imageUrl={imageUrl}
        />
      </section>

      <section>
        <SectionTiles
          categoryHeading="Upcoming Movies"
          recentlyAdded={true}
          newEpisodeAvailable={false}
          movieData={upcomingMovie}
          imageUrl={imageUrl}
        />
      </section>
    </div>
  );
};

export default Sections;
