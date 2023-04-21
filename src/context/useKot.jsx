import React, { useState, useEffect, createContext, useContext } from 'react';
const KotContext = createContext({});

export const KotProvider = ({ children }) => {
  const [hellow, setHellow] = useState('我在context/useKot');
  const [number, setNumber] = useState(1);
  // --------------------------------------------------------------------------------------------------
  return (
    <KotContext.Provider
      value={{
        hellow,
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
