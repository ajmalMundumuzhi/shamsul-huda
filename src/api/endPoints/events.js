import apiClient from "../axiosInstance";

export const fetchEvents = async () => {
    const response = await apiClient.get('/events')
    return response.data.events;
}

export const fetchEventById = async (id) => {
    const response = await apiClient.get(`/events/${id}`);
    return response.data;
}