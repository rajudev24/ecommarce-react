import React from 'react';
import { useHistory } from 'react-router';

const Cart = (props) => {
    const history = useHistory();
    

    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if(!product.quantity){
            product.quantity = 1
        }
        total = total + product.price * product.quantity ;
        totalQuantity = totalQuantity + product.quantity;
    }
    let shipping = total > 0 ? 15 :0;
    let beforeTax = total + shipping;
    let taxCost = (total + shipping) * 0.10;
    let Grandtotal = beforeTax + taxCost;
    //handle Order Review Buttom
    const handleOrderReview = () =>{
        history.push(`/order`)
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Ordered: {totalQuantity}</p>
            <div>
                <p>Total: ${total.toFixed(2)}</p>
                <p>Shipping & Handling: ${shipping.toFixed(2)}	</p>
                <p>Total before tax: ${beforeTax.toFixed(2)}</p>
                <p>Estimated Tax: ${taxCost.toFixed(2)}</p>
                <h4>Grand Total: ${Grandtotal.toFixed(2)}</h4>
                {/* <button onClick={handleOrderReview} className='cart-btn'>Review Order</button> */}
                {props.children}
            </div>   
        </div>
    );
};

export default Cart;