import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LogoutPopup from "../LogoutPopup";
import restaurantData from "../../data/restaurantData";
import "./Order.css";

const Order = ({ isAuthenticated, onLogout }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = restaurantData.find((rest) => rest.id === id);

  const [cart, setCart] = useState([]);
  const [popupStep, setPopupStep] = useState(0); // 0: none, 1: address, 2: payment mode, 3: payment details, 4: success
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedUPI, setSelectedUPI] = useState("");
  const [address, setAddress] = useState({
    name: "", phone: "", email: "",
    line1: "", line2: "", city: "", state: "", pincode: "", notes: ""
  });

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const popupRef = useRef();

  const handleLogout = () => setShowLogoutPopup(true);
  const handleConfirmLogout = () => {
    setShowLogoutPopup(false);
    onLogout();
  };
  const handleCancelLogout = () => setShowLogoutPopup(false);

  const addToCart = (item) => {
    const exists = cart.find((c) => c.dish === item.dish);
    if (exists) {
      setCart(cart.map((c) => c.dish === item.dish ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (item, change) => {
    const existing = cart.find((c) => c.dish === item.dish);
    if (!existing) return;
    const updatedQty = existing.quantity + change;
    if (updatedQty <= 0) {
      setCart(cart.filter((c) => c.dish !== item.dish));
    } else {
      setCart(cart.map((c) => c.dish === item.dish ? { ...c, quantity: updatedQty } : c));
    }
  };

  const getTotal = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrderNow = () => {
    if (cart.length === 0) return alert("Please add at least one item to cart!");
    setPopupStep(1);
  };

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const proceedToPaymentModes = () => {
    if (!address.name || !address.phone || !address.line1 || !address.city || !address.pincode) {
      return alert("Please fill in all required fields.");
    }
    setPopupStep(2);
  };

  const proceedToPaymentDetails = (method) => {
    setPaymentMethod(method);
    setPopupStep(3);
  };

  const simulatePayment = () => {
    setPopupStep(4);
    setCart([]);
    setTimeout(() => {
      navigate("/order-success"); // Optional: create a thank you page route
    }, 5000);
  };

  const closePopup = () => {
    setPopupStep(0);
    setPaymentMethod("");
    setSelectedBank("");
    setSelectedUPI("");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        closePopup();
      }
    };
    if (popupStep !== 0) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popupStep]);

  if (!restaurant) {
    return <div className="order-page"><Navbar /><h1>Restaurant Not Found</h1></div>;
  }

  return (
    <div className="order-page">
      <Navbar isAuthenticated={isAuthenticated} isHomepage={true} onLogout={handleLogout} />

      <header className="order-header">
        <h1 className="restaurant-name">{restaurant.name}</h1>
        <div className="restaurant-tags">
          {restaurant.cuisines.split(",").map((cuisine, i) => <span key={i} className="tag">{cuisine.trim()}</span>)}
        </div>
        <p>{restaurant.address}</p>
        <p>📞 {restaurant.contact}</p>
        <p>🕒 {restaurant.timing}</p>
        <p>⭐ {restaurant.rating.dining} Dining | ⭐ {restaurant.rating.delivery} Delivery</p>
      </header>

      <div className="order-main">
        <h2>Menu</h2>
        <ul className="menu-list">
          {restaurant.menu.map((item, index) => {
            const quantity = cart.find(c => c.dish === item.dish)?.quantity || 0;
            return (
              <li key={index} className="menu-item">
                <span>{item.dish} - ₹{item.price}</span>
                {quantity === 0 ? (
                  <button className="add-btn" onClick={() => addToCart(item)}>Add to Cart</button>
                ) : (
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item, -1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => updateQuantity(item, 1)}>+</button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {cart.length > 0 && (
          <div className="cart-summary">
            <h3>🛒 Cart Summary</h3>
            {cart.map((item, i) => (
              <p key={i}>{item.dish} × {item.quantity} = ₹{item.price * item.quantity}</p>
            ))}
            <strong>Total: ₹{getTotal()}</strong>
            <button className="order-now-button" onClick={handleOrderNow}>Proceed</button>
          </div>
        )}
      </div>

      {/* Multi-step Popup Flow */}
      {popupStep !== 0 && (
        <div className="popup-overlay">
          <div className="popup-content" ref={popupRef}>
            {popupStep === 1 && (
              <>
                <h3>🚚 Delivery Details</h3>
                <input name="name" placeholder="Full Name" onChange={handleAddressChange} />
                <input name="phone" placeholder="Phone Number" onChange={handleAddressChange} />
                <input name="email" placeholder="Email" onChange={handleAddressChange} />
                <input name="line1" placeholder="Address Line 1" onChange={handleAddressChange} />
                <input name="city" placeholder="City" onChange={handleAddressChange} />
                <input name="pincode" placeholder="Pincode" onChange={handleAddressChange} />
                <textarea name="notes" placeholder="Notes" onChange={handleAddressChange}></textarea>
                <button className="pay-button" onClick={proceedToPaymentModes}>Next</button>
              </>
            )}

            {popupStep === 2 && (
              <>
                <h3>💳 Select Payment Method</h3>
                <div className="payment-options">
                  <button onClick={() => proceedToPaymentDetails("card")}>💳 Card</button>
                  <button onClick={() => proceedToPaymentDetails("netbanking")}>🏦 Net Banking</button>
                  <button onClick={() => proceedToPaymentDetails("upi")}>📱 UPI</button>
                </div>
              </>
            )}

            {popupStep === 3 && (
              <>
                <h3>Enter {paymentMethod === "card" ? "Card Details" :
                      paymentMethod === "netbanking" ? "Select Bank" :
                      "UPI Details"}</h3>

                {paymentMethod === "card" && (
                  <>
                    <input placeholder="Card Number" />
                    <input placeholder="Name on Card" />
                    <input placeholder="MM/YY" />
                    <input placeholder="CVV" />
                  </>
                )}
                {paymentMethod === "netbanking" && (
                  <select onChange={(e) => setSelectedBank(e.target.value)}>
                    <option value="">Select Bank</option>
                    <option>SBI</option><option>ICICI</option><option>HDFC</option><option>Axis</option>
                  </select>
                )}
                {paymentMethod === "upi" && (
                  <>
                    <div className="upi-logos">
                      <img src="https://i.pinimg.com/474x/ae/5f/e3/ae5fe3dc423e44c0ddbef5dc64fa356b.jpg" alt="PhonePe" height="30" />
                      <img src="https://animationvisarts.com/wp-content/uploads/2023/11/Frame-43-1.png" alt="GPay" height="30" />
                      <img src="https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg" alt="Paytm" height="30" />
                    </div>
                    <input placeholder="Enter UPI ID" />
                  </>
                )}
                <button className="pay-button" onClick={simulatePayment}>Pay ₹{getTotal()}</button>
              </>
            )}

            {popupStep === 4 && (
              <>
                <h2>✅ Payment Successful!</h2>
                <p>Redirecting to Order Placed page...</p>
              </>
            )}
          </div>
        </div>
      )}

      {showLogoutPopup && (
        <LogoutPopup onConfirm={handleConfirmLogout} onCancel={handleCancelLogout} />
      )}

      <Footer />
    </div>
  );
};

export default Order;
