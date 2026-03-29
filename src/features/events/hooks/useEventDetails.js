import { getEventDetail } from "@/lib/api/endpoints";
import { useQuery } from "@tanstack/react-query";

export const useEventDetails = (id) => {
  return useQuery({
    queryKey: ["eventDetails", id],
    queryFn: () => getEventDetail(id),
    enabled: !!id,
  });
};
