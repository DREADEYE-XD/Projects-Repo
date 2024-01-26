import React, {useState} from "react";
import "./bodyView.css";
//import CurrWeather from "./bodyComps/currWeatherComps/currWeather";
import axios from "axios";

// const appId = "aa06c5bd726a3a36aaa80f484396993b";

const BodyView = () => {
  // const [search, setSearch] = useState();
  const [weatherData, setWeatherData] = useState({});

  //const currWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${appId}&units=metric`;

  const searchedData = () => {
    // Promise.all(
    //   `http://dataservice.accuweather.com/currentconditions/v1/3146227?apikey=RwOcU1Iuif2zwzfRYVUb9X1gwpdWPTyO&language=en-us&details=false`
    // ).then(async (response) => {
    //   console.log(response.data);
    // });

    // fetch(
    //   `http://dataservice.accuweather.com/currentconditions/v1/3146227?apikey=RwOcU1Iuif2zwzfRYVUb9X1gwpdWPTyO&language=en-us&details=false`
    // ).then((response) => {
    //   console.log(response.data);
    // });

    axios.get(`http://dataservice.accuweather.com/currentconditions/v1/3146227?apikey=RwOcU1Iuif2zwzfRYVUb9X1gwpdWPTyO&language=en-us&details=false`)
    .then(response => {
      let res = response.data;
      console.log(res);
      setWeatherData(res);
    })
    .catch(error => {
      console.log(error);
    });
  };

  console.log(weatherData[0]);

  return (
    <body>
      <input
        type="text"
        placeholder="Enter a place"
        // onChange={(e) => {
        //   setSearch(e.target.value);
        // }}
      />
      <button onClick={searchedData}>Submit</button>
      {/* 9<CurrWeather /> */}
    </body>
  );
};

export default BodyView;
