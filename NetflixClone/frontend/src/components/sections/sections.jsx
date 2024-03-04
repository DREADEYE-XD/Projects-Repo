import React, {useEffect, useState} from "react";
import ContinueWatching from "./continue-watching";
import "./sections.css";
import SectionTiles from "./section-tiles";
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
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const [popularMovie, setPopularMovie] = useState([
    {
      adult: false,
      backdrop_path: "/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
      genre_ids: (3)[(28, 27, 53)],
      id: 1096197,
      original_language: "en",
      original_title: "No Way Up",
      overview:
        "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
      popularity: 2991.229,
      poster_path: "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
      release_date: "2024-01-18",
      title: "No Way Up",
      video: false,
      vote_average: 5.9,
      vote_count: 98,
    },
  ]);

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
    <div className="sections">
      <section>
        <ContinueWatching />
      </section>

      <section>
        <SectionTiles
          categoryHeading="Only on Netflix(Clone)"
          recentlyAdded={false}
          newEpisodeAvailable={false}
          popularMovie={popularMovie}
          imageUrl={imageUrl}
        />
      </section>

      <section>
        <SectionTiles
          categoryHeading="Adventure Movies"
          movieThumbnail={movieImages}
          recentlyAdded={false}
          newEpisodeAvailable={true}
        />
      </section>

      <section>
        <SectionTiles
          categoryHeading="Action Movies"
          movieThumbnail={movieImages}
          recentlyAdded={true}
          newEpisodeAvailable={false}
        />
      </section>

      {/* <section>
        {popularMovie.map((movie, index) => (
          <TestComp
            key={index}
            popularMovie={movie.original_title}
            imageUrl={imageUrl + movie.backdrop_path}
          />
        ))}
      </section> */}
    </div>
  );
};

export default Sections;
