import axios from 'axios';

// FIRST VERSION OF BASE_URL SETUP
// const BASE_URL = 
//     import.meta.env.MODE === "development"
//     ? "http://localhost:5001/api" 
//     : "https://slack-backend-steel-omega.vercel.app/api";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});