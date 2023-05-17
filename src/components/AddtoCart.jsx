import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
//import { addToCart } from "../features/services/cartSlice";

const AddtoCart = () => {
  const { cartItems, totalAmount, quantity } = useSelector(
    (state) => state.cart
  );

  if (cartItems.length == 0) {
    return (
      <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <h2 className=" text-3xl text-gray-600 tracking-wide">
          Your cart is empty.
        </h2>
        <Link to={"/"}>
          <Button
            //onClick={() => dispatch(addToCart(props))}
            className="px-6 py-1 bg-violet-800 text-white"
          >
            go to Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20 gap-7">
        {cartItems?.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>
      <hr className="w-[70%] mx-auto my-5" />
      <div className=" flex justify-between items-center w-[70%] mx-auto">
        <h2 className="text-3xl font-semibold">Total</h2>
        <p className=" text-2xl">${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default AddtoCart;
