import React, { useEffect, useState } from "react";
import ContinueWatching from "./continue-watching";
import "./sections.css";
import SectionTiles from "./section-tiles";
import axios from "axios";
import ShowMovieDetials from "../../miscPages/showMovieDetails/showMovieDetials";
// import { genreList } from "./genreList";

const Sections = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const popularMovieUrl = "movie/popular?language=en-US&page=1";
  const topRatedMovieUrl = "movie/top_rated?language=en-US&page=1";
  const upcomingMovieUrl = "movie/upcoming?language=en-US&page=1";
  const movieSearchWithGenreUrl =
    "discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=";

  const [popularMovie, setPopularMovie] = useState({});
  const [topRatedMovie, setTopRatedMovie] = useState({});
  const [upcomingMovie, setUpcomingMovie] = useState({});
  const [movieFinderData, setMovieFinderData] = useState({
    ActionThriller: {},
    Animation: {},
    Comedy: {},
    Crime: {},
    Horror: {},
    Romance: {},
  });

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
      
        setUpcomingMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });

    async function movieFinderWithGenre(movieId, category) {
      try {
        const response = await axios.get(
          `${baseUrl + movieSearchWithGenreUrl + movieId}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTA4YjU0ZjYzMzg0YzcxZGZjMDJiMzMxYWU0YTEwZiIsInN1YiI6IjY1ZTFhMWY4YTI4NGViMDE2NGQ0YWE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y43951zZOqOXC2nP-4FUYK1vMFu5sFQ0wKH4Ei4o61Y",
            },
          }
        );
        const data = response.data.results;
        setMovieFinderData((prevState) => ({
          ...prevState,
          [category]: data,
        }));
      } catch (error) {
        console.log(error);
      }
    }

    movieFinderWithGenre("28%2C%2053", "ActionThriller");
    movieFinderWithGenre("16", "Animation");
    movieFinderWithGenre("35", "Comedy");
    movieFinderWithGenre("80", "Crime");
    movieFinderWithGenre("27", "Horror");
    movieFinderWithGenre("10749", "Romance");
  }, []);

  // if (movieFinderData && Object.keys(movieFinderData).length > 0) {
  //   console.log(movieFinderData);
  // }

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
        />
      </section>

      <section>
        <SectionTiles
          categoryHeading="Top Rated Movies"
          recentlyAdded={false}
          newEpisodeAvailable={true}
          movieData={topRatedMovie}
        />
      </section>

      <section>
        <SectionTiles
          categoryHeading="Upcoming Movies"
          recentlyAdded={true}
          newEpisodeAvailable={false}
          movieData={upcomingMovie}
        />
      </section>

      {movieFinderData &&
        Object.keys(movieFinderData).length > 0 &&
        Object.keys(movieFinderData).map((genre, index) => (
          <section key={index}>
            <SectionTiles
              categoryHeading={genre}
              movieData={movieFinderData[genre]}
            />
          </section>
        ))}

      <ShowMovieDetials />
    </div>
  );
};

export default Sections;
