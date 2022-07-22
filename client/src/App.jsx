import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { getMe } from './requests/Users';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'
import Account from './pages/Account';
import Artist from './pages/Artist';
import Release from './pages/Release';

function App() {

  const userQuery = useQuery(['currentUser'], getMe)

  return (
    <div className="App">
      <Navbar currentUser={ userQuery.data }/>
      <Routes>
        <Route exact path='/' />
        <Route path='/login' element={ <LoginForm /> } />
        <Route path='/signup' element={ <SignupForm /> } />
        <Route path='/me' element={ <Account currentUser={ userQuery.data } /> } />
        <Route path='/artist/:id' element={ <Artist /> } />
        <Route path='/release/:id' element={ <Release /> } />
      </Routes>
    </div>
  );
}

export default App;
