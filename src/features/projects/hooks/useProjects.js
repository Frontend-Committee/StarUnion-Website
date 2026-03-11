import { listProjects } from "@/lib/api/endpoints";
import { useQuery } from "@tanstack/react-query";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: listProjects,
  });
};
