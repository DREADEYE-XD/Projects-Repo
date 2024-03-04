import React from "react";

const TestComp = ({popularMovie, imageUrl}) => {
  

  return (
    <>

        

      <div>{popularMovie}</div>
      <img src={imageUrl } alt="" height='70' width='40' />
    </>
  );
};

export default TestComp;
