import { QueryClient, QueryCache, MutationCache } from "@tanstack/react-query";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.error("Query Error:", error.message);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.error("Mutation Error:", error.message);
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      throwOnError: true,
    },
    mutations: {
      retry: 0,
      useErrorBoundary: false,
      throwOnError: false,
    },
  },
});

export default queryClient;
