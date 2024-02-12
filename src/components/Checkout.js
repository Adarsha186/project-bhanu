import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import { useStateValue } from '../StateProvider';

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <div>
                    <h3>Hello, {user ? user.email : user}</h3>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {basket.map(item =>
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                    )}
                </div>
            </div>
            <div className='checkout__right'>
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout