import React from "react";
import Navbar from "./components/navbar/navbar";
import BodyView from "./components/bodyView/bodyView";
import "./app.css";
import Footer from "./components/footer/footer";
//Current Weather
//const baseUrl = "https://api.openweathermap.org/data/2.5/";

function App() {
  return (
    <div id="main-container">
      <div className="cont-items">
        <Navbar />

        <BodyView />

        <Footer />
      </div>
      <img id="background-img" src="./images/sunny_bg.jpg" alt="" />
    </div>
  );
}

export default App;
