import { getWorkshopDetail } from "@/lib/api/endpoints";
import { useQuery } from "@tanstack/react-query";

export const useWorkshopDetails = (id) => {
  return useQuery({
    queryKey: ["workshopDetails", id],
    queryFn: () => getWorkshopDetail(id),
    enabled: !!id
  });
};
