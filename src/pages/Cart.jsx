import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
 
 const removeProduct = (product) =>{
    const filteredProducts = cart.filter((prd)=>{
        return product.id !== prd.id
    })
    setCart(filteredProducts)
 }

  return (
    <div style={{ backgroundImage:`url("https://wallpaper.dog/large/20545256.png")`,backgroundRepeat:"no-repeat" }}>
      <Link to="/products">Go to Products!</Link>
      {cart.map((product, index) => {
        const {name, price, id} = product
        return (
          <div key={`${id}-${index}`}>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={()=>removeProduct(product)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

