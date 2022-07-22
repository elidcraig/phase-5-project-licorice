import React from 'react';
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai';
import { Flex, Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink, InputGroup, Input, InputRightElement, Avatar, Button } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import { currentUserAtom } from '../state/CurrentUser'

function Navbar() {
  const [currentUser] = useAtom(currentUserAtom)

  return (
    <Flex >
      <Image src='https://i.imgur.com/vWfbH8W.png' alt='Licorice logo' maxWidth='200px'/>

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

      <InputGroup >
        <Input placeholder='Search...' />
        <InputRightElement children={ <Search2Icon /> } />
      </InputGroup>

      {currentUser.id ? 
        <Avatar name={ currentUser.username } src={ currentUser.avatarUrl } /> :
        <Button variant='outline'>LOG IN</Button>
      }
      
    </Flex>
  );
}

export default Navbar;