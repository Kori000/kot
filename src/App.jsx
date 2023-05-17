import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import Routes from './routes';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence mode='wait'>
        <ConfigProvider>
          <StyleProvider hashPriority='high'>
            <Routes></Routes>
          </StyleProvider>
        </ConfigProvider>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
