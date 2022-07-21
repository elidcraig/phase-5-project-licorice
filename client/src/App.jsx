import React from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'
import Account from './components/Account';

function App() {
  return (
    <div className="App">
      <header>LICORICE</header>
      <Routes>
        <Route path='/' >
          <Route path='/login' element={<LoginForm />}/>
          <Route path='/signup' element={<SignupForm />} />
        </Route>
        <Route path='me' element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
