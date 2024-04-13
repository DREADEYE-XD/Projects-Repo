import React from "react";

const History = () => {
  return (
    <div className="history-screen">
      <div className="hist-span-cont">
        <span id="hist-expression">20+30</span>
        <span id="hist-result">50</span>
      </div>
      <div className="hist-span-cont">
        <span id="hist-expression">30+40</span>
        <span id="hist-result">70</span>
      </div><div className="hist-span-cont">
        <span id="hist-expression">10+10</span>
        <span id="hist-result">20</span>
      </div><div className="hist-span-cont">
        <span id="hist-expression">10+20</span>
        <span id="hist-result">30</span>
      </div>
    </div>
  );
};

export default History;
