import React, { useState, useRef, useEffect } from "react";
import cities from "cities.json";
import "./inputPlace.css";

const InputPlace = ({ setCityName, setVisibility, searchedData }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [suggestionVisib, setSuggestionVisib] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [imgStyle, setImgStyle] = useState({
    transition: "200ms ease-in-out",
    transform: "rotate(0deg)",
  });

  const [submitted, setSubmitted] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (suggestions.length === 0) return;

      switch (e.key) {
        case "ArrowDown":
          setHighlightedIndex((prevIndex) =>
            prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
          );
          break;
        case "ArrowUp":
          setHighlightedIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          );
          break;
        case "Enter":
          if (highlightedIndex !== -1) {
            handleSuggestionClick(suggestions[highlightedIndex]);
          }
          break;
        case "Escape":
          setHighlightedIndex(null);
          setSuggestionVisib(false);
          break;

        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [highlightedIndex, suggestions]);

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setSuggestionVisib(false);
    } else setSuggestionVisib(true);

    setCityName(inputValue);
    setInputValue(inputValue);

    const filteredCities = cities.filter((city) =>
      city.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    const sortedSuggestions = filteredCities
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 6);

    setSuggestions(sortedSuggestions);
    setHighlightedIndex(-1);
  };

  const handleSuggestionClick = (suggestion) => {
    setCityName(suggestion.name);
    setSuggestions([]);
    setInputValue(suggestion.name);
    setHighlightedIndex(-1);
  };

  const handleSubmit = (e) => {
    inputRef.current.focus();
    setVisibility(true);
    searchedData();
    setImgStyle({
      transition: "200ms ease-in-out",
      transform: "rotate(90deg)",
    });
    setInputValue("");

    if (e.key === "Enter") {
      inputRef.current.focus();
      setVisibility(true);
      searchedData();
      setImgStyle({
        transition: "200ms ease-in-out",
        transform: "rotate(90deg)",
      });
      setInputValue("");
      setBtnDisabled(true);
    }

    setSubmitted("submitted");
  };

  return (
    <div className={"inputPlace " + submitted}>
      <div className="input-btns">
        <input
          ref={inputRef}
          id="searcher"
          type="text"
          placeholder="Enter a place"
          onChange={(e) => {
            handleChange(e);
            
            if (e === null) {
              setBtnDisabled(true);
            } else setBtnDisabled(false);
          }}
          value={inputValue}
        />
        {suggestionVisib && suggestions.length > 0 && (
          <ul className="suggestion-cont">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className={index === highlightedIndex ? "highlighted" : ""}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={btnDisabled ? "submit-btn-disabled" : "submit-btn"}>
        <button
          onClick={(e) => {handleSubmit(e); setBtnDisabled(true);}}
          onKeyDown={handleSubmit}
          disabled={btnDisabled}
        >
          <div id={btnDisabled ? "submit-img-cont-disabled" :"submit-img-cont"}>
            <img
              style={btnDisabled ? null : imgStyle}
              id="submit-img"
              src="./icons/arrow-right.png"
              alt=""
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default InputPlace;
