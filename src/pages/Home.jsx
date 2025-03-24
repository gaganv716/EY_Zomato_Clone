import React from "react";
import Navbar from "../components/Navbar";
import FoodCards from "../components/FoodCards";
import SearchBar from "../components/Searchbar"; // Import SearchBar instead of Hero
import "./Home.css";
import Collection from "../components/Collection";
import Localities from "../components/Localities";
import BitescapeApp from "../components/BitescapeApp";
import Explore from "../components/Explore";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchBar /> {/* Use SearchBar here */}
      <FoodCards />
      <Collection />
      <Localities />
      <BitescapeApp />
      <Explore />
      <Footer />
    </div>
  );
};

export default Home;
