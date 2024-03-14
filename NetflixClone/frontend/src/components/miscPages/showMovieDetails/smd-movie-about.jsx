import React from "react";

const SmdMovieAbout = () => {
  return (
    <div className="smdMA-about-cont">
      <div className="smdMA-indicators">
        <span className="smdMA-age indic">New</span>
        <span className="smdMA-releaseDate indic">2024</span>
        <span className="smdMA-UA indic">U/A +16</span>
        <span className="smdMA-duration indic">2hr 22min</span>
        <span className="smdMA-vid-qlty indic">HD</span>
        <span className="smdMA-aud-qlty indic">5.1</span>
      </div>

      <div className="smdMAA-aboutMov-cont">
        <p className="smdMAA-about">This is about</p>
        <p className="smdMAA-cast">
          Cast: <span>abc, nys, oasdf</span>
        </p>
        <p className="smdMAA-director">Director: <span>XYZ</span></p>
      </div>

      <div className="smdMA-actn-btns">
        <img src="./icons/plus.png" alt="Add to list" className="addtoList" height="40" width='40' />
        <img src="./icons/thumbUp.png" alt="" className="rateMovie" height="40" width='40' />
        <img src="./icons/download.png" alt="" className="downloadMv" height="40" width='30' />
      </div>

      
    </div>
  );
};

export default SmdMovieAbout;
