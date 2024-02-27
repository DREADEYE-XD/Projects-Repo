import React from "react";

const Tiles = () => {
  return (
    <div className="trailer-cont">
      <div className="trailer-mv-name">
        <span>Iron Man 3</span>
      </div>

      <div className="mv-cont">
        <div>
        <ul className="btns">
          <li className="items" id="item1">
            <img src="./icons/play.png" alt="" height="22" width="22" />
            <span>Play</span>
          </li>
          <li className="items" id="item2">
            <img
              className="add-icon"
              src="./icons/plus.png"
              alt=""
              height="22"
              width="22"
            />
            <span>My List</span>
          </li>
        </ul>
        </div>
        <div className="mv-desc">
        <span >
          {`Tony Stark grapples with the consequences of the events 
      of The Avengers (2012) during a national terrorism
       campaign on the United States led by the mysterious
        Mandarin.`}
        </span>
        </div>
      </div>

      <div className="video-btns">
        <div className="replay-btn">
        <img src="./icons/replay.png" alt="" height='26' width='26' />
        </div>

        <div className="audio-btn"></div>
      </div>
    </div>
  );
};

export default Tiles;
