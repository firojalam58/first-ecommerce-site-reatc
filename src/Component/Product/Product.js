import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({buttonClickAddToCart, product}) => {
    // const {buttonClickAddToCart, product} = props;
    const {name,img, seller,id,price,ratings,category} = product
    return (
        <div className='product'>
            <img src={img ? img : ''} alt="No Image" />
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Rating: {ratings} star</p>
            </div>
            <button onClick={()=>buttonClickAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;