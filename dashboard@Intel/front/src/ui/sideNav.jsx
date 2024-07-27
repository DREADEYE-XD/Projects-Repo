import React, { useState } from "react";
import SideNavGameCateg from "../components/sideNavGameCategList";
import SideNavGameCategHead from "../components/sideNavGameCategHead";

const SideNav = ({activeIndex, setActiveIndex}) => {

  
  const [pinMode, setPinMode] = useState(true);
  const [pinStatus, setPinStatus] = useState("./assets/pin_active.png");

  const handlePinStatus = () => {
    if (pinStatus === "./assets/pin_active.png") {
      setPinStatus("./assets/pin_inactive.png");
      setPinMode(false);
    } else {
      setPinStatus("./assets/pin_active.png");
      setPinMode(true);
    }
  };
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div
      className="Categories"
      style={
        pinMode
          ? { transform: "translateX(-0%)" }
          : { transform: "translateX(-90%)" }
      }
    >
      <SideNavGameCategHead
        handlePinStatus={handlePinStatus}
        pinStatus={pinStatus}
      />

      <SideNavGameCateg
        activeIndex={activeIndex}
        handleItemClick={handleItemClick}
      />
    </div>
  );
};

export default SideNav;
