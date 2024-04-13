import React from "react";
import Buttons from "./buttons";

const Numbers = ({ numbers }) => {
  return (
    <div className="numbers-cont">
      {numbers.map((number) => (
        <Buttons number={number} />
      ))}
    </div>
  );
};

export default Numbers;
