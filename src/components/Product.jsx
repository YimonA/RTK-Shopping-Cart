import React from "react";
import { Button } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/services/cartSlice";

const Product = (props) => {
  const { id, title, image, price, description } = props;
  const {cartItems} = useSelector((state) => state.cart);
  const product =useSelector((state) => state.cart);
  console.log('pro',product);

  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex flex-col w-72 shadow-lg p-7 rounded-lg">
        <img src={image} className="w-[300px] h-[300px]" alt="" />
        <div>
          <h1>{title.substring(0, 25)}...</h1>
          <p>{price}</p>
          <Button
            onClick={() => dispatch(addToCart(props))}
            className="px-6 py-1 bg-violet-800 text-white"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
