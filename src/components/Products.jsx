import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loading from "./Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
    setLoading(false);
    //console.log("products", data);
  };

  if(isLoading){
    return <Loading/>
  }
  return (
    <div>
      <div className=" flex flex-wrap justify-center gap-10 my-20">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
