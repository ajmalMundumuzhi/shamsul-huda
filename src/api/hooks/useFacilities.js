import { useQuery } from "@tanstack/react-query";
import { fetchFacilities } from "../endPoints/facilities";

export const useFacilties = () => {
    return useQuery({
        queryKey: ['facilities'],
        queryFn: fetchFacilities,
    })
}