import React from "react";

export const Cart = ({ selectedProducts }) => {
  return (
    <div>
      <p>Cart</p>
      {selectedProducts.map((product) => {
        return (
          <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};
