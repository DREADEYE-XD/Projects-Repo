import React from "react";
import Buttons from "./buttons";

const Operators = ({ operators }) => {
  return (
    <div className="operators-cont">
      {operators.map((opr, index) => (
        <Buttons id={index} number={opr} />
      ))}
    </div>
  );
};

export default Operators;
