import React from "react";

const Cart = ({setItemQuantity, itemQuantity}) => {
  return (
    <div className="w-screen h-[calc(100vh-128px)]">
      <div className="flex w-full h-[100px] bg-slate-300 items-center p-4 gap-3">
        <div className="h-[80px] w-[80px]">
          <img
            src="./assests/images/p11.png"
            alt=""
            className="object-contain h-full w-full"
          />
        </div>
        <div>
        <span>Scilian</span>
        <div className="flex gap-2 font-bold items-center ">
              <button
                className="hover:bg-red-700 bg-red-500 text-white px-2 flex justify-center items-center rounded w-[23px]"
                onClick={() => {
                  setItemQuantity(itemQuantity - 1);
                }}
              >
                -
              </button>
              <span className="font-extrabold">{itemQuantity}</span>
              <button
                className="hover:bg-red-700 bg-red-500 text-white px-2 flex justify-center items-center rounded w-[23px]"
                onClick={() => {
                  setItemQuantity(itemQuantity + 1);
                }}
              >
                +
              </button>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
