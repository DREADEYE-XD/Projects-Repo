import React, { useState } from "react";
import "./searcher.css";
const Searcher = () => {
  const [searchWindow, setSearchWindow] = useState(false);
  
  return (
    <>
      {searchWindow ? (
        <div className="search-window">
          <input id="search-area" type="text" placeholder="Search" />
          <div className="cancel-btn-cont">
            <button
              id="close-search-area"
              onClick={() => {
                setSearchWindow(false);
              }}
            >
              <img
                id="close-icon"
                src="./icons/cancel.png"
                alt=""
                height="16"
                width="16"
              />
            </button>
          </div>
        </div>
      ) : null}

      <button
        className="searcher-btn"
        onClick={() => {
          setSearchWindow(true);
        }}
      >
        <img src="./icons/searcher.png" alt="" height="24" width="24" />
      </button>
    </>
  );
};

export default Searcher;
