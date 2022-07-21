import React from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'

function App() {

  return (
      <div className="App">
        <header>LICORICE</header>
        <Routes>
          <Route exact path='/' >
            <Route path='login' element={<LoginForm />}/>
            <Route path='signup' element={<SignupForm />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
