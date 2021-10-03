import React from 'react';

const ReviewItem = (props) => {
    const { name, price, img, quantity, key } = props.item;
    const {handleRemove} = props;
    return (
        <div className='product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3>{name} </h3>
                <p>{price} </p>
                <p>{quantity} </p>
                <button onClick = {()=> handleRemove(key) } className='cart-btn '>Remove</button>
            </div>

        </div>
    );
};

export default ReviewItem;