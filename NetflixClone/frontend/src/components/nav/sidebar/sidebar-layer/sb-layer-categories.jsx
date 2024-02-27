import React from "react";

const SbLayerCategories = () => {
  const categories = [
    "Anime",
    "Dramas",
    "Thriller Movies",
    "Independent Movies",
    "Horror Movies",
    "Children & Family Movies",
    "TV Shows",
    "Romantic Movies",
    "Comdey Movies",
    "Sci-Fi & Fantasy Movies",
    "Music & Musicals",
    "Award Winning Films",
    "Action and Adventure Movies",
    "Documentaries",
    "Hollywood Movies",
    "Available For Download ",
    "International Movies",
  ];

  return(
    <div className="sb-layer-categories">
        <ul className="categories" id="categories">
            <li className="home"><span>Home</span></li>
            {categories.map((value, index) => (
                <li id='item' key={index} className="item"><span>{value}</span></li>
            ))}
        </ul>
    </div>
      
      ) 
};


export default SbLayerCategories;
