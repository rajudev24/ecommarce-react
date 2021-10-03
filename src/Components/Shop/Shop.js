import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../LocalStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    //API or Data called
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchProducts(data)
            })
    }, [])

    // Retrive data from local Storage
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            // console.log(savedCart);
            for (const key in savedCart) {
                const storedProduct = products.find(product => product.key === key);
                if (storedProduct) {
                    const productQuantity = savedCart[key];
                    storedProduct.quantity = productQuantity;
                    storedCart.push(storedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    //Handle Add to Cart
    const addTocart = (product) => {
        // fixed add Item quantity 
        const existsItem = cart.find(item => item.key === product.key);
        let newCart = [];
        if(existsItem){
            const restItem = cart.filter(item => item.key !== product.key);
            existsItem.quantity = existsItem.quantity + 1;
            newCart = [...restItem, product];
        }else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart)
        // Add data to Local Storage 
        addToDb(product.key)
    }

    //Handle Seach
    const handleSearch = event =>{
        const searchTaxt = event.target.value;
        const matchedProdcuts = products.filter(product => product.name.toLowerCase().includes(searchTaxt.toLowerCase()));
        setSearchProducts(matchedProdcuts);
    }

    return (
        <>
            <div className = 'search-container'>
                <input type="text" 
                onChange = {handleSearch}
                placeholder = "Search Products" />
            </div>
            <div className='shop'>
                <div className='shop-container'>

                    {
                        searchProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            addTocart={addTocart}
                        >
                        </Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}> 
                        <Link to ='/order'>
                            <button className='cart-btn'>Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;