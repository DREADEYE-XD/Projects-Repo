const API_KEY = 'aa06c5bd726a3a36aaa80f484396993b';

//* Current weather API
// Docs: https://openweathermap.org/current

const fetchCurrWeather = (lat, lon) => {
  const currWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  return currWeather;
};

//* Air Quality API
// Docs: https://openweathermap.org/api/air-pollution

const fetchCurrAQI = (lat, lon) => {
  const currAQI = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  return currAQI;
};

module.exports = {
  fetchCurrWeather,
  fetchCurrAQI
};
