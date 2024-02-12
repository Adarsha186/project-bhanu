import React from "react";
import "../styles/Product.css";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
function Product({ id, title, image, price, desc }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong><small>$</small>
          {price}</strong>
        </p>
      </div> 
        <img src={image} alt="" />
      <button className="product__button" onClick={addToBasket}>Add to Cart</button>
      <Link to={`/product/${id}`}>View Details</Link>
    </div>
  );
}

export default Product;