import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query';
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
  console.log(currentUser)
  const queryClient = useQueryClient()

  const [search, setSearch] = useState('')

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
        <Input placeholder='Search...' value={ search } onChange={ (e) => setSearch(e.target.value) } />
        <InputRightElement
          as={ Link }
          to={`/search/${ search }`} 
          onClick={ () => queryClient.invalidateQueries('search') }
          children={ <Search2Icon /> } 
        />
      </InputGroup>
      <Spacer />
      {!!currentUser.id ? 
        <Avatar name={ currentUser.username } src={ currentUser.avatarUrl } /> :
        <Button variant='outline' as={ Link } to='/login'>LOG IN</Button>
      }
      
    </Flex>
  );
}

export default Navbar;