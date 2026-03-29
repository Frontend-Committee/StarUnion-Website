import { useQuery } from "@tanstack/react-query";
import { getProjectDetail } from "@/lib/api/endpoints";

export const useProjectDetails = (id) => {
  return useQuery({
    queryKey: ["projectDetails", id],
    queryFn: () => getProjectDetail(id),
    enabled: !!id
  });
};
