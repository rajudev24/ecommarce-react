import {useState, useEffect}  from 'react'
import { getStoredCart } from '../LocalStorage'

const useCart = product =>{
    const [cart, setCart] = useState([])

    useEffect(()=>{
        if(product.length){
            const savedCart = getStoredCart();
            const storedCart = [];

            for( const key in savedCart){
                const addedProduct = product.find(pd => pd.key === key);
                    if(addedProduct){
                        const quantity = savedCart[key];
                        addedProduct.quantity = quantity;
                        storedCart.push(addedProduct);
                    }
            }
            setCart(storedCart)

        }
    },[product])
    return [cart, setCart]
}

export default useCart;