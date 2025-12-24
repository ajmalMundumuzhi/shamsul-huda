import apiClient from "../axiosInstance";

export const fetchActivity = async () => {
    const response = await apiClient.get('/activities');
    console.log('Raw backend data: ', response.data);
    return response.data.activities;
}

export const fetchActivityById = async (id) => {
    const response = await apiClient.get(`/activities/${id}`)
    return response.data;
}