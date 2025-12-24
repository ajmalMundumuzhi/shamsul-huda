import apiClient from "../axiosInstance";

export const fetchManagement = async () => {
    const response = await apiClient.get('/management')
    console.log("🔥 Management Data:", response.data);
    return response.data.managements;
}