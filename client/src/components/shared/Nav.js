import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/items">ITEMS</NavLink>
            <NavLink to="/create-item">CREATE ITEM</NavLink>
        </nav>
    );
};

export default Nav;

//then go to Footer.js