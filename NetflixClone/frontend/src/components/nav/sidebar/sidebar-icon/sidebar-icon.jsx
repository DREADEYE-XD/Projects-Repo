import React from "react";
const SidebarIcon = ({setFocusStatus}) => {

    const HandleSideBar = () => {
        setFocusStatus('focusOn')
    }

  return (
    <div className="sidebar-icon" onClick={HandleSideBar}>
      <input id="checkbox" type="checkbox" />
      <label class="toggle" for="checkbox">
        <div id="bar1" class="bars"></div>
        <div id="bar2" class="bars"></div>
        <div id="bar3" class="bars"></div>
      </label>

      <div className="icon-badge"><span style={{color: 'white'}}>7</span></div>
    </div>
  );
};

export default SidebarIcon;
