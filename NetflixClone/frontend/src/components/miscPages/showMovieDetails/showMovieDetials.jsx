import React, { useState } from "react";
import SmdMovieTrailer from "./smd-movie-trailer";
import SmdMovieAbout from "./smd-movie-about";
import axios from "axios";

const ShowMovieDetials = ({ setToggleShowMovieDetails, movieID }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const [thumbnail, setThumbnail] = useState("");
  
  

  return (
    <div className="showMovieDetails">
      <div className="cancel-btn">
        <img
          onClick={() => {
            setToggleShowMovieDetails(false);
          }}
          src="./icons/cancel.png"
          alt=""
        />
      </div>
      <div className="movieDetails-cont">
        <SmdMovieTrailer />
        <SmdMovieAbout />
      </div>
    </div>
  );
};

export default ShowMovieDetials;
