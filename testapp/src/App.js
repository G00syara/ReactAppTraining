import React, { useState, useRef, useMemo, useEffect } from 'react';
import './css/app.scss';
import { BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
