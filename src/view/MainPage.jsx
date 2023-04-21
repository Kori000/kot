import React from 'react';
import useKot, { KotProvider } from '../context/useKot';
import Header from '../components/Header';
const MainPage = () => {
  const { hellow } = useKot();
  console.log(hellow);
  return (
    <KotProvider>
      <Header></Header>
    </KotProvider>
  );
};

export default MainPage;
