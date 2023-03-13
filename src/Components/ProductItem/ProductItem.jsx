import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ProductItem = ({ product }) => {
  const { name, url, price} = product;
  const {cart, setCart} = useContext(CartContext)

  const addProduct = () => {
    setCart([...cart, product])
  };

  return (
    <div style={{border: '1px solid red', borderRadius: '12px'}}>
      <img alt="" src={url} />
      <p style={{ color: 'white' }}>{name}</p>
      <p style={{ color: 'gray' }}>{price}</p>
      <button onClick={addProduct}>Add to Cart</button>
    </div>
  );
};
