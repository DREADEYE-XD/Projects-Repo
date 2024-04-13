import React from "react";

const Buttons = (props) => {
  return (
    <button id="btn-cont">
      <span>{props.number}</span>
    </button>
  );
};

export default Buttons;
