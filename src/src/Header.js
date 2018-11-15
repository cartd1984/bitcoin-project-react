import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav" className="bitcoinlinks">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/DollarConversion">Conversion Rate</NavLink></li>
      <li><NavLink to="/BitcoinNewsfeed">Newsfeed</NavLink></li>
    </ul>    
  </header>
);

export default Header;
