import React from "react";
const SingleProduct = (props) => {
  return (
      <div>
      <h3>{props.mobile.model}</h3>
      <p>
        <b>Price</b> {props.mobile.price} PKR
      </p>
      <p>
        <b>Color</b> {props.mobile.color}
      </p>
      
      </div>
  );
};

export default SingleProduct;