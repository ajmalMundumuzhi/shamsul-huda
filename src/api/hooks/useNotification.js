import { useQuery } from "@tanstack/react-query";
import { fetchNotification } from "../endPoints/notification";

export const useNotification = () => {
    return useQuery({
        queryKey: ['notifications'],
        queryFn: fetchNotification
    })
}