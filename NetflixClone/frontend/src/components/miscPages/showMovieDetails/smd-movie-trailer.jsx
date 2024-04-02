import React from "react";

const SmdMovieTrailer = ({thumbnail}) => {
  return (
    <div className="SmdMovieTrailer">
      <div className="smdMT-trailer-vid">
        <img id="smdMT-trailer-thumb" src="./images/netflixBG.png" alt="" />
      </div>
      <div className="smdMT-playButton">
        <img id="smdMT-playButton" src="./icons/playV2.png" alt="" />
      </div>
      <div className="smdMT-mv-title">
        <span>Iron Man 3</span>
      </div>
    </div>
  );
};

export default SmdMovieTrailer;
