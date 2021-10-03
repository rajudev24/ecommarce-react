import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/UseProducts';
import { clearTheCart, removeDb } from '../../LocalStorage';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {

    const [product, setProduct] = useProducts();
    const [cart, setCart] = useCart(product);
    const history = useHistory()

    const handleRemove = key =>{
        const newCart = cart.filter(item => item.key !==key);
        setCart(newCart)
        removeDb(key)
    }

    const handlePlaceOrder = ()=>{
        history.push('/placeorder')
        setCart([]);
        clearTheCart();
    }
    
    return (
        <div>
            <div className='shop'>
                <div className='shop-container'>
                   {
                      cart.map(item => <ReviewItem 
                        key = {item.key}
                        item ={item}
                        handleRemove = {handleRemove}
                        ></ReviewItem>)
                   }
                </div>

                <div className='cart-container'>
                    <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='cart-btn'>Place Order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;