import API from "../index.js"

export const login = async (email, password) => {
    const response = await API.post('/v2/token/', { email, password });
    return response.data;
}

export const register = async (username, email, phoneNumber, password) => {
    const response = await API.post('/v2/users/sign_up/', { username, email, phoneNumber, password });
    return response.data;
}
