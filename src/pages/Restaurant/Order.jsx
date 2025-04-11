import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import LogoutPopup from "../LogoutPopup";
import "./Order.css"; // Add styling for the Order page

const restaurantData = [
  {
    id: "nandhana-palace",
    name: "Nandhana Palace",
    cuisines: "Biryani, Andhra, North Indian, Chinese, Desserts",
    address: "619, 2nd Stage, Vinayaka Layout, 80 Feet Main Road, Nagarbhavi, Bangalore",
    contact: "+919513444822",
    timing: "10:00 AM - 10:00 PM",
    rating: {
      dining: "4.0",
      delivery: "4.1",
    },
    reviews: {
      dining: "1,619 ratings",
      delivery: "31.6K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/2/18278222/41992beea23c1bba5ae042af85ed0a5d.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/chains/3/50713/81d0735ce259a6bf800e16bb54cb9e5e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      "https://b.zmtcdn.com/data/reviews_photos/a91/7ed2aedadb6350dc482158962c9e2a91_1631374391.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    ],
    menu: [
      { dish: "Andhra Chicken Biryani", price: "₹250" },
      { dish: "Guntur Chicken", price: "₹220" },
      { dish: "Nellore Mutton Biryani", price: "₹270" },
      { dish: "Chicken 65", price: "₹200" },
      { dish: "Paneer Butter Masala", price: "₹190" },
      { dish: "Veg Fried Rice", price: "₹150" },
      { dish: "Dragon Chicken", price: "₹230" },
      { dish: "Andhra Chilli Chicken", price: "₹210" },
      { dish: "Butter Naan", price: "₹40" },
      { dish: "Gulab Jamun", price: "₹90" },
      { dish: "Lemon Soda", price: "₹60" },
      { dish: "Curd Rice", price: "₹120" },
    ],
  },
  {
    id: "pizza-hut",
    name: "Pizza Hut",
    cuisines: "Pizza, Fast Food, Desserts",
    address: "4th Floor, XYZ Mall, MG Road, Bangalore",
    contact: "+919513444823",
    timing: "11:00 AM - 11:00 PM",
    rating: {
      dining: "4.2",
      delivery: "4.0",
    },
    reviews: {
      dining: "2,319 ratings",
      delivery: "20.1K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/chains/8/51418/8825db90e0b3e0013bffefdd596eaf58.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/chains/8/51418/4f4440d6f4e39151f92a850c27ac13f7.jpg?fit=around|300:273&crop=300:273;*,*",
      "https://b.zmtcdn.com/data/pictures/chains/8/51418/6d4d04396c5d7f59c760fceeaed5693f.jpg?fit=around|300:273&crop=300:273;*,*",
    ],
    menu: [
      { dish: "Veggie Supreme Pizza", price: "₹300" },
      { dish: "Cheese Garlic Bread", price: "₹149" },
      { dish: "Chicken Tikka Pizza", price: "₹350" },
      { dish: "Margherita Pizza", price: "₹250" },
      { dish: "Tandoori Paneer Pizza", price: "₹320" },
      { dish: "Stuffed Crust Pizza", price: "₹400" },
      { dish: "Spicy Veggie Pocket", price: "₹120" },
      { dish: "Pepsi (500ml)", price: "₹60" },
      { dish: "Choco Volcano Lava Cake", price: "₹120" },
    ],
  },
  {
    id: "beijing-bites",
    name: "Beijing Bites",
    cuisines: "Chinese, Asian, Fast Food",
    address: "123, Main Street, HSR Layout, Bangalore",
    contact: "+918765432109",
    timing: "11:00 AM - 10:30 PM",
    rating: {
      dining: "4.3",
      delivery: "4.2",
    },
    reviews: {
      dining: "2,100 ratings",
      delivery: "18.3K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/4/20211514/2c51e7f19385a59c3394e2fa6d3c8fff.jpg?fit=around|300:273&crop=300:273;*,*",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/4/20211514/fdd9eddabb5e65fb8e6bc3f1f67f288f.jpg?fit=around|300:273&crop=300:273;*,*",
      "https://b.zmtcdn.com/data/pictures/4/20211514/2c51e7f19385a59c3394e2fa6d3c8fff.jpg?fit=around|300:273&crop=300:273;*,*",
    ],
    menu: [
      { dish: "Veg Hakka Noodles", price: "₹180" },
      { dish: "Chilli Paneer", price: "₹210" },
      { dish: "Chicken Manchurian", price: "₹240" },
      { dish: "Spring Rolls", price: "₹150" },
      { dish: "Schezwan Fried Rice", price: "₹200" },
      { dish: "Hot and Sour Soup", price: "₹120" },
      { dish: "Paneer Manchurian", price: "₹220" },
      { dish: "Garlic Chicken", price: "₹260" },
      { dish: "Kung Pao Chicken", price: "₹270" },
      { dish: "Veg Momos", price: "₹140" },
      { dish: "Chicken Momos", price: "₹160" },
      { dish: "Sweet Corn Soup", price: "₹110" },
    ],
  },
  
  {
    id: "kamadhenu-veg",
    name: "Kamadhenu Veg",
    cuisines: "South Indian, Vegetarian",
    address: "456, Gandhi Bazaar, Basavanagudi, Bangalore",
    contact: "+919876543210",
    timing: "7:00 AM - 10:00 PM",
    rating: {
      dining: "4.2",
      delivery: "4.0",
    },
    reviews: {
      dining: "1,230 ratings",
      delivery: "15.8K ratings",
    },
    image: "https://b.zmtcdn.com/data/dish_photos/4b4/6cc0001e761092039eaa223963f224b4.png",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/0/20680260/4763bc290473f70c2b4c600ccae60bf8.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      "https://b.zmtcdn.com/data/pictures/0/20680260/db7a9ec66fcfbeef34212c219e993b12_o2_featured_v2.jpg?output-format=webp",
    ],
    menu: [
      { dish: "Masala Dosa", price: "₹80" },
      { dish: "Filter Coffee", price: "₹25" },
      { dish: "Idli Vada Combo", price: "₹50" },
      { dish: "Plain Dosa", price: "₹70" },
      { dish: "Upma", price: "₹60" },
      { dish: "Rava Dosa", price: "₹90" },
      { dish: "Set Dosa", price: "₹80" },
      { dish: "Chow Chow Bath", price: "₹85" },
      { dish: "Kesari Bath", price: "₹40" },
      { dish: "Vegetable Biryani", price: "₹120" },
      { dish: "Curd Rice", price: "₹80" },
      { dish: "Lemon Rice", price: "₹75" },
      { dish: "Pongal", price: "₹70" },
      { dish: "Poori Sagu", price: "₹90" },
      { dish: "Mysore Pak", price: "₹50" },
    ],
  },
  
  {
    id: "sagar-gardenia",
    name: "Sagar Gardenia",
    cuisines: "South Indian, North Indian, Chinese",
    address: "789, JP Nagar, 6th Phase, Bangalore",
    contact: "+919812345678",
    timing: "8:00 AM - 11:00 PM",
    rating: {
      dining: "4.2",
      delivery: "4.1",
    },
    reviews: {
      dining: "1,890 ratings",
      delivery: "25.4K ratings",
    },
    image: "https://b.zmtcdn.com/data/dish_photos/a4b/60b9c350e44179ab70aa93f710094a4b.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/7/20654867/10a2d8fa9218788b0f039731608130c3.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      "https://b.zmtcdn.com/data/dish_photos/a4b/60b9c350e44179ab70aa93f710094a4b.jpg",
    ],
    menu: [
      { dish: "Mini Thali", price: "₹120" },
      { dish: "Paneer Butter Masala", price: "₹200" },
      { dish: "Veg Fried Rice", price: "₹150" },
      { dish: "Chilli Chicken", price: "₹250" },
      { dish: "Roti/Naan Combo", price: "₹100" },
      { dish: "Mix Veg Curry", price: "₹180" },
      { dish: "South Indian Filter Coffee", price: "₹40" },
      { dish: "Gulab Jamun", price: "₹80" },
      { dish: "Masala Dosa", price: "₹90" },
      { dish: "Lemon Rice", price: "₹110" },
      { dish: "Curd Rice", price: "₹100" },
      { dish: "Vegetable Manchurian", price: "₹200" },
    ],
  },
  
  {
    id: "kabab-factory",
    name: "Kabab Factory",
    cuisines: "North Indian, Mughlai, BBQ",
    address: "321, Indiranagar, 100 Feet Road, Bangalore",
    contact: "+919876543211",
    timing: "12:00 PM - 12:00 AM",
    rating: {
      dining: "4.2",
      delivery: "4.3",
    },
    reviews: {
      dining: "1,450 ratings",
      delivery: "18.9K ratings",
    },
    image: "https://b.zmtcdn.com/data/dish_photos/228/511a222291e84bf68852df377aaa8228.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/chains/9/18639729/557e4dbc95a47e82d9ba8612cdffc42f_o2_featured_v2.jpg?output-format=webp",
      "https://b.zmtcdn.com/data/pictures/9/18639729/fd75dbbd93e7a3e1e9c73e0701000f69.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    ],
    menu: [
      { dish: "Chicken Seekh Kebab", price: "₹230" },
      { dish: "Tandoori Mushroom", price: "₹200" },
      { dish: "Mutton Galouti Kebab", price: "₹260" },
      { dish: "Paneer Tikka", price: "₹220" },
      { dish: "Chicken Tandoori Platter", price: "₹400" },
      { dish: "Malai Chicken Tikka", price: "₹240" },
      { dish: "Grilled Fish Tikka", price: "₹320" },
      { dish: "Chicken Pahadi Kebab", price: "₹250" },
      { dish: "Tandoori Roti", price: "₹20" },
      { dish: "Butter Naan", price: "₹40" },
      { dish: "Dal Makhani", price: "₹180" },
      { dish: "Gulab Jamun", price: "₹90" },
      { dish: "Lassi (Sweet/Salty)", price: "₹80" },
    ],
  },
  
  {
    id: "polar-bear",
    name: "Polar Bear",
    cuisines: "Desserts, Ice Cream, Beverages",
    address: "987, Brigade Road, MG Road Area, Bangalore",
    contact: "+919898765432",
    timing: "10:00 AM - 11:00 PM",
    rating: {
      dining: "4.2",
      delivery: "4.1",
    },
    reviews: {
      dining: "1,890 ratings",
      delivery: "15.2K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/1/18359111/bfe59ef78d237e69af2c128473176552_o2_featured_v2.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/chains/2/50812/8df8a263138e17c03ae748b65782109b.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      "https://b.zmtcdn.com/data/pictures/chains/2/50812/ccb31f359042a97246e8920535ed7045.jpg?fit=around|300:273&crop=300:273;*,*",
    ],
    menu: [
      { dish: "Hot Chocolate Fudge", price: "₹180" },
      { dish: "Belgian Waffle Sundae", price: "₹220" },
      { dish: "Choco Chip Ice Cream", price: "₹150" },
      { dish: "Fruit Salad Ice Cream", price: "₹200" },
      { dish: "Mint Chocolate Ice Cream", price: "₹170" },
      { dish: "Strawberry Cheesecake Ice Cream", price: "₹220" },
      { dish: "Vanilla Milkshake", price: "₹120" },
      { dish: "Cookie Dough Ice Cream", price: "₹180" },
      { dish: "Caramel Delight", price: "₹210" },
      { dish: "Chocolate Lava Cake", price: "₹250" },
      { dish: "Rainbow Sundae", price: "₹200" },
      { dish: "Pineapple Delight Ice Cream", price: "₹190" },
    ],
  },
  
  {
    id: "kfc",
    name: "KFC",
    cuisines: "Fast Food, Chicken, Beverages",
    address: "123, Koramangala 7th Block, Bangalore",
    contact: "+918765432110",
    timing: "11:00 AM - 11:00 PM",
    rating: {
      dining: "3.6",
      delivery: "4.0",
    },
    reviews: {
      dining: "1,820 ratings",
      delivery: "22.3K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/chains/4/50574/27a0c6e70b3754d9cfb14d6eccb44bd0_o2_featured_v2.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/chains/4/50574/ab7dc239625ef34124d8a38b57a22e3a.jpg?fit=around|300:273&crop=300:273;*,*",
      "https://b.zmtcdn.com/data/pictures/chains/4/50574/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around|300:273&crop=300:273;*,*",
    ],
    menu: [
      { dish: "Zinger Burger", price: "₹170" },
      { dish: "Bucket Chicken", price: "₹499" },
      { dish: "Chicken Popcorn", price: "₹160" },
      { dish: "Twister Wrap", price: "₹140" },
      { dish: "Chicken Strips Meal", price: "₹250" },
      { dish: "Krushers (Chocolate)", price: "₹110" },
      { dish: "Chicken Wings (6 pcs)", price: "₹280" },
      { dish: "Rice Bowl Chicken Combo", price: "₹200" },
      { dish: "Tandoori Chicken Burger", price: "₹180" },
      { dish: "Pepsi (500ml)", price: "₹60" },
      { dish: "Brownie Sundae", price: "₹150" },
      { dish: "Chicken and Fries Combo", price: "₹300" },
      { dish: "Spicy Chicken Wrap", price: "₹200" },
      { dish: "Hot Wings Bucket (12 pcs)", price: "₹460" },
    ],
  },
  
  {
    id: "burger-king",
    name: "Burger King",
    cuisines: "Fast Food, Burgers, Beverages",
    address: "567, Forum Mall, Koramangala, Bangalore",
    contact: "+918765432120",
    timing: "10:00 AM - 11:00 PM",
    rating: {
      dining: "4.0",
      delivery: "3.9",
    },
    reviews: {
      dining: "1,450 ratings",
      delivery: "19.5K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/4/21328514/cc8f83eb4e1cb9421c88bfb16fb7a82e_o2_featured_v2.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/chains/5/61555/298cd1d512282f56a9aef6aa4601ad75.jpg?fit=around|300:273&crop=300:273;*,*",
      "https://b.zmtcdn.com/data/pictures/chains/5/61555/a42a0dea99f292698e08249aec6ee094.jpg?fit=around|300:273&crop=300:273;*,*",
    ],
    menu: [
      { dish: "Whopper", price: "₹210" },
      { dish: "Cheesy Fries", price: "₹120" },
      { dish: "Chicken Fries", price: "₹160" },
      { dish: "Double Cheese Burger", price: "₹250" },
      { dish: "Veggie Burger", price: "₹150" },
      { dish: "Chocolate Sundae", price: "₹120" },
      { dish: "Pepsi (500ml)", price: "₹60" },
      { dish: "Spicy Paneer Burger", price: "₹220" },
      { dish: "Crispy Chicken Wrap", price: "₹180" },
      { dish: "Vanilla Milkshake", price: "₹130" },
      { dish: "Mozzarella Sticks", price: "₹140" },
    ],
  },
  
  {
    id: "thalassery-restaurant",
    name: "Thalassery Restaurant",
    cuisines: "Kerala, South Indian, Seafood",
    address: "245, Commercial Street, Shivajinagar, Bangalore",
    contact: "+919876543212",
    timing: "11:00 AM - 11:00 PM",
    rating: {
      dining: "4.1",
      delivery: "4.0",
    },
    reviews: {
      dining: "2,350 ratings",
      delivery: "20.7K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/8/20036118/c1d7cd35fcb4d93259c285b063bd5e9b_o2_featured_v2.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/chains/8/53088/6924910e97c8b8dd1d3079ff068d96d2.jpg?fit=around|300:273&crop=300:273;*,*",
      "https://b.zmtcdn.com/data/pictures/chains/8/53088/79bb8c2ae0e2e13dff1cd533d26b041c.jpg?fit=around|300:273&crop=300:273;*,*",
    ],
    menu: [
      { dish: "Malabar Biryani", price: "₹240" },
      { dish: "Kerala Parotta", price: "₹40" },
      { dish: "Prawn Curry", price: "₹280" },
      { dish: "Fish Molee", price: "₹300" },
      { dish: "Vegetable Stew", price: "₹150" },
      { dish: "Appam", price: "₹30" },
      { dish: "Chicken Roast", price: "₹250" },
      { dish: "Beef Ularthiyathu", price: "₹320" },
      { dish: "Banana Fritters", price: "₹90" },
      { dish: "Palada Payasam", price: "₹120" },
      { dish: "Thalassery Falooda", price: "₹150" },
      { dish: "Spicy Kerala Chicken Curry", price: "₹270" },
    ],
  },
  
  {
    id: "andhra-gunpowder",
    name: "Andhra Gunpowder",
    cuisines: "South Indian, Andhra, Spicy Delicacies",
    address: "812, BTM Layout, 2nd Stage, Bangalore",
    contact: "+919876543213",
    timing: "11:00 AM - 10:30 PM",
    rating: {
      dining: "4.2",
      delivery: "4.1",
    },
    reviews: {
      dining: "2,100 ratings",
      delivery: "21.5K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/chains/9/19051939/631e94b5e92a24f8dc745a253a4caeeb_o2_featured_v2.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/reviews_photos/91a/ca3f9fa152aadfd89f8fe630eac9491a_1633190878.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      "https://b.zmtcdn.com/data/reviews_photos/b15/5d01dce40748762fbe87316a1c20bb15_1633190874.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    ],
    menu: [
      { dish: "Natu Kodi Pulusu", price: "₹280" },
      { dish: "Podi Idli", price: "₹120" },
      { dish: "Guntur Chicken Curry", price: "₹250" },
      { dish: "Rayalaseema Mutton Fry", price: "₹320" },
      { dish: "Spicy Andhra Vegetable Biryani", price: "₹200" },
      { dish: "Andhra Special Dal", price: "₹140" },
      { dish: "Chapala Pulusu (Fish Curry)", price: "₹280" },
      { dish: "Kodi Vepudu (Chicken Fry)", price: "₹240" },
      { dish: "Ragi Sangati with Natu Kodi Curry", price: "₹300" },
      { dish: "Avakaya (Mango Pickle)", price: "₹100" },
      { dish: "Gongura Chicken", price: "₹260" },
      { dish: "Pulihora (Tamarind Rice)", price: "₹110" },
      { dish: "Payasam", price: "₹90" },
    ],
  },
  
  {
    id: "bakasura-bandi",
    name: "Bakasura Bandi",
    cuisines: "South Indian, Street Food, Fast Food",
    address: "876, Vijayanagar, Near Metro Station, Bangalore",
    contact: "+919876543214",
    timing: "6:00 PM - 11:00 PM",
    rating: {
      dining: "3.8",
      delivery: "4.0",
    },
    reviews: {
      dining: "890 ratings",
      delivery: "10.2K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/0/19666710/98649ece168b8935db930ae53feb4f7e_o2_featured_v2.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/0/19666710/046342f97fb3620faf08f84551975ed8.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
      "https://b.zmtcdn.com/data/reviews_photos/b20/9cc41a7c7985bddb6035dc6a4a126b20_1679147181.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    ],
    menu: [
      { dish: "Cheese Dosa", price: "₹130" },
      { dish: "Paneer Rolls", price: "₹150" },
      { dish: "Chilli Cheese Sandwich", price: "₹110" },
      { dish: "Veg Manchurian Roll", price: "₹140" },
      { dish: "Masala Maggie Noodles", price: "₹90" },
      { dish: "Egg Puff", price: "₹50" },
      { dish: "Loaded French Fries", price: "₹120" },
      { dish: "Paneer Frankie", price: "₹130" },
      { dish: "Chocolate Milkshake", price: "₹100" },
      { dish: "Choco Lava Cake", price: "₹120" },
      { dish: "Veg Momos", price: "₹110" },
      { dish: "Chicken Momos", price: "₹140" },
    ],
  },
  
  {
    id: "nammane-upachar",
    name: "Nammane Upachar",
    cuisines: "South Indian, Vegetarian",
    address: "345, RMV Extension, Sadashivanagar, Bangalore",
    contact: "+919876543215",
    timing: "7:00 AM - 10:00 PM",
    rating: {
      dining: "4.1",
      delivery: "4.0",
    },
    reviews: {
      dining: "1,200 ratings",
      delivery: "14.8K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/0/18353120/b4b0d00087d1958c10adf5f85d44d56a_o2_featured_v2.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/chains/0/18353120/9a3d7401063c27340667fc1fd5a62700.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      "https://b.zmtcdn.com/data/pictures/0/18353120/b4f24969f1f6ea2a001fc60ef8a06182.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    ],
    menu: [
      { dish: "Rava Idli", price: "₹60" },
      { dish: "Full Meals", price: "₹130" },
      { dish: "Plain Dosa", price: "₹50" },
      { dish: "Masala Dosa", price: "₹70" },
      { dish: "Kesari Bath", price: "₹40" },
      { dish: "Pongal", price: "₹60" },
      { dish: "Vada Sambar", price: "₹45" },
      { dish: "Vegetable Pulao", price: "₹120" },
      { dish: "Curd Rice", price: "₹80" },
      { dish: "Poori Saagu", price: "₹75" },
      { dish: "Filter Coffee", price: "₹25" },
      { dish: "Sweet Lassi", price: "₹50" },
      { dish: "Mysore Pak", price: "₹60" },
    ],
  },
  
  {
    id: "krishna-vaibhav",
    name: "Krishna Vaibhav",
    cuisines: "South Indian, Traditional Cuisine, Vegetarian",
    address: "567, Jayanagar 4th Block, Bangalore",
    contact: "+919876543216",
    timing: "8:00 AM - 10:30 PM",
    rating: {
      dining: "4.3",
      delivery: "4.2",
    },
    reviews: {
      dining: "1,890 ratings",
      delivery: "16.7K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/5/19422875/14bb38a6e3fc9e743d4996aa0ef02993_o2_featured_v2.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/reviews_photos/289/8da7ca25aca48afeeffc50afa3f6a289_1594880173.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      "https://b.zmtcdn.com/data/pictures/5/19422875/7a8ed2289f07870fd4023b6993daae66.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    ],
    menu: [
      { dish: "Bisi Bele Bath", price: "₹100" },
      { dish: "Curd Rice", price: "₹70" },
      { dish: "Masala Dosa", price: "₹90" },
      { dish: "Rava Idli", price: "₹50" },
      { dish: "Vegetable Pulao", price: "₹120" },
      { dish: "Poori Saagu", price: "₹80" },
      { dish: "Kesari Bath", price: "₹40" },
      { dish: "Pongal", price: "₹60" },
      { dish: "Vada Sambar", price: "₹70" },
      { dish: "Filter Coffee", price: "₹25" },
      { dish: "Sweet Lassi", price: "₹50" },
      { dish: "Mysore Pak", price: "₹60" },
    ],
  },
  
  {
    id: "ayodhya-grand",
    name: "Ayodhya Grand",
    cuisines: "South Indian, Traditional Cuisine, Vegetarian",
    address: "678, Rajajinagar 1st Block, Bangalore",
    contact: "+919876543217",
    timing: "7:30 AM - 10:00 PM",
    rating: {
      dining: "4.2",
      delivery: "4.1",
    },
    reviews: {
      dining: "1,950 ratings",
      delivery: "17.3K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/6/18539726/a6d1ebbde50099e6d535eea9e95e9c06_o2_featured_v2.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/reviews_photos/e2e/ba54a46811c7009d342ea015e4084e2e_1551349990.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      "https://b.zmtcdn.com/data/pictures/6/18539726/810265189902e37e4ffce90db72f8f27.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    ],
    menu: [
      { dish: "Mysore Masala Dosa", price: "₹90" },
      { dish: "Pineapple Kesari Bath", price: "₹70" },
      { dish: "Rava Dosa", price: "₹80" },
      { dish: "Set Dosa", price: "₹75" },
      { dish: "Plain Idli", price: "₹50" },
      { dish: "Mini Tiffin Combo", price: "₹120" },
      { dish: "Vegetable Upma", price: "₹60" },
      { dish: "Curd Rice", price: "₹70" },
      { dish: "Poori Saagu", price: "₹80" },
      { dish: "Filter Coffee", price: "₹30" },
      { dish: "Sweet Pongal", price: "₹65" },
      { dish: "Kharabath", price: "₹60" },
    ],
  },
  
  {
    id: "empire-restaurant",
    name: "Empire Restaurant",
    cuisines: "North Indian, Arabian, Mughlai",
    address: "901, Church Street, Bangalore",
    contact: "+919876543218",
    timing: "12:00 PM - 1:00 AM",
    rating: {
      dining: "4.2",
      delivery: "4.1",
    },
    reviews: {
      dining: "2,150 ratings",
      delivery: "21.2K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/5/20754725/16b9c06f0fb61665e59ba473dca8d080_o2_featured_v2.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/chains/1/50471/bcf68da39dcfb0fe5bcfb742c337385e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
      "https://b.zmtcdn.com/data/pictures/chains/1/50471/3238da54d036bc4a24c69309db215458.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    ],
    menu: [
      { dish: "Empire Chicken Kabab", price: "₹210" },
      { dish: "Butter Naan", price: "₹40" },
      { dish: "Chicken Shawarma Roll", price: "₹120" },
      { dish: "Mutton Biryani", price: "₹320" },
      { dish: "Tandoori Chicken Half", price: "₹280" },
      { dish: "Chicken 65", price: "₹240" },
      { dish: "Veg Pulao", price: "₹150" },
      { dish: "Grilled Fish", price: "₹350" },
      { dish: "Falooda", price: "₹140" },
      { dish: "Hummus with Pita", price: "₹180" },
      { dish: "Chicken Fried Rice", price: "₹200" },
      { dish: "Paneer Butter Masala", price: "₹240" },
      { dish: "Gulab Jamun", price: "₹80" },
    ],
  },
  
  {
    id: "onesta",
    name: "Onesta",
    cuisines: "Italian, Pizza, Desserts",
    address: "234, HSR Layout, Sector 1, Bangalore",
    contact: "+919876543219",
    timing: "12:00 PM - 11:00 PM",
    rating: {
      dining: "3.7",
      delivery: "3.8",
    },
    reviews: {
      dining: "1,200 ratings",
      delivery: "10.5K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/9/18617849/41c0967f81752b7407d8f345b2a450e2_o2_featured_v2.jpg",
    gallery: [
      "https://b.zmtcdn.com/data/pictures/chains/3/19715673/b43022c0d11057d084a8c080a2c1eae1.jpg?fit=around|300:273&crop=300:273;*,*",
      "https://b.zmtcdn.com/data/pictures/6/20148196/a3df30844f4e3f13971fc43230905fb0.jpg?fit=around|300:273&crop=300:273;*,*",
    ],
    menu: [
      { dish: "Unlimited Veg Pizza Combo", price: "₹299" },
      { dish: "Choco Lava Cake", price: "₹80" },
      { dish: "Unlimited Non-Veg Pizza Combo", price: "₹399" },
      { dish: "Garlic Breadsticks", price: "₹120" },
      { dish: "Margherita Pizza", price: "₹250" },
      { dish: "Pasta in White Sauce", price: "₹220" },
      { dish: "Farmhouse Pizza", price: "₹280" },
      { dish: "Tiramisu", price: "₹150" },
      { dish: "Brownie with Ice Cream", price: "₹130" },
      { dish: "Cold Coffee", price: "₹100" },
      { dish: "Vegetable Lasagna", price: "₹200" },
      { dish: "Mango Smoothie", price: "₹130" },
    ],
  },
  
  {
    id: "chinese-wok",
    name: "Chinese Wok",
    cuisines: "Chinese, Asian, Fast Food",
    address: "123, Whitefield Main Road, Bangalore",
    contact: "+919876543220",
    timing: "11:00 AM - 11:00 PM",
    rating: {
      dining: "4.1",
      delivery: "4.0",
    },
    reviews: {
      dining: "1,500 ratings",
      delivery: "12.8K ratings",
    },
    image: "https://b.zmtcdn.com/data/pictures/6/21644336/80ed47ee212a0b51b60fac05021f3a42_o2_featured_v2.jpg",
    menu: [
      { dish: "Manchurian Rice Bowl", price: "₹190" },
      { dish: "Spring Rolls", price: "₹120" },
      { dish: "Schezwan Noodles", price: "₹200" },
      { dish: "Veg Fried Rice", price: "₹150" },
      { dish: "Hot and Sour Soup", price: "₹120" },
      { dish: "Kung Pao Chicken", price: "₹240" },
      { dish: "Chilli Paneer", price: "₹210" },
      { dish: "Chicken Lollipop", price: "₹220" },
      { dish: "Dragon Chicken", price: "₹250" },
      { dish: "Dim Sums (6 pcs)", price: "₹180" },
      { dish: "Crispy Honey Chilli Potato", price: "₹160" },
      { dish: "Chow Mein", price: "₹200" },
    ],
  },
  
  ];  

  const Order = ({ id, isAuthenticated, onLogout }) => {
    const restaurant = restaurantData.find((rest) => rest.id === id);
    const [showPopup, setShowPopup] = useState(false);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false); // ✅
  
    const handleLogout = () => setShowLogoutPopup(true);
    const handleConfirmLogout = () => {
      setShowLogoutPopup(false);
      onLogout();
    };
    const handleCancelLogout = () => setShowLogoutPopup(false);
  
    if (!restaurant) {
      return (
        <div className="order-page">
          <Navbar isAuthenticated={isAuthenticated} isHomepage={true} onLogout={handleLogout} />
          <h1>Restaurant Not Found</h1>
          <p>The restaurant you're looking for does not exist or the ID is incorrect.</p>
        </div>
      );
    }
  
    return (
      <div className="order-page">
        <Navbar isAuthenticated={isAuthenticated} isHomepage={true} onLogout={handleLogout} />
  
        <header className="order-header">
          <h1 className="restaurant-name">{restaurant.name}</h1>
  
          <div className="restaurant-tags">
            {restaurant.cuisines.split(",").map((cuisine, index) => (
              <span key={index} className="tag">{cuisine.trim()}</span>
            ))}
          </div>
  
          <p className="restaurant-address">{restaurant.address}</p>
          <p className="restaurant-contact">📞 {restaurant.contact}</p>
          <p className="restaurant-timing">📅 Timings: {restaurant.timing}</p>
  
          <div className="restaurant-rating">
            ⭐ {restaurant.rating.dining} Dining ({restaurant.reviews.dining}) | ⭐{" "}
            {restaurant.rating.delivery} Delivery ({restaurant.reviews.delivery})
          </div>
        </header>
  
        <div className="order-main">
          <div className="gallery-section">
            <div className="main-image">
              <img src={restaurant.image} alt={restaurant.name} />
            </div>
  
            <div className="side-gallery">
              {restaurant.gallery?.slice(0, 2).map((img, index) => (
                <img key={index} src={img} alt={`Gallery ${index + 1}`} />
              ))}
              <button className="view-gallery-btn">View Gallery</button>
            </div>
          </div>
  
          <div className="popular-dishes">
            <h3>Popular Dishes</h3>
            <div className="dishes-scroll">
              {restaurant.menu.slice(0, 6).map((item, index) => (
                <div key={index} className="dish-card">{item.dish}</div>
              ))}
            </div>
          </div>
  
          <h2 style={{ textAlign: "center" }}>Menu</h2>
          <ul className="menu-list">
            {restaurant.menu.map((item, index) => (
              <li key={index}>
                {item.dish} - <span className="menu-price">{item.price}</span>
              </li>
            ))}
          </ul>
  
          <button className="order-now-button" onClick={() => setShowPopup(true)}>
            Order Now
          </button>
  
          <div className="map-container">
            <h3>Location Map</h3>
            <iframe
              title="Google Map"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps?q=${encodeURIComponent(restaurant.address)}&output=embed`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
  
        <Footer />
  
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>Online Ordering is only supported in our mobile app.</p>
              <button
                className="download-button"
                onClick={() => alert("Redirecting to app download...")}
              >
                Download Now
              </button>
              <button className="close-popup" onClick={() => setShowPopup(false)}>
                Close
              </button>
            </div>
          </div>
        )}
  
        {showLogoutPopup && (
          <LogoutPopup onConfirm={handleConfirmLogout} onCancel={handleCancelLogout} />
        )}
      </div>
    );
  };
  
  export default Order;
  