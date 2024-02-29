import './App.css'
import LoginPage from './Components/pages/LoginPage/LoginPage'
import { initUsers } from './utils'
import { Header } from './Components/elements/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Components/pages/MainPage/MainPage'
import PrivateRoute from './Components/Routes/PrivateRoute'
import { useTranslation } from 'react-i18next'
import AddMoviePage from './Components/pages/AddMoviePage/AddMoviePage'
import MoviesProvider from './Providers/MoviesProvider'

function App() {
  initUsers()
  const { t } = useTranslation()
  return (
    <MoviesProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<h1>{t('mainPage.badURL')}</h1>} />
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/main-page"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-movie-page"
            element={
              <PrivateRoute>
                <AddMoviePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </MoviesProvider>
  )
}

export default App
