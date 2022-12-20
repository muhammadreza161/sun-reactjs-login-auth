import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login';
import ProfilePage from './component/ProfilePage';
import NavbarComponent from './component/NavbarComponent';

function App() {
  return (
    <div className='App'>
      <NavbarComponent/>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
