import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai';
import {
  Flex,
  Spacer,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  InputGroup,
  Input,
  InputRightElement,
  Avatar,
  Button
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'

function Navbar({ currentUser }) {

  return (
    <Flex >
      <Image src='https://i.imgur.com/vWfbH8W.png' alt='Licorice logo' maxWidth='200px'/>
      <Spacer />
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={ Link } to='#'>
            Music
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={ Link } to='#'>
            Reviews
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={ Link } to='#'>
            Lists
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Spacer />
      <InputGroup maxWidth='300px'>
        <Input placeholder='Search...' />
        <InputRightElement children={ <Search2Icon /> } />
      </InputGroup>
      <Spacer />
      {currentUser ? 
        <Avatar name={ currentUser.username } src={ currentUser.avatarUrl } /> :
        <Button variant='outline' as={ Link } to='/login'>LOG IN</Button>
      }
      
    </Flex>
  );
}

export default Navbar;