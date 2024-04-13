import React from "react";
import History from "./history";
import Display from "./display";
import Numbers from "./numbers";
import Operators from "./operators";

const Main = () => {
  let numbers = Array.from(Array(10).keys())
  numbers = numbers.reverse();
  const operators = ["+", "-", "/", "*", "="];

  return (
    <div className="outer-cont">
      <div className="inner-cont">
        <div className="display-screen-cont">
          <History />
          <Display />
        </div>
        <div className="input-cont">
          <Numbers numbers={numbers} />
          <Operators operators={operators} />
        </div>
      </div>
    </div>
  );
};

export default Main;
