import React from "react";

const SbLayerCategories = () => {
  const categories = [
    "Action Comedies",
    "Action Sci-Fi & Fantasy",
    "Action Thrillers",
    "Adventures",
    "Comic Book and Superhero Movies",
    "Action Anime",
    "Adult Animation",
    "Anime Comedies",
    "Anime Dramas",
    "Anime Sci-Fi",
    "Disney",
    "Family Features",
    "Kids' TV"
  ];

  return(
    <div className="sb-layer-categories">
        <ul className="categories">
            {categories.map((value, index) => (
                <li key={index} className="item"><span>{value}</span></li>
            ))}
        </ul>
    </div>
      
      ) 
};


export default SbLayerCategories;
