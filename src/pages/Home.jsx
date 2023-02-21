import React, { useState } from "react";
import { NavBar } from "../Components/NavBar/NavBar";
import { ProductsList } from "../Components/ProductsList/ProductsList";
import { Cart } from "../Components/Cart/Cart";

export const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <div>
      <NavBar cartCount={cartCount} />
      <div style={{position: 'fixed', top:"15vh", right: "50px", backgroundColor:"lightgreen", width: "20vw", minHeight: "20vh"}}>
        <Cart selectedProducts={selectedProducts}/>
      </div>
      <ProductsList setCartCount={setCartCount} cartCount={cartCount} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts}/>
    </div>
  );
};
