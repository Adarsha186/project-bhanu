import React from 'react';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

const SubTotal = () => {
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    return (
        <div className='subtotal'>
            <p>
                Subtotal ({basket.length} items): <strong>{formatCurrency(getBasketTotal(basket))}</strong>
            </p>
            <button className="checkout__button" onClick={() => navigate('/payment')}>Proceed to Checkout</button>
        </div>
    );
};

export default SubTotal;
