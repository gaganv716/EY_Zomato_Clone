import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { MdSmartphone } from "react-icons/md";
import LoginModal from "../components/Login&Signup/LoginModal";
import SignupModal from "../components/Login&Signup/SignupModal";
import "./Navbar.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false); // Ensure Signup modal is closed
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false); // Ensure Login modal is closed
  };

  const handleCloseModals = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul>
          <ScrollLink
            to="bitescape-app-section"
            smooth={true}
            duration={500}
            className="navbar-link"
          >
            <MdSmartphone className="smartphone-icon" /> Get the App
          </ScrollLink>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="menu">
          <li>
            <Link to="/add-restaurant" className="navbar-link">
              Add restaurant
            </Link>
          </li>
          <li>
            <span className="navbar-link" onClick={handleLoginClick}>
              Log in
            </span>
          </li>
          <li>
            <span className="navbar-link" onClick={handleSignupClick}>
              Sign up
            </span>
          </li>
        </ul>
      </div>

      {/* Login Modal */}
      <LoginModal
        show={showLogin}
        handleClose={handleCloseModals}
        handleSignUp={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
      />

      {/* Signup Modal */}
      <SignupModal
        show={showSignup}
        handleClose={handleCloseModals}
        handleLogin={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
      />
    </nav>
  );
};

export default Navbar;
