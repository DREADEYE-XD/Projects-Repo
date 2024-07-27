import React from 'react'
import Span from './Span'
import { gameCategories } from "../lib/gameCategories";

const SideNavGameCategList = ({activeIndex, handleItemClick}) => {
  return (
    <ul id="categoriesGames" className="Categories_Games">
        {gameCategories.map((games, index) => (
          
          <li
            className={`game_tile ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => handleItemClick(index)}
          >
            
            <Span spanInput={games.game_name} />
          </li>
        ))}
      </ul>
  )
}

export default SideNavGameCategList;