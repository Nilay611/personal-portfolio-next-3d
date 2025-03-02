"use client";
import { createContext, useContext, ReactNode, useMemo, useState } from "react";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
}

export const LoadingContext = createContext<LoadingContextType | null>(null);

export const LoadingProvider = (props: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  const value = useMemo(
    () => ({ isLoading, setIsLoading }),
    [isLoading, setIsLoading]
  );

  return (
    <LoadingContext.Provider value={value}>
      {props.children}
    </LoadingContext.Provider>
  );
};

export const useLoadingState = () => {
  const context = useContext(LoadingContext);

  if (!context)
    throw new Error("useLoadingState must be used within a LoadingProvider");

  return context;
};
