import { listWorkshops } from "@/lib/api/endpoints";
import { useQuery } from "@tanstack/react-query";

export const useWorkshop = () => {
  return useQuery({
    queryKey: ["workshops"],
    queryFn: listWorkshops,
  });
};
