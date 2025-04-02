import React, { useState } from "react";
import "./Modal.css";

const LoginModal = ({ show, handleClose, handleSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isValidEmail = email.trim().length > 0 && email.includes("@");
  const isValidPassword = password.length >= 6;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail || !isValidPassword) return;
    
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token); // Store JWT token
      console.log("Logged in successfully:", email);
      handleClose();
      window.location.href = "/home"; // Redirect to home page
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Login error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={handleClose}>✖</button>
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="modal-form">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button 
            type="submit" 
            className={`modal-btn ${isValidEmail && isValidPassword ? "" : "disabled-btn"}`}
            disabled={!isValidEmail || !isValidPassword || isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="signup-link">
          New to Bitescape? <span onClick={() => { handleClose(); handleSignUp(); }}>Create account</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
