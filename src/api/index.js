import axios from 'axios';

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

export default API;
