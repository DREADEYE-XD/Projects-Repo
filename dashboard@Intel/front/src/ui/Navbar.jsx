import React from "react";
import Span from "../components/Span";

const Navbar = () => {
  return (
    <nav>
      <div className="app_name">
        <Span spanInput="CX" />
      </div>
      <div className="user_profile">
        <Span spanInput="ST" />
      </div>
    </nav>
  );
};

export default Navbar;
