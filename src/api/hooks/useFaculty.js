import { useQuery } from "@tanstack/react-query";
import { fetchFaculties } from "../endPoints/faculty";

export const useFaculties = () => {
    return useQuery({
        queryKey: ['faculties'],
        queryFn: fetchFaculties
    })
}