import React, { useState, useEffect, createContext, useContext } from 'react';
const KotContext = createContext({});
import { useNavigate } from 'react-router-dom';
export const KotProvider = ({ children }) => {
  const navigate = useNavigate();

  const [number, setNumber] = useState(1);

  function goToSecond() {
    navigate('/second');
  }
  function goToHome() {
    navigate('');
  }
  return (
    <KotContext.Provider
      value={{
        number,
        setNumber,
        goToSecond,
        goToHome
      }}
    >
      {children}
    </KotContext.Provider>
  );
};

export default function useKot() {
  return useContext(KotContext);
}
