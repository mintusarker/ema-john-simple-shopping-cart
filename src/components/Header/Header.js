import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
       <nav className='Header'>
        <img src={logo} alt="" />
        <div className='btn'>
            <a href="/Shop">Shop</a>
            <a href="/orders">Orders</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About</a>
        </div>
       </nav>
    );
};

export default Header;