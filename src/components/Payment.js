import React, { useState } from 'react';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import '../styles/Payment.css';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const Payment = () => {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const orderDoc = doc(db, `users/${user?.uid}/orders/${new Date().getTime()}`);

    try {
      await setDoc(orderDoc, {
        basket: basket.map(item => ({ id: item.id, title: item.title, price: item.price, image: item.image })),
        createdAt: new Date(),
      }, { merge: true, credentials: 'include' });

      setSucceeded(true);
      setError(null);
      setProcessing(false);
      dispatch({
        type: 'EMPTY_BASKET',
      });
      navigate('/orders');
    } catch (error) {
      console.error('Error processing the order: ', error);
      setError('Error processing the order. Please try again.');
      setProcessing(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>Checkout ({basket?.length} items)</h1>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Shipping Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>25200 Carlos Bee Blvd</p>
            <p>Hayward, CA - 94542</p>
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items for delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map(item => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__section'>
            <h3>Payment Methods</h3>
          </div>
          <div className='payment__details'>
            <form onSubmit={handleSubmit}>
              <div className='payment__priceContainer'>
                <p>
                  Total : <strong>{formatCurrency(getBasketTotal(basket))}</strong>
                </p>
                <button disabled={processing || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
