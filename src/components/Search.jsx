import React from 'react'
import { useLocation } from 'react-router-dom'
import Product from "./Product";

const Search = () => {
    const location=useLocation();

    const items=location.state?.item;
    console.log(location.state?.item);
  return (
    <div>
      <h2 className=' my-5 text-blue-500 px-3'>Search Result:</h2>
      <div className="flex justify-center ">

      {items.map(item=>{
        return(
          <Product key={item.id} {...item}></Product>
          )
        })}
        </div>
    </div>
  )
}

export default Search
