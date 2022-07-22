import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Stack, Input, Button, FormControl, FormLabel } from '@chakra-ui/react'
import { postSignup } from '../requests/Users'

function SignupForm() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    avatarUrl: '',
    location: '',
    bio: ''
  })

  const [currentStuff, setCurrentStuff] = useState({})

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
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

    const user = await postSignup(config)
    setCurrentStuff(user) // refactor to react query mutation
    navigate('/me', { replace: true })

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