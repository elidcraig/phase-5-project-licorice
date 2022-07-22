import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { currentUserAtom } from '../state/CurrentUser';
import { getMe, deleteLogout } from '../requests/Users'

function Account() {

  const navigate = useNavigate()

  const userQuery = useQuery(['currentUser'], getMe)

  const [currentUser, setCurrentUser] = useAtom(currentUserAtom)

  const handleLogout = async () => {
    const response = await deleteLogout()
    if (response.ok) {
      setCurrentUser(null)
      navigate('/login', { replace: true })
    }
  }

  if (userQuery.isError) return <span>ERROR!!</span>
  if (userQuery.isLoading) return <span>Loading...</span>

  return (
    <div>ACCOUNT
      <Button onClick={handleLogout}>LOGOUT</Button>
    </div>
  );
}

export default Account;