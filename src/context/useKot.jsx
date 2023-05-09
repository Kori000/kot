import React, { useState, useEffect, createContext, useContext } from 'react';
const KotContext = createContext({});

export const KotProvider = ({ children }) => {
  const [number, setNumber] = useState(1);
  // --------------------------------------------------------------------------------------------------
  return (
    <KotContext.Provider
      value={{
        number,
        setNumber
      }}
    >
      {children}
    </KotContext.Provider>
  );
};

export default function useKot() {
  return useContext(KotContext);
}
