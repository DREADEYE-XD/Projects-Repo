import React from "react";
import SideBar from "./sidebar/sideBar";
import Logo from "./logo/logo";
import Searcher from "./searcher/searcher";
import Options from "./options/options";
import "./nav.css"

const Nav = () => {
  return (
    <nav>
        
      <div className="contents left">
        <SideBar />
        <Logo />
      </div>

      <div className="contents right">
        <Searcher />
        <Options />
      </div>
    </nav>
  );
};

export default Nav;
