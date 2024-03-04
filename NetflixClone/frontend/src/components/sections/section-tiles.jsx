import React from "react";
import CategoryMvTiles from "./category-mv-tiles";
import RightArrowIcon from "../nav/sidebar/sidebar-layer/right-arrow-icon";

const SectionTiles = ({
  categoryHeading,
  recentlyAdded,
  newEpisodeAvailable,
  popularMovie,
imageUrl
}) => {
  
  


  return (
    <div className="section-tiles">
      <div className="tile-header">
        <span>{categoryHeading}</span>
      </div>

      <div className="section-category-mv-cont">
        <div className="slider leftArrow">
          <RightArrowIcon/>
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
        <RightArrowIcon/>
        </div>
      </div>
    </div>
  );
};

export default SectionTiles;
