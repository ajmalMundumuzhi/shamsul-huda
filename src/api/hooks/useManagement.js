import { useQuery } from "@tanstack/react-query";
import { fetchManagement } from "../endPoints/management";

export const useManagement = () => {
    return useQuery({
        queryKey: ['management'],
        queryFn: fetchManagement
    })
}