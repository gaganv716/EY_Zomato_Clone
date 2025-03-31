import React, { useState } from "react";
import "./Modal.css"; // Import custom CSS

const SignupModal = ({ show, handleClose, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Email validation
  const isValidEmail = email.trim().length > 0 && email.includes("@");

  // ✅ Password validation (at least 6 characters)
  const isValidPassword = password.length >= 6;

  // ✅ Confirm password validation
  const passwordsMatch = password === confirmPassword;

  // ✅ Handle Sign Up Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail || !isValidPassword || !passwordsMatch) return;

    setIsSubmitting(true);

    try {
      // Simulate API call (replace with real backend request)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Account created:", { email });

      // Reset form fields
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      handleClose(); // Close Sign Up modal
    } catch (error) {
      console.error("Signup failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null; // If `show` is false, don't render the modal

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={handleClose}>
          ✖
        </button>
        <h2>Sign Up</h2>
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
            placeholder="Enter a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`modal-btn ${
              isValidEmail && isValidPassword && passwordsMatch ? "" : "disabled-btn"
            }`}
            disabled={!isValidEmail || !isValidPassword || !passwordsMatch || isSubmitting}
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => {
            handleClose(); // Close Sign Up modal
            handleLogin(); // Open Login modal
          }}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
