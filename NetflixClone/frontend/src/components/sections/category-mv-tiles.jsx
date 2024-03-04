import React from "react";

const CategoryMvTiles = ({
  movieThumbnail,
  movieName,
  recentlyAdded,
  newEpisodeAvailable,
}) => {
  return (
    <div className="section-movie-tile-cont">
      <img id="section-mv-thumb" src={movieThumbnail} alt="" />
      <div className="section-mv-name"> <span>{movieName}</span></div>
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
