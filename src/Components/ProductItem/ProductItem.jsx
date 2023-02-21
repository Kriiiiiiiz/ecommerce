import React from 'react'

export const ProductItem = ({product, setCartCount, cartCount, setSelectedProducts, selectedProducts}) => {
  const {name, price, url} = product

  const addToCart = () =>{
    setCartCount(cartCount + 1)
    setSelectedProducts([...selectedProducts, product])
  }

  return (
    <div>
        <p>{name}</p>
        <p>{price}</p>
        <img src={url} alt=""/>
        <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}
