import React from "react";
import "../styles/Product.css";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

function ProductSlider({ id, title, image, image1, price, desc }) {
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
          <strong>
            <small>$</small>
            {price}
          </strong>
        </p>
      </div>
      {image1 ? (
        <Carousel className="product__images">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="Main Image"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="Nutrition Facts"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </Carousel.Item>
        </Carousel>
      ) : (
        <img
          className="product__image"
          src={image}
          alt="Main Image"
          style={{ maxHeight: "300px", objectFit: "contain" }}
        />
      )}
      <button className="product__button" onClick={addToBasket}>
        Add to Cart
      </button>
      <Link to={`/product/${id}`}>View Details</Link>
    </div>
  );
}

export default ProductSlider;
