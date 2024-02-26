import React from "react";
import SbLayerAccounts from "./sb-layer-accounts";
import SbLayerCategories from "./sb-layer-categories";

const SidebarLayer = (props) => {
  return (
    <div className={`sidebar-layer ${props.focusStatus}`}>
      <SbLayerAccounts />

      <div className="sb-layer-notifications">
        <div className="notfication-cont">
          <div className="notif-badge"></div>
          <span>Notifications</span>
        </div>

        <img src="./icons/right-arrow.png" alt="" height="24" width="22" />
      </div>

      <div className="sb-layer-downloads">
        <img src="./icons/download.png" alt="" height='20' width='14' />
        <span>My Downloads</span>
      </div>

      <SbLayerCategories />
    </div>
  );
};

export default SidebarLayer;
