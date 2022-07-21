import React, { useState } from 'react';
import { Stack, Input, Button, FormControl, FormLabel } from '@chakra-ui/react'

function SignupForm() {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    avatarUrl: '',
    location: '',
    bio: ''
  })

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()

    const config = {
      username: formData.username,
      password: formData.password,
      password_confirmation: formData.passwordConfirm,
      email: formData.email,
      avatar_url: formData.avatarUrl,
      location: formData.location,
      bio: formData.bio
    }

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
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
    <form onSubmit={handleSubmit}>
      <Stack>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input type='text' name='username' value={ formData.username } onChange={ handleChange }/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type='password' name='password' value={ formData.password } onChange={ handleChange }/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input type='password' name='passwordConfirm' value={ formData.passwordConfirm } onChange={ handleChange }/>
        </FormControl>
        <Button type='submit'>SIGN UP</Button>
      </Stack>
    </form>
  );
}

export default SignupForm;