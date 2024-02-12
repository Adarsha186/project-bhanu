import React, { useState, useEffect } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebase";
import ProductSlider from "./ProductSlider";

function Category({ category, imagePath }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, "products"), where("category", "==", category));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="home">
      <div className="home__sliderItem">
        <img src={imagePath} alt="main"/>
      </div>
      
      <div className="home__container" id="home__container">
        <div className="home__row">
          {products.map((product) => (
            <ProductSlider
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              image1={product.image1}
              desc={product.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;