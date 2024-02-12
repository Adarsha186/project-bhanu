import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebase";
import ProductCard from "./ProductCard";
import MainCard from "./MainCard";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const videoPath = require('../images/title_video.mp4');
  const [flashyBanner, setFlashyBanner] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, "products"), where("category", "==", "cpo"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    const flashyBanners = [
      "VISIT OUR BOOTH AT EXPO WEST FOR EXCLUSIVE OFFERS!",
      "NEW ARRIVALS JUST IN - CHECK THEM OUT NOW!",
      "LIMITED-TIME DISCOUNTS ON SELECTED PRODUCTS – DON'T MISS OUT!",
    ];

    let currentIndex = 0;

    const updateBanner = () => {
      setFlashyBanner(flashyBanners[currentIndex]);
      currentIndex = (currentIndex + 1) % flashyBanners.length;
    };

    updateBanner();

    const intervalId = setInterval(updateBanner, 5000);
    return () => clearInterval(intervalId);

  }, []);

  return (
    <div className="home">
      <div className="home__flashyBanner">
        {flashyBanner && <p>{flashyBanner}</p>}
      </div>
      <div className="home__sliderItem">
        <video autoPlay loop muted className="home__video">
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <ProductCard/>

      <MainCard/>

      <Link to="/whatsapp" className="whatsapp-icon">
        <div
          style={{
            position: 'fixed',
            bottom: '1rem', 
            right: '1rem', 
            backgroundColor: '#25d366', 
            padding: '0.5rem', 
            borderRadius: '50%', 
            zIndex: '1000',
            cursor: 'pointer',
          }}
        >
          <FaWhatsapp style={{ fontSize: '5rem', color: 'white' }} /> 
        </div>
      </Link>
    </div>
  );
}

export default Home;
