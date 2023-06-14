import React from 'react';
import About from '../pages/About';
import Error from '../pages/Error';
import Posts from '../pages/Posts';
import { Routes, Route } from 'react-router-dom';
import PostIdPage from '../pages/PostIdPage';
import { publicRoutes, privateRoutes } from './router';
import Login from '../pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../context';
const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log(isAuth);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={route.element} path={route.path} exact={route.exact} key={route.path} />
      ))}
      <Route path="*" element={<Posts />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={route.element} path={route.path} exact={route.exact} key={route.path} />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
