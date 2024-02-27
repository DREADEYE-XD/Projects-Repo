import React from "react";
import Nav from "./nav/nav";
import "./app.css";
import Trailer from "./trailer/trailer";
import Sections from "./sections/sections";

const App = () => {
  return (
    <>
      <Nav />
      <Trailer/>
      <Sections />
    </>
  );
};

export default App;
