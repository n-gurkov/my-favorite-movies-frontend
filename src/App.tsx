import React from 'react';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import { initUsers } from './utils';
import { Header } from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import PrivateRoute from './Components/Routes/PrivateRoute';
import { useTranslation } from 'react-i18next';

function App() {
  initUsers();
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<h1>{t('mainPage.badURL')}</h1>} />
        <Route path='/' element={<LoginPage />} />
        <Route
          path='/main-page'
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path='/add-movie-page' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
