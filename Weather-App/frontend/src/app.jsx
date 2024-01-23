import React from "react";
import Navbar from "./components/navbar/navbar";
import BodyView from "./components/bodyView/bodyView";
import "./app.css";
//Current Weather
//const baseUrl = "https://api.openweathermap.org/data/2.5/";

function App() {


  return (
    <div>
      <Navbar />

      <BodyView />
    </div>
  );
}

export default App;
