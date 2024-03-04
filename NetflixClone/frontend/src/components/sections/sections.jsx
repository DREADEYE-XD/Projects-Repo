import React from "react";
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
    </div>
  );
};

export default Sections;
