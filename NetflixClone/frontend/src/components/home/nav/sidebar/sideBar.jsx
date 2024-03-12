import React, {useState, useEffect,useRef} from "react";
import "./sidebar.css";
import SidebarIcon from "./sidebar-icon/sidebar-icon";
import SidebarLayer from "./sidebar-layer/sidebar-layer";

const SideBar = () => {

  const [focusStatus, setFocusStatus] = useState('focusOff');
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside sidebar
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setFocusStatus('focusOff');
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div className="sidebar" ref={sidebarRef}>
      <SidebarIcon focusStatus={focusStatus} setFocusStatus={setFocusStatus}/>

      <SidebarLayer focusStatus={focusStatus}/>
    </div>
  );
};

export default SideBar;
