import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'


const Shop = () => {
    // const [products, setProducts] = useState([]);n
    const products = useLoaderData();
    const [cart , setCart] = useState([])


    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    
    // useEffect( ()=>{
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // }, []);

    useEffect ( ()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
     }, [products]);

    const handleAddToCart = (selectProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === selectProduct.id);
        if(!exists){
            selectProduct.quantity = 1;
            newCart = [...cart ,selectProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest , exists];
        }
        setCart(newCart);
        addToDb(selectProduct.id)

    }

    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product => <Product
                key={product.id}
                product={product}
                handleAddToCart ={handleAddToCart}
                ></Product> )
            }
            </div>

            <div className="cart-container">
               <Cart clearCart={clearCart} cart= {cart}>
               <Link to={'/orders'}>
                    <button>Review Order</button>
                </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;