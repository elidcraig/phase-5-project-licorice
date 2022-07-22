import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { deleteLogout } from '../requests/Users'

function Account({ currentUser }) {

  const navigate = useNavigate()

  const [currentUserStuff, setCurrentUserStuff] = useState({})

  const handleLogout = async () => {
    const response = await deleteLogout()
    if (response.ok) {
      setCurrentUserStuff({}) // refactor to react query mutation
      navigate('/login', { replace: true })
    }
  }

  // if (userQuery.isError) return <span>ERROR!!</span>
  // if (userQuery.isLoading) return <span>Loading...</span>

  return (
    <div>ACCOUNT
      <Button onClick={handleLogout}>LOGOUT</Button>
    </div>
  );
}

export default Account;