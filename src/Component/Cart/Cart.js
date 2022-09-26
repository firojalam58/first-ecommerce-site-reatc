import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    const tax = (total * 10/100).toFixed(2);
    return (
        <div className='Cart'>
            <h2>Order Summary</h2>
             <h4>Selected Items: {cart.length}</h4>
             <p>Total Price: ${total}</p>
             <p>Total Shipping: ${shipping}</p>
             <p>Tax: ${tax}</p>
             <h4>Grand Total</h4>
        </div>
    );
};

export default Cart;