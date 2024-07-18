import React, { createContext, useContext, useState, ReactNode } from "react";

interface EligibilityContextType {
  householdIncome: string;
  householdSize: string;
  taxFilingStatus: string;
  setHouseholdIncome: (income: string) => void;
  setHouseholdSize: (size: string) => void;
  setTaxFilingStatus: (status: string) => void;
}

const defaultState = {
  householdIncome: "",
  householdSize: "1",
  taxFilingStatus: "individual",
  setHouseholdIncome: () => {},
  setHouseholdSize: () => {},
  setTaxFilingStatus: () => {},
};

const EligibilityContext = createContext<EligibilityContextType>(defaultState);

export const EligibilityProvider = ({ children }: { children: ReactNode }) => {
  const [householdIncome, setHouseholdIncome] = useState(
    defaultState.householdIncome,
  );
  const [householdSize, setHouseholdSize] = useState(
    defaultState.householdSize,
  );
  const [taxFilingStatus, setTaxFilingStatus] = useState(
    defaultState.taxFilingStatus,
  );

  const value = {
    householdIncome,
    householdSize,
    taxFilingStatus,
    setHouseholdIncome,
    setHouseholdSize,
    setTaxFilingStatus,
  };

  return (
    <EligibilityContext.Provider value={value}>
      {children}
    </EligibilityContext.Provider>
  );
};

export const useEligibility = () => useContext(EligibilityContext);
