import React, { useState } from 'react';
import cities from 'cities.json'; // Assuming your JSON file is named 'countries.json'
import "./inputPlace.css";
const InputPlace = ({ setCityName }) => {
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setCityName(inputValue); // Update city name in parent component

    // Filter countries based on input value
    const filteredCountries = cities.filter(country =>
      country.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    // Sort filtered countries by name and limit the number of suggestions
    const sortedSuggestions = filteredCountries
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 10) // Limit suggestions to 10

    setSuggestions(sortedSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setCityName(suggestion.name);
    setSuggestions([]); // Clear suggestions
  };

  return (
    <>
      <input
        id='searcher'
        type="text"
        placeholder="Enter a place"
        onChange={handleChange}
      />
      <ul id='suggestion-cont'>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default InputPlace;
