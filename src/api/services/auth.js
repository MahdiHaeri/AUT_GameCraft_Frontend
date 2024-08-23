import API from "../index.js"

export const login = async (email, password) => {
    const response = await API.post('/v2/token/', { email, password });
    return response.data;
}
