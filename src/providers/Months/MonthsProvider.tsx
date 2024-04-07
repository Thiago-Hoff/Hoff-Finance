"use client";

import { Months } from "@/utils/dynamicContent";
import React, { createContext, useState } from "react";

interface MonthContextType {
  month: string;
  handleSetMonth: (month: string) => void;
}

export const MonthSeleted = createContext<MonthContextType>({
  month: Months[0].month,
  handleSetMonth: () => {},
});

function MonthProvider({ children }: { children: React.ReactNode }) {
  const [month, setMonth] = useState<string>(Months[0].month);

  const handleSetMonth = (selectedMonth: string) => {
    setMonth(selectedMonth);
  };

  return (
    <MonthSeleted.Provider value={{ month, handleSetMonth }}>
      {children}
    </MonthSeleted.Provider>
  );
}

export default MonthProvider;
