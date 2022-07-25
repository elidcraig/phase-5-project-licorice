import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Image,
  Button, 
  Heading,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel
} from '@chakra-ui/react';
import Favorites from '../components/Favorites'
import ListenLater from '../components/ListenLater'
import MyRatings from '../components/MyRatings'
import MyLists from '../components/MyLists'
import MyReviews from '../components/MyReviews'
import { deleteLogout } from '../requests/Users'

function Account({ currentUser, clearCurrentUser }) {

  const navigate = useNavigate()

  const handleLogout = async () => {
    const response = await deleteLogout()
    if (response.ok) {
      clearCurrentUser()
      navigate('/login', { replace: true })
    }
  }

  return (
    <>
      <Image 
        src={ currentUser.avatar_url }
        alt={ currentUser.username }
        boxSize='300px'
        borderRadius='full'
      />
      <Heading >{ currentUser.username }</Heading>
      <Text fontSize='sm'>{ currentUser.bio }Bio goes here...</Text>

      <Tabs>
        <TabList>
          <Tab>Favorites</Tab>
          <Tab>Saved</Tab>
          <Tab>Rated</Tab>
          <Tab>Lists</Tab>
          <Tab>Reviews</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>

          </TabPanel>
          <TabPanel>

          </TabPanel>
          <TabPanel>

          </TabPanel>
          <TabPanel>

          </TabPanel>
          <TabPanel>

          </TabPanel>
        </TabPanels>
      </Tabs>

      <Button onClick={ handleLogout }>LOGOUT</Button>

    </>
  );
}

export default Account;