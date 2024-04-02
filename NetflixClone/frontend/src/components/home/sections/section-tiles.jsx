import React, { useState } from "react";
import CategoryMvTiles from "./category-mv-tiles";
import RightArrowIcon from "../nav/sidebar/sidebar-layer/right-arrow-icon";

const SectionTiles = ({
  categoryHeading,
  recentlyAdded,
  movieData,
  newEpisodeAvailable,
  setToggleShowMovieDetails,
  setMovieID
}) => {
  let [count, setCount] = useState(0);
  const [sliderPosition, setSliderPosition] = useState("0px");
  let [sliderWidth, setSliderWidth] = useState(0);
  const width = 1520;

  const imageUrl = "https://image.tmdb.org/t/p/w500";

  // console.log(movieData);

  const handleLeftArrowClick = () => {
    if (sliderWidth >= 0) {
      setCount((count = count - 1));
      setSliderPosition(`-${sliderWidth - width}px`);
      setSliderWidth(sliderWidth - width);
    }
  };

  const handleRightArrowClick = () => {
    setCount((count = count + 1));
    setSliderPosition(`-${width * count}px`);
    setSliderWidth(width * count);
  };

  return (
    <div className="section-tiles">
      <div className="tile-header">
        <span>{categoryHeading}</span>
      </div>

      <div className="section-category-mv-cont">
        <div
          className="slider leftArrow"
          onClick={handleLeftArrowClick}
          style={{ visibility: sliderWidth === 0 ? "hidden" : "visible" }}
        >
          <RightArrowIcon />
        </div>

        {movieData &&
          Object.keys(movieData).length > 0 &&
          movieData.map((movie, index) => (
            <CategoryMvTiles
              key={index}
              movieID={movie.id}
              movieThumbnail={imageUrl + movie.poster_path}
              recentlyAdded={recentlyAdded}
              newEpisodeAvailable={newEpisodeAvailable}
              sliderPosition={sliderPosition}
              setToggleShowMovieDetails={setToggleShowMovieDetails}
              setMovieID={setMovieID}
            />
          ))}

        <div className="slider rightArrow" onClick={handleRightArrowClick}>
          <RightArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default SectionTiles;
