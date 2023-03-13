import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductItem } from "../components/ProductItem/ProductItem";
import { UserContext } from "../context/UserContext";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { updateUserData } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch("http://localhost:3001/products");
      const data = await res.json();
      setProducts(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const handleLogOut = () => {
    updateUserData({
      email: ""
    })
  }

  return (
    <div style={{ backgroundImage:`url("https://wallpaper.dog/large/20545256.png")`,backgroundRepeat:"no-repeat" }}>
      <Link to="/cart">Go to cart</Link>
      <button onClick={handleLogOut}>Log Out</button>
      {isLoading && <p>Loading...</p>}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "3rem",
        }}
      >
        {products.length &&
          products.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};
