import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, where, query, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productQuery = query(collection(db, 'products'), where('id', '==', parseInt(id, 10)));
        const productSnapshot = await getDocs(productQuery);

        if (!productSnapshot.empty) {
          const productData = { id: productSnapshot.docs[0].id, ...productSnapshot.docs[0].data() };
          setProduct(productData);
        } else {
          console.log('Product not found');
          return null;
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        return null;
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail p-4">
      <div dangerouslySetInnerHTML={{ __html: product.desc }} />
    </div>
  );
};

export default ProductDetail;