import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul>Get the App</ul>
      </div>
      <div className="navbar-right">
        <ul className="menu">
          <li>Investor Relations</li>
          <li>Add restaurant</li>
          <li>Log in</li>
          <li>Sign up</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
