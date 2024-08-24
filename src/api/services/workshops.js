import API from "../index.js";

export const getWorkshops = async () => {
    const response = await API.get('/v2/workshop/');
    return response.data;
}
