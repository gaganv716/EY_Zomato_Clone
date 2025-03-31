import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Use Routes instead of Switch
import Home from "./pages/Home";
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
      <Routes> {/* ✅ Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />
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
        <Route path="/login" element={<Login />} /> {/* ✅ Correct Route Syntax */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
