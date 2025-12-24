import apiClient from "../axiosInstance";

export const fetchFaculties = async () => {
    const response = await apiClient.get('/faculties')
    return response.data.faculties
}