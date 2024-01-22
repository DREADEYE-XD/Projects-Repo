import React, { useState } from "react";
import "./navbar.css";

const Navbar = (props) => {
  const QGLogo = "/icons/QGLogo.png";
  const tableActiveImg = "./icons/table.png";
  const tableInactiveImg = "./icons/tableInactive.png";

  const [tableImgStat, setTableImgStat] = useState(tableInactiveImg);

  const handleImg = () => {
    if (tableImgStat === tableInactiveImg) {
      setTableImgStat(tableActiveImg);
      // showDBTable(true);
    } else {
      setTableImgStat(tableInactiveImg);
    }
  };

  return (
    <nav>
      <div className="navCont">
        <div className="headerCont">
          <img
            className="appIcon"
            src={QGLogo}
            alt=""
            srcset=""
            height="60"
            width="60"
          />

          <h1 className="appName">Database Assistant</h1>
        </div>
        <div className="table-view-btn">
          <button>
            <img
              onClick={handleImg}
              src={tableImgStat}
              alt=""
              height="30"
              width="30"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
