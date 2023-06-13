import React from 'react';
import Routes from './routes';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { KotProvider } from './context/useKot';
const App = () => {
  return (
    <BrowserRouter>
      <KotProvider>
        <AnimatePresence mode='wait'>
          <ConfigProvider>
            <StyleProvider hashPriority='high'>
              <Routes></Routes>
            </StyleProvider>
          </ConfigProvider>
        </AnimatePresence>
      </KotProvider>
    </BrowserRouter>
  );
};

export default App;
