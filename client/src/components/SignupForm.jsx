import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom'
import { Stack, Input, Button, FormControl, FormLabel } from '@chakra-ui/react'
import { currentUserAtom } from '../state/CurrentUser';
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

  const [, setCurrentUser] = useAtom(currentUserAtom)

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
    setCurrentUser(user.id)
    navigate('/me', { replace: true })

    // fetch('/signup', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(config)
    // })
    // .then(res => {
    //   if (res.ok) {
    //     res.json().then(user => {
    //       console.log(user)
    //       navigate('/me', { replace: true })
    //     })
    //   } else {
    //     res.json().then(errors => console.error(errors))
    //   }
    // })
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