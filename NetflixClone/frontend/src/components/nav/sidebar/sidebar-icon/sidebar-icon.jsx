import React from "react";
const SidebarIcon = ({setFocusStatus}) => {

    const HandleSideBar = ()=> {
        setFocusStatus('focusOn')
    }

  return (
    <div className="sidebar-icon">
      <input id="checkbox" type="checkbox" onClick={HandleSideBar}/>
      <label class="toggle" for="checkbox">
        <div id="bar1" class="bars"></div>
        <div id="bar2" class="bars"></div>
        <div id="bar3" class="bars"></div>
      </label>
    </div>
  );
};

export default SidebarIcon;
