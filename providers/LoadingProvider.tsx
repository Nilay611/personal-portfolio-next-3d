"use client";
import { createContext, useContext, ReactNode, useMemo, useState } from "react";

interface LoadingContextType {
  isLoading: boolean;
  enter: boolean;
  setIsLoading: (state: boolean) => void;
  setEnter: (state: boolean) => void;
}

export const LoadingContext = createContext<LoadingContextType | null>(null);

export const LoadingProvider = (props: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [enter, setEnter] = useState(false);

  const value = useMemo(
    () => ({ isLoading, enter, setIsLoading, setEnter }),
    [isLoading, enter, setIsLoading, setEnter]
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
