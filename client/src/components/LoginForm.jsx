import React from 'react';
import { Stack, Input, Button } from '@chakra-ui/react'

function LoginForm() {
  return (
    <Stack>
      <Input type='text'/>
      <Input type='password'/>
      <Button>LOGIN</Button>
    </Stack>
  );
}

export default LoginForm;