import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { deleteLogout } from '../requests/Users'

function Account({ currentUser, setCurrentUser }) {

  const navigate = useNavigate()

  const handleLogout = async () => {
    const response = await deleteLogout()
    if (response.ok) {
      setCurrentUser()
      navigate('/login', { replace: true })
    }
  }

  return (
    <div>ACCOUNT
      <Button onClick={ handleLogout }>LOGOUT</Button>
    </div>
  );
}

export default Account;