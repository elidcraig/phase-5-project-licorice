import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function Account() {

  const navigate = useNavigate()

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(console.log)
  }, [])

  const handleLogout = () => {
    fetch('/logout', { method: 'DELETE' })
    .then(res => {
      if (res.ok) {
        navigate('/login', { replace: true })
      }
    })
  }

  return (
    <div>ACCOUNT
      <Button onClick={handleLogout}>LOGOUT</Button>
    </div>
  );
}

export default Account;