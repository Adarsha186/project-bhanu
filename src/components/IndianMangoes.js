// IndianMangoes.js
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/IndianMangoes.css';

function IndianMangoes() {
  const [products, setProducts] = useState([]);
  const videoPath = require('../images/mangoes/mango.mp4');
  const videoPath2 = require('../images/mangoes/mangoprocess.mp4');
  const imagePath1 = require('../images/mangoes/alphonso.jpg');
  const imagePath2 = require('../images/mangoes/kesar.jpg');
  const imagePath3 = require('../images/mangoes/m2.jpg');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(data);
      } catch (error) {
        console.error("Error fetching Indian Mangoes products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container indianMangoes">
      <Carousel indicators={false} interval={5000}>
        <Carousel.Item>
          <ReactPlayer url={videoPath} playing muted loop width="100%" height="100%" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={imagePath1} alt="Mango 1" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={imagePath2} alt="Mango 2" className="d-block w-100" />
        </Carousel.Item>
      </Carousel>

      <div className="indianMangoes">
        <h2 className="mt-4">Handpicked Indian Mangoes</h2>
        <div className="row mt-4">
          <div className="col-md-6">
            <ReactPlayer url={videoPath2} playing muted loop width="100%" height="auto" />
          </div>
          <div className="col-md-6 text-left">
            <p>
              Discover the exceptional taste of our handpicked Indian mangoes. Our farmers carefully
              select the finest varieties, ensuring each mango is of the highest quality.
            </p>
            <p>
              From the orchard to your doorstep, experience the freshness and sweetness that makes
              Indian mangoes truly special.
            </p>
            <br />
            <p>
              Available only from 15th April to 21st June
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndianMangoes;
