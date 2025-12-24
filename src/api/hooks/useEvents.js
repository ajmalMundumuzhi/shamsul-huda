import { useQuery } from "@tanstack/react-query";
import { fetchEvents, fetchEventById } from "../endPoints/events";

export const useEvents = () => {
    return useQuery ({
        queryKey: ['events'],
        queryFn: fetchEvents,

    })
}

export const useEventById = () => {
    return useQuery({
        queryKey: ['events', id],
        queryFn: () => fetchEventById(id),
        enabled: !!id,
    })
}