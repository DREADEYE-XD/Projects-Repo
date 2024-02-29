import React from "react";
import CategoryMvTiles from "./category-mv-tiles";
import RightArrowIcon from "../nav/sidebar/sidebar-layer/right-arrow-icon";

const SectionTiles = ({
  categoryHeading,
  movieThumbnail,
  recentlyAdded,
  newEpisodeAvailable,
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

        {movieThumbnail.map((value, index) => (
          <CategoryMvTiles
            key={index}
            movieThumbnail={value}
            recentlyAdded={recentlyAdded}
            newEpisodeAvailable={newEpisodeAvailable}
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
