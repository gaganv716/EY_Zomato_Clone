import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Dining from "./pages/Homepage/Dining.jsx";
import BitescapeApp from "./components/BitescapeApp";
import AddRestaurantNav from "./components/AddRestaurant/AddRestaurantNav";
import AddRestBanner from "./components/AddRestaurant/AddRestBanner";
import Partner from "./components/AddRestaurant/Partner";
import Success from "./components/AddRestaurant/Success";
import FrequentQues from "./components/AddRestaurant/FrequentQues";
import Footer from "./components/Footer";
import Login from "./components/Login&Signup/LoginModal";
import Signup from "./components/Login&Signup/SignupModal";
import Nightlife from "./pages/Homepage/Nightlife.jsx";
import Order from "./pages/Restaurant/Order.jsx";
import GoogleAuthSuccess from "./pages/GoogleAuthSuccess";
import CompleteProfile from "./pages/CompleteProfile";

// ✅ Scroll to top on every route change
import ScrollToTop from "./components/ScrollToTop";

// ✅ Wrap App with inner function so we can use useNavigate
function AppWrapper() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}

function App() {
  const navigate = useNavigate();

  // ✅ Check if user is logged in
  const isAuthenticated = !!localStorage.getItem("token");

  // ✅ Handle logout
  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token");
    navigate("/homepage");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home isAuthenticated={isAuthenticated} onLogout={handleLogout} />}
      />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/nightlife" element={<Nightlife />} />
      <Route path="/order/:id" element={<Order />} />
      <Route path="/get-app" element={<BitescapeApp />} />
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
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/google-auth-success" element={<GoogleAuthSuccess />} />
      <Route path="/complete-profile" element={<CompleteProfile />} />
    </Routes>
  );
}

export default AppWrapper;
