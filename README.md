
# 🍔 Zomato-Style Food Delivery Web App

A full-stack food ordering web application built using the **MERN stack**, inspired by Zomato.  
Users can browse restaurants, add items to cart, place orders, simulate payments, and track their order in real-time.

---

## 📸 Screenshots

| Homepage | Restaurant Page | Order Flow |
|---------|------------------|------------|
| ![Homepage](https://link-to-homepage.png) | ![Restaurant](https://link-to-restaurant.png) | ![Order](https://link-to-order-success.png) |

---

## 🧩 Features

- 🔎 Explore restaurants with categories (Dining, Delivery, Nightlife)
- 🛒 Add items to cart and modify quantity
- 🧾 Simulated address & payment input
- ✅ Payment confirmation and mock tracking
- 📦 Track order through animated status
- 📍 Google Map embed for delivery location
- 🍽️ Separate Restaurant data for dining, nightlife, and delivery
- 🔐 Logout popup & session simulation

---

## 🏗️ Project Structure

```
client/
├── components/        # Navbar, Footer, Explore, Collection
├── pages/
│   ├── Homepage/
│   ├── Dining/
│   ├── Nightlife/
│   ├── Restaurant/
│   └── Order, OrderSuccess, TrackOrder
└── data/              # Restaurant data

server/
├── models/            # Order schema
├── routes/            # Order routes
└── index.js           # Express server entry
```

---

## 🛠️ Technologies Used

### Frontend
- **React.js**
- **React Router**
- **CSS / Flexbox**
- **Vite**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

### Others
- **Google Maps iFrame**
- **LocalStorage** for order summary
- **Render** for backend deployment
- **Netlify** for frontend hosting

---

## 🧪 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/zomato-clone.git
cd zomato-clone

# Install frontend dependencies
cd client
npm install
npm run dev

# In a new terminal, install backend dependencies
cd ../server
npm install
npm start
```

Make sure you have a MongoDB connection string set in `.env` as:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/zomato_clone
PORT=5000
```

---

## 📦 Future Improvements

- 🔐 Real authentication (Google / JWT)
- 🧾 Admin dashboard for restaurant owners
- 📱 Mobile responsiveness
- 📍 Real-time delivery tracking with WebSocket
- 📊 Sales analytics for admin

---

## 🙌 Acknowledgments

This project was built as part of my academic mini-project to demonstrate full-stack capabilities.  
Inspired by the design and features of **Zomato**, and enhanced with personal creativity.

---

## 📬 Contact

Feel free to reach out:  
**Gagan V**  
📧 gaganvijaykumar14@gmail.com | [LinkedIn](https://www.linkedin.com/in/gagan-v716/)

---

> ⭐ If you liked this project, don’t forget to star the repo!
