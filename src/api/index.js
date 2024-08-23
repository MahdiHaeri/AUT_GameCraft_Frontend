import axios from 'axios';
import {message} from "antd";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Access the environment variable here
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add the JWT token conditionally
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token && config.requiresAuth) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error));

// Response interceptor for global error handling
API.interceptors.response.use(
    (response) => {
        // Pass through the response if it's successful
        return response;
    },
    (error) => {
        if (error.response && error.response.status >= 400 && error.response.status < 500) {
            message.error(error.response.data.message || 'An error occurred. Please try again.');
        } else {
            message.error('An unexpected error occurred. Please try again later.');
        }
        return Promise.reject(error); // Still reject the error so it can be handled by specific catch blocks if needed
    }
);

export default API;
