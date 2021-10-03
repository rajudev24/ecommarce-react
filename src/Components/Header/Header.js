import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="logo-img" src={logo} alt="" />
            <ul className = 'nav-menu'>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
            </ul>
        </div>

    );
};

export default Header;