import React from "react";
import ContinueWatching from "./continue-watching";
import "./sections.css";
import SectionTiles from "./section-tiles";
const Sections = () => {
  return (
    <div className="sections">
      <section>
        <ContinueWatching />
      </section>

      <section>
        <SectionTiles 
          
        />
      </section>
    </div>
  );
};

export default Sections;
