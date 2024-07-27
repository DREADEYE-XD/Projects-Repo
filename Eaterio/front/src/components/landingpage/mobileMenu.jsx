import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const [menuClick, setMenuClick] = useState(true);

  return (
    <div className="md:hidden max-md:p-2">
      <button
        onClick={() => {
          if (!menuClick) {
            setMenuClick(true);
          } else setMenuClick(false);
        }}
      >
        {menuClick ? (
          <img src="./assests/icons/open.png" alt="" height="20" width="20" />
        ) : (
          <img src="./assests/icons/close.png" alt="" height="20" width="20" />
        )}
      </button>
      {menuClick ? (
        <></>
      ) : (
        <ul className="flex flex-col justify-center items-center absolute top-32 right-10 text-black border border-red-500 bg-white w-36 h-44 text-sm gap-2 [&>*]:self-stretch [&>*]:text-center [&>*:hover]:text-red-500 ">
          <li>
            <NavLink
              to="/home"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "grey" : "red",
                };
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "grey" : "red",
                };
              }}
            >
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "grey" : "red",
                };
              }}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "grey" : "red",
                };
              }}
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "grey" : "red",
                };
              }}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
