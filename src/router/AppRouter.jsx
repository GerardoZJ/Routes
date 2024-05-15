import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
  HomePage,
  DashboardPage,
  LoginPage,
  RegisterPage,
  Home,
  AcercaDe,
  Contacto,
  Servicios,
  Perfil,
  Configuracion,
  Reportes,
} from '../pages';

export const AppRouter = ({ isAuthenticated }) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='acercade' element={<AcercaDe />} />
        <Route path='contacto' element={<Contacto />} />
        <Route path='servicios' element={<Servicios />} />

        {isAuthenticated && (
          <>
            <Route path='dashboard' element={<DashboardPage />} />
            <Route path='perfil' element={<Perfil />} />
            <Route path='configuracion' element={<Configuracion />} />
            <Route path='reportes' element={<Reportes />} />
          </>
        )}

        {}
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </>
  );
};
