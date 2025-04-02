import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Your backend URL

// Signup Function
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data; // This includes user info & token
  } catch (error) {
    console.error("Signup error:", error.response?.data);
    throw error;
  }
};

// Login Function
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data);
    throw error;
  }
};
