import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FoodCards from "../components/FoodCards";
import SearchBar from "../components/Searchbar";
import Collection from "../components/Collection";
import Localities from "../components/Localities";
import BitescapeApp from "../components/BitescapeApp";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import LoginModal from "../components/Login&Signup/LoginModal"; // Correct import
import SignupModal from "../components/Login&Signup/SignupModal"; // Correct import
import "./Home.css";

const Home = () => {
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
    setShowLogin(false); // Close Login modal
    setShowSignup(false); // Close Signup modal
  };

  return (
    <div>
      {/* Navbar with Login & Signup Handlers */}
      <Navbar onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
      
      {/* Main Sections */}
      <SearchBar />
      <FoodCards />
      <Collection />
      <Localities />
      <div id="bitescape-app-section">
        <BitescapeApp />
      </div>
      <Explore />
      <Footer />

      {/* Login Modal */}
      <LoginModal
        show={showLogin} // Show modal based on state
        handleClose={handleCloseModals} // Close modal handler
        handleSignUp={() => {
          setShowLogin(false); // Close Login modal
          setShowSignup(true); // Open Signup modal
        }}
      />

      {/* Signup Modal */}
      <SignupModal
        show={showSignup} // Show modal based on state
        handleClose={handleCloseModals} // Close modal handler
        handleLogin={() => {
          setShowSignup(false); // Close Signup modal
          setShowLogin(true); // Open Login modal
        }}
      />
    </div>
  );
};

export default Home;
