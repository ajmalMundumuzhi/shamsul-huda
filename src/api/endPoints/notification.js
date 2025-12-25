import apiClient from "../axiosInstance";

export const fetchNotification = async () => {
    const response = await apiClient.get('/notifications')
    return response.data.notifications;
}