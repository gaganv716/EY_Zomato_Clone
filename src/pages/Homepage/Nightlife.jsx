import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Collection from "../../components/Collection";
import Restaurantlist from "../Restaurant/Restaurantlist";
import Explore from "../../components/Explore";
import Footer from "../../components/Footer";
import LogoutPopup from "../LogoutPopup"; // ✅ Import logout popup
import "../../pages/Restaurant/Restaurantlist.css";
import "./Dining.css"; // Reusing styles

const categories = [
  { name: "Dining Out", icon: "🍽️", path: "/dining" },
  { name: "Delivery", icon: "🛵", path: "/homepage" },
  { name: "Nightlife", icon: "🍺", path: "/nightlife" },
];

function Nightlife({ isAuthenticated, onLogout }) {
  const [selectedCategory, setSelectedCategory] = useState("Nightlife");
  const underlineRef = useRef(null);
  const categoryRefs = useRef([]);
  const navigate = useNavigate();

  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // ✅

  const updateUnderline = (index) => {
    const category = categoryRefs.current[index];
    if (underlineRef.current && category) {
      underlineRef.current.style.width = `${category.offsetWidth}px`;
      underlineRef.current.style.transform = `translateX(${category.offsetLeft}px)`;
    }
  };

  useEffect(() => {
    const index = categories.findIndex((c) => c.name === selectedCategory);
    updateUnderline(index);
  }, [selectedCategory]);

  const handleCategoryClick = (category, index) => {
    setSelectedCategory(category.name);
    updateUnderline(index);
    navigate(category.path);
  };

  // ✅ Logout handlers
  const handleLogout = () => {
    setShowLogoutPopup(true);
  };

  const handleConfirmLogout = () => {
    setShowLogoutPopup(false);
    onLogout();
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
  };

  return (
    <div className="dining-page">
      <Navbar
        isAuthenticated={isAuthenticated}
        isHomepage={true}
        onLogout={handleLogout}
      />

      {/* Categories Section */}
      <div className="categories-container">
        <div className="categories-wrapper">
          {categories.map((category, index) => (
            <div
              key={category.name}
              ref={(el) => (categoryRefs.current[index] = el)}
              className={`category-item ${
                selectedCategory === category.name ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category, index)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
          <div className="underline" ref={underlineRef}></div>
        </div>
      </div>

      {/* Collection Section */}
      <section className="collection-section">
        <Collection />
      </section>

      {/* Restaurant List Section */}
      <section className="restaurant-list-section">
        <h2 className="section-title">Restaurants for Nightlife</h2>
        <Restaurantlist />
      </section>

      {/* Explore Section */}
      <section className="explore-section">
        <Explore />
      </section>

      <Footer />

      {showLogoutPopup && (
        <LogoutPopup
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
        />
      )}
    </div>
  );
}

export default Nightlife;
