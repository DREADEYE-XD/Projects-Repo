import React from "react";
// import SmdMoreMvTiles from "./smd-more-mv-tiles";

const SmdMoreMovies = ({ movieData }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";

if(movieData){
  console.log(movieData);
}

  return (
    <div className="smdMA-similarMovs-cont">
      {movieData &&
        Object.keys(movieData).length > 0 &&
        Object.keys(movieData).length < 9 &&
        Object.keys(movieData).map((movie, index) => (
          <div key={index} className="smdMoreMvTiles-cont">
            <img src={imageUrl + movie.backdrop_path} alt="" />
            <div className="smdMoreMvTiles-layer">
              <span>{movie.original_title}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SmdMoreMovies;
