import React from 'react';
import About from '../pages/About';
import Error from '../pages/Error';
import Posts from '../pages/Posts';
import { Routes, Route } from 'react-router-dom';
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" index element={<About />} />
      <Route path="/posts" index element={<Posts />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
