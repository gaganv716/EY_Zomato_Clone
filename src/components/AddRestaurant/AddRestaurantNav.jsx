import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./AddRestaurantNav.css";

const AddRestaurantNav = () => {
  return (
    <div className="add-restaurant-container">
      {/* Navbar */}
      <nav className="add-restaurant-navbar">
        <div className="nav-left">
          <span className="brand-name">Bitescape</span>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <Link to="/login" className="nav-link">Log in</Link>
            </li>
            <li>
              <Link to="/signup" className="nav-link">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="add-restaurant-content">
        <h1>Partner with Bitescape and grow your business</h1>
        <p>0% commission for 1st month!
        Valid for new restaurant partners in select cities</p>
        {/* Register Your Restaurant button redirects to home page */}
        <Link to= "/" className="add-restaurant-btn">
          Register Your Restaurant
        </Link>
      </div>
    </div>
  );
};

export default AddRestaurantNav;
