import React, { useState } from "react";
import Navbar from "../ui/Navbar";
import BodyView from "../ui/BodyView";
import SideNav from "../ui/sideNav";


const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      <Navbar />
      <SideNav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <BodyView activeIndex={activeIndex} />
    </>
  );
};

export default Home;
