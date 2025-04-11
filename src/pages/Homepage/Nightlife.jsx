import React, { useState, useRef, useEffect } from "react"; // Include useState and useEffect
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar"; // Shared Navbar
import Collection from "../../components/Collection"; // Add Collection section
import Restaurantlist from "../Restaurant/Restaurantlist"; // Shared Restaurant List section
import Explore from "../../components/Explore"; // Add Explore section
import Footer from "../../components/Footer"; // Shared Footer
import "../../pages/Restaurant/Restaurantlist.css";
import "./Dining.css"; // Use the same Dining styles for consistency

const categories = [
  { name: "Dining Out", icon: "🍽️", path: "/dining" },
  { name: "Delivery", icon: "🛵", path: "/homepage" },
  { name: "Nightlife", icon: "🍺", path: "/nightlife" },
];

function Nightlife() {
  const [selectedCategory, setSelectedCategory] = useState("Nightlife"); // Default selected category
  const underlineRef = useRef(null);
  const categoryRefs = useRef([]);
  const navigate = useNavigate();

  const updateUnderline = (index) => {
    const category = categoryRefs.current[index];
    if (underlineRef.current && category) {
      console.log("OffsetLeft:", category.offsetLeft); // Debugging position
      console.log("Width:", category.offsetWidth);    // Debugging width

      // Calculate width and position for the underline
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

  return (
    <div className="dining-page">
      <Navbar isAuthenticated={true} isHomepage={true} /> {/* Pass the same props */}

      {/* Categories Section */}
      <div className="categories-container">
        <div className="categories-wrapper">
          {categories.map((category, index) => (
            <div
              key={category.name}
              ref={(el) => (categoryRefs.current[index] = el)}
              className={`category-item ${selectedCategory === category.name ? "active" : ""}`}
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
    </div>
  );
}

export default Nightlife;
