import React from "react";
import { useCart } from "../lib/cartContext";

const Cart = () => {
  const { cartItems, updateItemQuantity } = useCart();
  console.log(cartItems);

  return (
    <div className="w-screen h-[calc(100vh-128px)]">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex w-full h-[100px] bg-slate-50 items-center p-4 gap-3"
        >
          <div className="h-[80px] w-[80px]">
            <img
              src={item.img}
              alt={item.title}
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex justify-between items-center w-[70%] h-full">
            <div className="flex flex-col gap-2">
              <span className="text-xl">{item.title}</span>
              <div className="flex gap-2 font-bold items-center ">
                <button
                  className="hover:bg-red-700 bg-red-500 text-white px-2 flex justify-center items-center rounded w-[23px]"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="font-extrabold">{item.quantity}</span>
                <button
                  className="hover:bg-red-700 bg-red-500 text-white px-2 flex justify-center items-center rounded w-[23px]"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <span className="text-xl">${item.price}</span>
          </div>
        </div>
      ))}
      {cartItems ? (<div className=" h-[40px] w-screen ">
        <div className="p-8 w-full h-full bg-slate-400 flex justify-between items-center">
          <button className="px-5 py-1 text-white bg-red-500 hover:bg-red-700">Checkout</button>
          <span>Item Total: <strong>$100</strong></span>
        </div>
      </div>) : <></> }
    </div>
  );
};

export default Cart;
