import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { currentUserAtom } from '../state/CurrentUser';
import { getMe, deleteLogout } from '../requests/Users'

function Account() {

  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useAtom(currentUserAtom)

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(user => {if(currentUser === null) setCurrentUser(user.id)})
  }, [])

  const handleLogout = async () => {
    const response = await deleteLogout()
    if (response.ok) {
      setCurrentUser(null)
      navigate('/login', { replace: true })
    }
  }

  return (
    <div>ACCOUNT
      <Button onClick={handleLogout}>LOGOUT</Button>
    </div>
  );
}

export default Account;