"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CityContextType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

const CityContext = createContext<CityContextType | undefined>(undefined);

export const useCityContext = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState<string>("");

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};
