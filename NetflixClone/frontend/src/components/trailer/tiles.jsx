import React, { useState } from "react";

const Tiles = () => {
  const [play_btn_hover, setPlay_btn_hover] = useState("./icons/play.png");
  const [plus_btn_hover, setPlus_btn_hover] = useState("./icons/plus.png");

  const handleMouseEnterPlay = () => {setPlay_btn_hover('./icons/play-hover.png')};
  const handleMouseLeavePlay = () => {setPlay_btn_hover('./icons/play.png')};

  const handleMouseEnterAdd = () => {setPlus_btn_hover('./icons/plus-hover.png')};
  const handleMouseLeaveAdd = () => {setPlus_btn_hover('./icons/plus.png')};

  return (
    <div className="trailer-cont">
      <div className="trailer-mv-name">
        <span>Interstellar</span>
      </div>

      <div className="mv-cont">
        <div>
          <ul className="btns">
            <li
              className="items"
              id="item1"
              onMouseEnter={handleMouseEnterPlay}
              onMouseLeave={handleMouseLeavePlay}
            >
              <img src={play_btn_hover} alt="" height="22" width="22" />
              <span>Play</span>
            </li>
            <li 
            className="items" 
            id="item2" 
            onMouseEnter={handleMouseEnterAdd}
            onMouseLeave={handleMouseLeaveAdd}
            >
              <img src={plus_btn_hover} alt="" height="22" width="22" />
              <span>My List</span>
            </li>
          </ul>
        </div>
        <div className="mv-desc">
          <span>
            {`Tony Stark grapples with the consequences of the events 
      of The Avengers (2012) during a national terrorism
       campaign on the United States led by the mysterious
        Mandarin.`}
          </span>
        </div>
      </div>

      <div className="video-btns">
        <div className="replay-btn">
          <img src="./icons/replay.png" alt="" height="26" width="26" />
        </div>

        <div className="audio-btn"></div>
      </div>
    </div>
  );
};

export default Tiles;
