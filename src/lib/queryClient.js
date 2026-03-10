import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, 
      retry: 1,
      refetchOnWindowFocus: false,
      useErrorBoundary: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

export default queryClient;