import React from 'react';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    const { name, stock, img, seller, price, star } = props.product

    return (
        <div className='product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4 className='title'>{name}</h4>
                <p>by: {seller}</p>
                <h4>${price}</h4>
                <p>only {stock} left in stock - order soon</p>
                <Rating
                    initialRating = {star}
                    emptySymbol = "far fa-star icon-color"
                    fullSymbol = "fas fa-star icon-color"
                    readonly>
                </Rating> <br />
                <button  onClick={() => props.addTocart(props.product)} className='cart-btn fas fa-shopping-cart' > add to cart</button>
            </div>
        </div>
    );
};

export default Product;
