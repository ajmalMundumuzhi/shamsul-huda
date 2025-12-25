import apiClient from "../axiosInstance";

export const fetchBanner = async () => {
    const response = await apiClient.get('/banner')
    return response.data.banners;
}