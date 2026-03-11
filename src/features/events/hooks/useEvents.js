import { listEvents } from "@/lib/api/endpoints";
import { useQuery } from "@tanstack/react-query";

export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: listEvents,
  });
};
