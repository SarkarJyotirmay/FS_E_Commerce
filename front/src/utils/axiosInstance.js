// src/api/axiosInstance.js
import axios from "axios";

console.log(import.meta.env.VITE_API_URL);

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // replace with your actual base URL
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true, // if you're using cookies
});

export default axiosInstance;
