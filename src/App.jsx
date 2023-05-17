import React from "react";
import { Route, Routes } from "react-router-dom";
import AddtoCart from "./components/AddtoCart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Routeguard from "./components/Routeguard";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/addtocart" element={<AddtoCart />}></Route>

        <Route
          path="/search"
          element={
            <Routeguard>
              <Search />
            </Routeguard>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
