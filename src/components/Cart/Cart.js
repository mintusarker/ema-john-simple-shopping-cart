import React from 'react';
import'./Cart.css';

const Cart = (props) => {
    const {cart, clearCart,children} = props;
    // console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for( const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = Number((total * 0.1).toFixed(2));
    const grandTotal = total + tax + shipping;

    return (
        <div className='cart'>
             <h3>Order summary</h3>
             <p>Selected Items : {quantity}</p>
             <p>Total price : $ {total}</p>
             <p>Total Shipping Charge : $ {shipping}</p>
             <p>Tax : $ {tax}</p>
             <h4>Grand Total : $ {grandTotal.toFixed(2)} </h4>
             <button onClick={clearCart}>Clear Cart</button>
             <br />
             {children}
        </div>
        
    );
};

export default Cart;