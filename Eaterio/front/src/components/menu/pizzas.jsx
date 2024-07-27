import React from "react";
import { pizzas } from "../../lib/definition";
import { NavLink } from "react-router-dom";

const Pizzas = () => {
  return (
    <div className="h-max w-screen flex flex-col p-3 lg:flex-row lg:h-[calc(100vh-80px)] lg:flex-wrap lg:p-0 lg:items-center">
      {/* <div className="h-full w-full "> */}
      {pizzas.map((pizza, index) => (
        <div
          className="h-[60%] w-full flex flex-col justify-between items-center gap-7 border-[1px] border-red-500 hover:bg-red-100 lg:h-1/2 lg:w-1/3 lg:flex-grow lg:gap-0"
          key={pizza.id}
        >
          <div className="h-[70%] w-[90%] flex justify-center items-center p-2 lg:h-[70%] lg:p-0 lg:mt-2">
            <img
              src={pizza.img}
              alt=""
              className="object-contain h-[85%] w-[90%]"
            />
          </div>
          <div className="flex justify-between items-center p-4 w-full text-red-500 font-bold text-[20px]">
            <span>{pizza.title}</span>

            <div className="flex justify-center items-center gap-2">
              <span>${pizza.price}</span>
              <NavLink
                to={`/product/pizza/${pizza.id}`}
                className="bg-red-500 hover:bg-red-700 text-white px-4 rounded text-center flex items-center"
              >
                <span>+</span>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
    // </div>
  );
};

export default Pizzas;
