"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FunctionComponent } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>
  );
};

export default Providers;
