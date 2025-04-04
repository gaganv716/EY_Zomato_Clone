import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Use Routes for route configuration
import Home from "./pages/Home";
import Homepage from "./pages/Homepage/Homepage.jsx"; // ✅ Correct Homepage import
import Dining from "./pages/Homepage/Dining.jsx"; // ✅ Added Dining import
import BitescapeApp from "./components/BitescapeApp";
import AddRestaurantNav from "./components/AddRestaurant/AddRestaurantNav";
import AddRestBanner from "./components/AddRestaurant/AddRestBanner";
import Partner from "./components/AddRestaurant/Partner";
import Success from "./components/AddRestaurant/Success";
import FrequentQues from "./components/AddRestaurant/FrequentQues";
import Footer from "./components/Footer";
import Login from "./components/Login&Signup/LoginModal"; // ✅ Correct Import
import Signup from "./components/Login&Signup/SignupModal"; // ✅ Fixed path

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* Homepage Route */}
        <Route path="/homepage" element={<Homepage />} />
        
        {/* Dining Page Route */}
        <Route path="/dining" element={<Dining />} /> {/* ✅ Added Dining route */}
        
        {/* Bitescape App Route */}
        <Route path="/get-app" element={<BitescapeApp />} />
        
        {/* Add Restaurant Route */}
        <Route
          path="/add-restaurant"
          element={
            <>
              <AddRestaurantNav />
              <AddRestBanner />
              <Partner />
              <Success />
              <FrequentQues />
              <Footer />
            </>
          }
        />
        
        {/* Login and Signup Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
