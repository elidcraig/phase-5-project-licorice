import React from 'react';
import {
  Stack,
  Image,
  HStack,
  Heading,
  OrderedList,
  ListItem
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { 
  AiFillHeart,
  AiOutlineHeart,
  AiFillClockCircle,
  AiOutlineClockCircle,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar
} from 'react-icons/ai'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

function ReleaseInfo({ release, currentUser }) {

  const postFavoriteRelease = async () => {
    const response = await fetch('/favorite_releases', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ release_id: release.id, user_id: currentUser.id })
    })
    const data = await response.json()
  }

  const postSavedRelease = async () => {
    const response = await fetch('/release_saves', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ release_id: release.id, user_id: currentUser.id })
    })
    const data = await response.json()
  }

  return (
    <Stack >
      <Image boxSize='350px' src={ release.artwork_url } alt={ release.title }/>
      <HStack >
        <Icon as={ AiFillHeart } onClick={ postFavoriteRelease }/>
        <Icon as={ AiFillClockCircle } onClick={ postSavedRelease }/>
        <Icon as={ AiOutlinePlus } />
      </HStack>
      <Heading >{ release.title }</Heading>
      <Heading as='h4' size='md'>{ release.artist.name }</Heading>
      <HStack >
        <Icon as={ BsStarFill } />
        <Icon as={ BsStarFill } />
        <Icon as={ BsStarFill } />
        <Icon as={ BsStarFill } />
        <Icon as={ BsStarHalf } />
      </HStack>
      <OrderedList >
        <ListItem>
          Tracknames here..
        </ListItem>
      </OrderedList>
    </Stack>
  );
}

export default ReleaseInfo;