import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Stack, Input, Button, FormControl, FormLabel } from '@chakra-ui/react'
import { postLogin } from '../requests/Users'

function LoginForm({ currentUser, setCurrentUser }) {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({ username: '', password: '' })

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleLogin = async (e) => {
    e.preventDefault()
    const user = await postLogin(formData)
    setCurrentUser(user)
    navigate('/me', { replace: true })
  }

  return (
    <form onSubmit={ handleLogin }>
      <Stack>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input type='text' name='username' value={formData.username} onChange={ handleChange }/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type='password' name='password' value={formData.password} onChange={ handleChange }/>
        </FormControl>
        <Button type='submit'>LOGIN</Button>
      </Stack>
    </form>
  );
}

export default LoginForm;