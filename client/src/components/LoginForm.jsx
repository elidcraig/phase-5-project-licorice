import React, { useState } from 'react';
import { Stack, Input, Button, FormControl, FormLabel } from '@chakra-ui/react'

function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' })

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleLogin = e => {
    e.preventDefault()
    
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => {
      if (res.ok) {
        res.json().then(user => console.log(user))
      } else {
        res.json().then(errors => console.error(errors))
      }
    })
  }

  return (
    <form onSubmit={ handleLogin }>
      <Stack>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input type='text' name='username' onChange={ handleChange }/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type='password' name='password' onChange={ handleChange }/>
        </FormControl>
        <Button type='submit'>LOGIN</Button>
      </Stack>
    </form>
  );
}

export default LoginForm;