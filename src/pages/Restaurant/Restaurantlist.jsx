// RestaurantList.jsx
import React from "react";
import "./Restaurantlist.css"; // Add specific styles for the restaurant list if needed

const Restaurantlist = ({ restaurants }) => {
  const defaultRestaurants = [
    {
      name: "Nandhana Palace",
      image: "https://b.zmtcdn.com/data/pictures/2/18278222/41992beea23c1bba5ae042af85ed0a5d.jpg",
      description: "Andhra cuisine with a spicy twist.",
      rating: "4.5",
      deliveryTime: "30 min",
    },
    {
      name: "Pizza Hut",
      image: "https://b.zmtcdn.com/data/pictures/chains/8/51418/8825db90e0b3e0013bffefdd596eaf58.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      description: "Delicious pizzas with global flavors.",
      rating: "4.2",
      deliveryTime: "25 min",
    },
    {
      name: "Beijing Bites",
      image: "https://b.zmtcdn.com/data/pictures/4/20211514/2c51e7f19385a59c3394e2fa6d3c8fff.jpg?fit=around|300:273&crop=300:273;*,*",
      description: "Chinese delicacies for a flavorful journey.",
      rating: "4.3",
      deliveryTime: "35 min",
    },
    {
      name: "Kamadhenu Veg",
      image: "https://b.zmtcdn.com/data/dish_photos/4b4/6cc0001e761092039eaa223963f224b4.png",
      description: "Craving for South Indian? This is it.",
      rating: "4.2",
      deliveryTime: "17 min",
    },
    {
        name: "Sagar Gardenia",
        image: "https://b.zmtcdn.com/data/dish_photos/a4b/60b9c350e44179ab70aa93f710094a4b.jpg",
        description: "Flavour-packed bites, served fresh!",
        rating: "4.2",
        deliveryTime: "16 min",
      },
      {
        name: "Kabab Factory",
        image: "https://b.zmtcdn.com/data/dish_photos/228/511a222291e84bf68852df377aaa8228.jpg",
        description: "Grill. Spice. Perfection.",
        rating: "4.2",
        deliveryTime: "23 min",
      },
      {
        name: "Polar Bear",
        image: "https://b.zmtcdn.com/data/pictures/1/18359111/bfe59ef78d237e69af2c128473176552_o2_featured_v2.jpg",
        description: "Ice creams that hit the sweet spot!",
        rating: "4.2",
        deliveryTime: "23 min",
      },
      {
        name: "KFC",
        image: "https://b.zmtcdn.com/data/pictures/chains/4/50574/27a0c6e70b3754d9cfb14d6eccb44bd0_o2_featured_v2.jpg",
        description: "Crispy, juicy, legendary chicken! ",
        rating: "3.6",
        deliveryTime: "20 min",
      },
      {
        name: "Burger King",
        image: "https://b.zmtcdn.com/data/pictures/4/21328514/cc8f83eb4e1cb9421c88bfb16fb7a82e_o2_featured_v2.jpg",
        description: "Grilled burgers, royalty in every bite!  ",
        rating: "4.0",
        deliveryTime: "38 min",
      },
  ];

  // Use provided restaurants or fallback to defaultRestaurants
  const restaurantData = restaurants || defaultRestaurants;

  return (
    <div className="restaurants-grid">
      {restaurantData.map((restaurant, index) => (
        <div key={index} className="restaurant-card">
          <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
          <div className="restaurant-info">
            <h3 className="restaurant-name">{restaurant.name}</h3>
            <p className="restaurant-description">{restaurant.description}</p>
            <div className="restaurant-meta">
              <span className="restaurant-rating">⭐ {restaurant.rating}</span>
              <span className="restaurant-time">{restaurant.deliveryTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Restaurantlist;
