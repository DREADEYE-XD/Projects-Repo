import React from "react";
import "./sidebar.css";
const SideBar = () => {
  return (
    <div className="sidebar-icon">
      <input id="checkbox" type="checkbox" />
      <label class="toggle" for="checkbox">
        <div id="bar1" class="bars"></div>
        <div id="bar2" class="bars"></div>
        <div id="bar3" class="bars"></div>
      </label>
    </div>
  );
};

export default SideBar;
