import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './Cart.css'
import CartItem from './CartItem';
import Price from './Price';
export default function Cart() {
    const { state } = useContext(AppContext);
    const mergeCart = {};
    const cart = state.cart;

    cart.forEach((element) => {
        if (mergeCart[element.id]) {
            mergeCart[element.id].qty++;
        } else {
            mergeCart[element.id] = { ...element };
        }
    });
    return (
        <div className='cart-content-main'>
            <div className='cart-items-container'>
                {
                    Object.values(mergeCart).map(item => (
                        <CartItem item={item} key={item.id} />
                    ))
                }
            </div>
            <aside className='price-container'>
                <Price></Price>
            </aside>
        </div>

    )
}
