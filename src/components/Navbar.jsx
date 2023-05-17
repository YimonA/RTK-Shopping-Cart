import React, { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { FaShoppingBag } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { Badge } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search,setSearch]=useState("");
  const nav=useNavigate();

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
  
  const searchHandler=e=>{
    e.preventDefault();
    nav('/search',{state:{item:filterProducts}});
    setSearch("");
  }

  const filterProducts=products.filter(item=>item.title.toLowerCase().includes(search));
  //console.log(cartItems);

  return (
    <div>
      <div className="flex justify-around p-7 shadow-md ">
        <Link to="/">
          <h1 className=" text-2xl text-gray-500">Comfity</h1>
        </Link>
        <div className=" flex items-center">
          <form onSubmit={searchHandler}>

          <Input value={search} onChange={(e=>setSearch(e.target.value))}
            icon={<HiSearch />}
            variant="filled"
            placeholder="Search"
            radius="md"
            />
            </form>
          <Link to={"/addtocart"}>
            <div className="relative flex gap-5 ml-8">
              <FaShoppingBag className=" text-violet-900 text-3xl relative z-10" />
              <Badge className="bottom-6 left-5 absolute" color="grape">
                {cartItems.length}
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
