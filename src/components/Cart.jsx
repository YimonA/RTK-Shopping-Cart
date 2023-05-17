import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "@mantine/core";
import {
  removeFromCart,
  addItemsQuantity,
  subtractItemsQuantity,
} from "../features/services/cartSlice";

const Cart = (props) => {
  const { id, title, price, description, image, quantity } = props;
  const dispatch = useDispatch();
  const oneItemPrice = quantity * price;
  return (
    <div className=" w-[500px]">
      <div
        onClick={() => dispatch(removeFromCart(props))}
        className="flex flex-col relative "
      >
        <Badge
          className="cursor-pointer top-[-10px] right-[90px] absolute"
          color="grape"
        >
          x
        </Badge>
      </div>
      <div className=" flex justify-between items-center w-[80%] bg-gray-50 p-5">
        <div className=" flex items-center gap-5">
          <img src={image} className=" w-[100px] h-[100px]" alt="" />
          <div>
            <h2 className="">{title.substring(0, 25)}</h2>
            <h2>${oneItemPrice.toFixed(2)}</h2>
          </div>
        </div>
        <div className=" flex gap-5 border p-1">
          <p
            onClick={() => dispatch(subtractItemsQuantity(props))}
            className=" cursor-pointer select-none text-base font-medium"
          >
            -
          </p>
          <p className=" cursor-pointer select-none text-base font-medium">
            {quantity}
          </p>
          <p
            onClick={() => dispatch(addItemsQuantity(props))}
            className=" cursor-pointer select-none text-base font-medium"
          >
            +
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
