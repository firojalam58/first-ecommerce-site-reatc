import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
             <h2>Total Item Added: {cart.length}</h2>
        </div>
    );
};

export default Cart;