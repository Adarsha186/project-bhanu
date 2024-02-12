// ProductCard.js
import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBRipple,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

import cold_pressed_oil from '../images/cold_pressed_oils/main.jpg';
import jaggeryImage from '../images/jaggery/Jaggery_Image.webp';
import fert from '../images/turmeric/fert.jpg'
import mangoImage from '../images/mangoes/alphonso.jpg';
import spirulinaImg from '../images/spirulina/main.jpeg';
import essentialOil from '../images/essential_oils/main.webp'

const ProductCard = () => {
  const products = [
    { id: 1, name: 'Cold Pressed Oils', image: cold_pressed_oil, link: "/category/cpo" },
    { id: 2, name: 'Natural Foods', image: jaggeryImage, link: "/category/nfoods" },
    { id: 3, name: 'Natural Fertilizers', image: fert, link: "/category/fertilizers"},
    { id: 4, name: 'Mangoes', image: mangoImage, link: "/category/indian-mangoes"},
    { id: 5, name: 'Spirulina Products ', image: spirulinaImg, link: "/category/sp"},
    { id: 6, name: 'Essential Oils', image: essentialOil, link: "/category/indian-mangoes"},
  ];

  return (
    <MDBContainer fluid className="my-5 text-center">
      <MDBRow>
        {products.map((product) => (
          <MDBCol key={product.id} md="12" lg="4" className="mb-4">
            <MDBRipple
              rippleColor="dark"
              rippleTag="div"
              className="bg-image rounded hover-zoom shadow-1-strong"
            >
              <img
                src={product.image}
                alt={product.name}
              />
              <Link to={product.link}>
                <div className="mask">
                  <div className="hover-overlay">
                    <h5>
                      <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                        {product.name}
                      </span>
                    </h5>
                  </div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default ProductCard;
