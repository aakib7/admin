import React, { useState } from "react";
import SingleMobile from "./SingleMobile";
import axios from "axios";
const Products = () => {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    axios
      .get("/api/mobiles")
      .then((res) => {
        setMobiles(res.data);
        setLoading(false);
      });
  };
  React.useEffect(getData, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {mobiles.length === 0 && !loading && (
        <p>Sorry We have No Products to Show</p>
      )}
      {mobiles.map((m) => (
        <SingleMobile mobile={m} />
      ))}
    </div>
  );
};

export default Products;