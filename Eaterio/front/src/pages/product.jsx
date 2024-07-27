import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { burgers, pastas, pizzas } from "../lib/definition";
import PizzaSizeOptions from "../components/product/pizzaSizeOptions";

const Product = () => {
  const { category, id } = useParams();
  const [itemSize, setItemSize] = useState("Small");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);

  

  const getCategoryItems = (category) => {
    switch (category) {
      case "pizza":
        return pizzas;
      case "burger":
        return burgers;
      case "pasta":
        return pastas;
      default:
        return [];
    }
  };

  if (itemQuantity < 1) {
    setItemQuantity(1);
  }

  const items = getCategoryItems(category);
  const item = items.find((i) => i.id === parseInt(id));
  

  useEffect(() => {
    // return () => {
      
    setItemPrice(item.price);
    if (item) {
      const selectedOption = item.options.find(
        (option) => option.title === itemSize
      );
      const additionalPrice = selectedOption
        ? selectedOption.additionalPrice
        : 0;
      setItemPrice(item.price + additionalPrice);
    }
    // };
  }, [item.price, item, itemSize]);

  if (!item) {
    return <div>Item not found</div>;
  }

  const sizeButtonClass = (size) =>
    `border-[1px] border-red-500 rounded px-3 py-[3px] ${
      itemSize === size ? "bg-red-500 text-white" : ""
    }`;

  return (
    <div className="w-screen h-[calc(100vh-128px)] md:h-[calc(100vh-80px)] md:flex">
      <div className="w-full h-1/2 flex justify-center items-center md:h-full md:w-1/2 md:justify-end md:items-center">
        <img
          src={item.img}
          alt=""
          className="object-contain h-[90%] w-[90%] md:h-[70%] md:w-[70%] lg:h-[55%] lg:w-[55%]"
        />
      </div>
      <div className=" h-1/2 w-full p-7 flex flex-col text-red-500 gap-4 md:w-1/2 md:h-full md:justify-center">
        <span className="text-2xl font-bold">{item.title}</span>
        <p className="w-2/3">{item.desc}</p>
        <div className="flex gap-2 items-center">
          <span className="text-2xl font-bold">${itemPrice}</span>
          {itemQuantity > 1 ? (
            <span>
              {`(Total Price:`}{" "}
              <span className="font-bold">
                {" "}
                ${`${Math.round(itemPrice * itemQuantity * 100) / 100}`}
              </span>
              {`)`}
            </span>
          ) : (
            <></>
          )}
        </div>
        {
          category==='pizza' ? <PizzaSizeOptions sizeButtonClass={sizeButtonClass} setItemSize={setItemSize}/> : <></>
        }
        <div className="flex gap-3 items-center ">
          <div className="flex justify-between gap-3 border-[1px] px-3 py-[3px] border-red-500 w-1/2">
            <span>Quantity</span>
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
          <button className="px-5 py-1 text-white bg-red-500">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
