import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import Routes from './routes';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence mode='wait'>
        <Routes></Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
