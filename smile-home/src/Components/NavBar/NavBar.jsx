import React from 'react';
import "./NavBar.css";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <NavLink className={({isActive}) => isActive? 'nav-active' : 'nav'} to='/'>All smiles</NavLink>
            <NavLink className={({isActive}) => isActive? 'nav-active' : 'nav'} to='/saved'>Saved smiles</NavLink>
            <NavLink className={({isActive}) => isActive? 'nav-active' : 'nav'} to='/add'>Add smiles</NavLink>
            <NavLink className={({isActive}) => isActive? 'nav-active' : 'nav'} to='/about'>About</NavLink>
        </div>
    );
}

export default NavBar;
