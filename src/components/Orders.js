import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import '../styles/Orders.css'

// ... (imports)

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) {
        navigate('/login');
        return;
      }

      try {
        const ordersCollection = collection(db, `users/${user.uid}/orders`);
        const ordersQuery = query(ordersCollection, orderBy('createdAt', 'desc'));

        const snapshot = await getDocs(ordersQuery);

        const ordersData = snapshot.docs.map(doc => ({
          id: doc.id,
          email: user.email,
          ...doc.data(),
        }));

        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders: ', error);
      }
    };

    fetchOrders();
  }, [user, navigate]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>

      {orders.map(order => (
        <div key={order.id} className='order'>
          <div className='order__header'>Order ID: {order.id}</div>
          <div className='order__info'>
            <div>Email: {order.email}</div>
            <div>Date: {order.createdAt?.toDate().toLocaleString()}</div>
          </div>

          <div className='order__items'>
            {order.basket.map(item => (
              <div key={item.id} className='order__item'>
                <p>{item.title}</p>
                <p>{item.price}</p>
                {item.image && <img src={item.image} alt={item.title} />}
              </div>
            ))}
          </div>

          <div className='order__total'>Total: {formatCurrency(getBasketTotal(order.basket))}</div>
        </div>
      ))}
    </div>
  );
};
export default Orders;