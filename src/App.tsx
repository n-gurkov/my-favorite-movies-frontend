import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from "./Components/LoginPage/LoginPage";
import { initUsers } from "./utils";
import { Header } from "./Components/Header/Header";
import { HeaderWrapper } from './Components/Header/assets/styles';

function App() {
  initUsers();
  return (
    <div>
     
      <Header />
     

      <LoginPage />
    </div>
  );
}

export default App;
