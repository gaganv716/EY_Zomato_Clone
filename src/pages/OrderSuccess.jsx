// src/pages/OrderSuccess.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import restaurantData from "../data/restaurantData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./OrderSuccess.css"; // Make sure to create this CSS file

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { restaurantId } = location.state || {};

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    if (restaurantId) {
      const found = restaurantData.find((r) => r.id === restaurantId);
      setRestaurant(found);
    }
  }, [restaurantId]);

  return (
    <div className="order-success-page">
      <Navbar isAuthenticated={true} isHomepage={false} />

      <div className="success-content">
        <div className="tick-container">
          <div className="tick-mark">✓</div>
        </div>
        <h1>Order Placed Successfully!</h1>
        <p>Your food is on the way 🍱</p>
        <button
          className="track-order-btn"
          onClick={() => alert("Tracking feature coming soon 🚚")}
        >
          Track Your Order
        </button>

        {restaurant && (
          <div className="restaurant-info">
            <h3>Ordered From:</h3>
            <div className="restaurant-card">
              <img src={restaurant.image} alt={restaurant.name} />
              <div>
                <h4>{restaurant.name}</h4>
                <p>{restaurant.address}</p>
                <p>{restaurant.contact}</p>
              </div>
            </div>
          </div>
        )}

        <div className="suggestions">
          <h3>Explore More Restaurants</h3>
          <div className="scroll-cards">
            {restaurantData.map((r, index) => (
              <div key={index} className="suggestion-card">
                <img src={r.image} alt={r.name} />
                <h4>{r.name}</h4>
                <p>{r.cuisines}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderSuccess;
