import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { getMe } from './requests/Users';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'
import Account from './pages/Account';
import Artist from './pages/Artist';
import Release from './pages/Release';
import Search from './pages/Search';

function App() {

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    getCurrentUser()
  }, [])
  
  const getCurrentUser = async () => {
    const user = await getMe()
    if (user.id) setCurrentUser(user)
  }

  const handleLogin = newUser => setCurrentUser(newUser)
  
  const handleLogout = () => setCurrentUser({})

  return (
    <div className="App">
      <Navbar currentUser={ currentUser } />
      <Routes>
        <Route exact path='/' />
        <Route path='/login' element={ <LoginForm currentUser={ currentUser } setCurrentUser={ handleLogin }/> } />
        <Route path='/signup' element={ <SignupForm currentUser={ currentUser } setCurrentUser={ handleLogin }/> } />
        <Route path='/me' element={ <Account currentUser={ currentUser } setCurrentUser={ handleLogout }/> } />
        <Route path='/artist/:id' element={ <Artist currentUser={ currentUser }/> } />
        <Route path='/release/:id' element={ <Release currentUser={ currentUser }/> } />
        <Route path='/search/:query' element={ <Search currentUser={ currentUser }/> } />
      </Routes>
    </div>
  );
}

export default App;
