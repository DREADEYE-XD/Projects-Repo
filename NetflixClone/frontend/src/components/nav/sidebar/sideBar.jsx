import React, {useState} from "react";
import "./sidebar.css";
import SidebarIcon from "./sidebar-icon/sidebar-icon";
import SidebarLayer from "./sidebar-layer/sidebar-layer";

const SideBar = () => {

  const [focusStatus, setFocusStatus] = useState('focusOff');

  return (
    <div className="sidebar">
      <SidebarIcon setFocusStatus={setFocusStatus}/>

      <SidebarLayer focusStatus={focusStatus}/>
    </div>
  );
};

export default SideBar;
