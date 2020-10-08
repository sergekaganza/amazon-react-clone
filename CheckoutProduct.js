import React from "react";

function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price"></p>
        <small>$</small>
        <strong>{price}</strong>
      </div>
    </div>
  );
}

export default CheckoutProduct;
