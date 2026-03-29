import {  listSponsors } from "@/lib/api/endpoints";
import { useQuery } from "@tanstack/react-query";

export const useSponser = () => {
  return useQuery({
    queryKey: ["sponsers"],
    queryFn: listSponsors,
  });
};
