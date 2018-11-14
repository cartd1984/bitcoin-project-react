import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">Bitcoin Symbols</NavLink></li>
      <li><NavLink to="/teachers">Conversion Rate</NavLink></li>
      <li><NavLink to="/courses">Bitcoin Wallet</NavLink></li>
    </ul>    
  </header>
);

export default Header;
