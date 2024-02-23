import React, { useState, useEffect } from "react";
import "./bodyView.css";
import axios from "axios";
import {
  defaultCurrentWeatherData,
  defualtAverageTemps,
  defaultForecastData,
} from "./defaultData";
import InputPlace from "./bodyComps/inputBtnsComp/inputPlace";
import WeatherComps from "./bodyComps/weatherComps/weatherComps";

const appId = "aa06c5bd726a3a36aaa80f484396993b";
const AQItoken = "79bfb646698f3e8db88b0884bab18ddc2428ca08";
const defaultURL = "https://api.openweathermap.org/data/2.5/";
const defaultAQIURL = "https://api.waqi.info/v2/search/";

const BodyView = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(defaultCurrentWeatherData);
  const [forecastData, setForecastData] = useState(defaultForecastData);
  const [averageTemps, setAverageTemps] = useState(defualtAverageTemps);
  const [aqiData, setAqiData] = useState(undefined);
  const [visibility, setVisibility] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imgLoaderDict = [
    "./icons/animation-ready/dust-day.svg",
    "./icons/animation-ready/dust-wind.svg",
    "./icons/animation-ready/thunderstorms-rain.svg",
    "./icons/animation-ready/hurricane.svg",
  ];
  const searchedData = () => {
    axios
      .get(`${defaultURL}weather?q=${cityName}&appid=${appId}&units=metric`)
      .then(async (response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${defaultURL}forecast?q=${cityName}&appid=${appId}&units=metric`)
      .then(async (response) => {
        setForecastData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${defaultAQIURL}?token=${AQItoken}&keyword=${cityName}`)
      .then(async (response) => {
        setAqiData(response.data.data[0].aqi);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image index
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imgLoaderDict.length - 1 ? 0 : prevIndex + 1
      );
    }, 900); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [imgLoaderDict.length]);

  useEffect(() => {
    const calculateAverageTemps = () => {
      const dailyTemps = {};

      forecastData.list.forEach((forecast) => {
        const currDate = new Date();
        currDate.setHours(0, 0, 0, 0);
        const rawDate = new Date(forecast.dt_txt);
        rawDate.setHours(0, 0, 0, 0);

        if (rawDate > currDate && forecast.sys.pod === "d") {
          const date = `${rawDate.getDate()}/${rawDate.getMonth() + 1}`;

          if (!dailyTemps[date]) {
            dailyTemps[date] = {
              temps: [forecast.main.temp],
              feels_like: [forecast.main.feels_like],
              temp_min: [forecast.main.temp_min],
              temp_max: [forecast.main.temp_max],
              // pressure: [forecast.main.pressure],
              // humidity: [forecast.main.humidity],
              descriptions: [forecast.weather[0].description],
              icons: [forecast.weather[0].icon],
              // wind_speed: [forecast.wind.speed],
              // wind_deg: [forecast.wind.deg],
              // wind_gust: [forecast.wind.gust],
            };
          } else {
            dailyTemps[date].temps.push(forecast.main.temp);
            dailyTemps[date].feels_like.push(forecast.main.feels_like);
            dailyTemps[date].temp_min.push(forecast.main.temp_min);
            dailyTemps[date].temp_max.push(forecast.main.temp_max);
            // dailyTemps[date].pressure.push(forecast.main.pressure);
            // dailyTemps[date].humidity.push(forecast.main.humidity);
            dailyTemps[date].descriptions.push(forecast.weather[0].description);
            dailyTemps[date].icons.push(forecast.weather[0].icon);
            // dailyTemps[date].wind_speed.push(forecast.wind.speed);
            // dailyTemps[date].wind_deg.push(forecast.wind.deg);
            // dailyTemps[date].wind_gust.push(forecast.wind.gust);
          }
        }
      });

      const averages = Object.entries(dailyTemps).map(([date, data]) => ({
        date,
        averageTemp:
          data.temps.reduce((sum, temp) => sum + temp, 0) / data.temps.length,
        feels_like:
          data.feels_like.reduce((sum, feel) => sum + feel, 0) /
          data.feels_like.length,
        temp_min: Math.min(...data.temp_min),
        temp_max: Math.max(...data.temp_max),
        description: data.descriptions[0], // Assuming the weather description is the same for the day
        icon: data.icons[0], // Assuming the weather icon is the same for the day
      }));

      setAverageTemps(averages);
    };

    if (forecastData.list) {
      calculateAverageTemps();
    }
  }, [forecastData]);

  const weatherDataIcon = weatherData.weather[0].icon.replace("n", "d");

  const weatherDesc = weatherData.weather[0].description
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="bodyView">
      <InputPlace
        setCityName={setCityName}
        cityName={cityName}
        setVisibility={setVisibility}
        searchedData={searchedData}
      />
      {visibility ?  
      <WeatherComps
        weatherData={weatherData}
        weatherDataIcon={weatherDataIcon}
        weatherDesc={weatherDesc}
        averageTemps={averageTemps}
        aqiData={aqiData}
        visibility={visibility}
        imgLoaderDict={imgLoaderDict}
        currentImageIndex={currentImageIndex}
      />
       :  null}

 
      
    </div>
  );
};

export default BodyView;


/* <div className="loader">
<img src={imgLoaderDict[currentImageIndex]} alt="" height="35" width="35"/>
</div> */