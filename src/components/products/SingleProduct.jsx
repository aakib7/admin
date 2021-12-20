import React from "react";
const SingleProduct = (props) => {
  return (
      <div>
      <h3>{props.product.name}</h3>
      <p>
        <b>Price</b> {props.product.price} PKR
      </p>
      <p>
        <b>Color</b> {props.product.color}
      </p>
      
      </div>
  );
};

export default SingleProduct;