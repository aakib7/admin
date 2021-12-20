import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    axios
      .get("https://usman-recipes.herokuapp.com/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
  };
  React.useEffect(getData, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {products.length === 0 && !loading && (
        <p>Sorry We have No Products to Show</p>
      )}
      {products.map((p) => (
        <SingleProduct product={p} />
      ))}
    </div>
  );
};

export default Products;