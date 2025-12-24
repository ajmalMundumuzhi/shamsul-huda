import { useQuery } from "@tanstack/react-query";
import { fetchBanner } from "../endPoints/banner";

export const useBanner = () => {
    return useQuery({
        queryKey: ['banner'],
        queryFn: fetchBanner
    })
}