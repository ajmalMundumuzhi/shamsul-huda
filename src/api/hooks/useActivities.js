import { useQuery } from "@tanstack/react-query";
import { fetchActivity } from "../endPoints/activities";

export const useActivities = () => {
    return useQuery({
        queryKey: ['activities'],
        queryFn: fetchActivity
    })
}