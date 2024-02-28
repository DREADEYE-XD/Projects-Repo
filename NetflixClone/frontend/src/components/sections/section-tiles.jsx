import React from "react";

const SectionTiles = ({tileHeading, movieThumbnail, recentlyAdded, newEpisodeAvailable}) => {
  return (
    <div className="section-tiles">
      <div className="tile-header">
        <span>{tileHeading}</span>
      </div>

      <div className="movie-tile-cont">
        <img src={movieThumbnail} alt="" />
        {recentlyAdded ? (
          <div className="recentlyAddedBanner">
            <span>Reccently Added</span>
          </div>
        ) : newEpisodeAvailable ? (
          <div className="newEpisodeAvailable">
            <span>New Episode</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SectionTiles;
