import apiClient from "../axiosInstance";

export const fetchFacilities = async () => {
    const response = await apiClient.get('/facilities')
    return response.data.facilities;
}