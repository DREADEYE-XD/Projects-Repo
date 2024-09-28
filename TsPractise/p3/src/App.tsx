import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Section1} from "./components/section1"
import { Section2 } from "./components/section2";

function App() {
  return (
    <div>
      <Navbar />
      <Section1/>
      <Section2 />
    </div>
  );
}

export default App;
