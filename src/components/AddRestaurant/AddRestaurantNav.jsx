import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import LoginModal from "../Login&Signup/LoginModal";
import SignupModal from "../Login&Signup/SignupModal";
import "./AddRestaurantNav.css";

const AddRestaurantNav = () => {
  const [showLogin, setShowLogin] = useState(false); // State for Login modal
  const [showSignup, setShowSignup] = useState(false); // State for Signup modal

  const handleLoginClick = () => {
    setShowLogin(true); // Show Login modal
    setShowSignup(false); // Ensure Signup modal is closed
  };

  const handleSignupClick = () => {
    setShowSignup(true); // Show Signup modal
    setShowLogin(false); // Ensure Login modal is closed
  };

  const handleCloseModals = () => {
    setShowLogin(false); // Close both modals
    setShowSignup(false);
  };

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
              <span className="nav-link" onClick={handleLoginClick}>
                Log in
              </span>
            </li>
            <li>
              <span className="nav-link" onClick={handleSignupClick}>
                Sign up
              </span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="add-restaurant-content">
        <h1>Partner with Bitescape and grow your business</h1>
        <p>
          0% commission for 1st month! Valid for new restaurant partners in select cities
        </p>
        <Link to="/" className="add-restaurant-btn">
          Register Your Restaurant
        </Link>
      </div>

      {/* Login Modal */}
      <LoginModal
        show={showLogin}
        handleClose={handleCloseModals}
        handleSignUp={() => {
          setShowLogin(false);
          setShowSignup(true); // Switch to Signup modal
        }}
      />

      {/* Signup Modal */}
      <SignupModal
        show={showSignup}
        handleClose={handleCloseModals}
        handleLogin={() => {
          setShowSignup(false);
          setShowLogin(true); // Switch to Login modal
        }}
      />
    </div>
  );
};

export default AddRestaurantNav;
