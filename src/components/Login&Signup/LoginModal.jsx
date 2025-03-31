import React, { useState } from "react";
import "./Modal.css"; // For styling

const LoginModal = ({ show, handleClose, handleSignUp }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const isValidPhoneNumber = phoneNumber.length === 10; // Validate Indian phone number format

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidPhoneNumber) {
      console.log("OTP sent to:", `${countryCode} ${phoneNumber}`);
      handleClose(); // Close the modal after sending OTP
    }
  };

  if (!show) return null; // If `show` is false, don't render the modal

  return (
    <div className="modal-overlay">
      <div className="login-modal-content">
        <button className="close-btn" onClick={handleClose}>
          ✖
        </button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="country-code-selector"
            >
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="phone-input"
            />
          </div>
          <button
            type="submit"
            className={`modal-btn ${isValidPhoneNumber ? "" : "disabled-btn"}`}
            disabled={!isValidPhoneNumber}
          >
            Send One Time Password
          </button>
        </form>
        <div className="separator">
          <span>or</span>
        </div>
        <button
          className="modal-btn-alt"
          onClick={() => console.log("Continue with Email")}
        >
          Continue with Email
        </button>
        <div className="google-login">
          <img
            src="https://via.placeholder.com/20" // Replace with Google logo URL
            alt="Google"
          />
          <span>Continue with Google</span>
        </div>
        <p className="signup-link">
          New to Bitescape?{" "}
          <span onClick={() => {
            handleClose();
            handleSignUp();
          }}>
            Create account
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
