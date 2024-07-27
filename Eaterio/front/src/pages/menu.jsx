import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../lib/definition";

const Menu = () => {
  return (
    <div className="w-screen h-screen p-5 lg:h-[80vh]">
      <div className="h-full w-full flex flex-col gap-1 justify-center items-center lg:flex-row">
        {menu.map((item) => (
          <NavLink
            to={`${item.slug}`}
            className="w-full h-1/3 flex justify-start flex-col text-white cursor-pointer lg:h-[70%]"
            style={ item.color === 'black' ? {"color" : "#000"} : {"color" : "#fff"}}
            key={item.id}
          >
            <img className="object-cover h-full w-full" src={item.img} alt="" />
            <div className="absolute p-4 w-[44%] flex flex-col items-start gap-7 lg:w-[17%]">
              <span className="text-2xl font-bold">{item.title}</span>
              <p>{item.desc}</p>

              <div className=" hidden lg:flex lg:justify-center lg:items-center">
                <span className="hover:underline">Explore</span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
