import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://edconnect-backend-vcur.onrender.com/api", // backend URL
});

export default axiosInstance;
