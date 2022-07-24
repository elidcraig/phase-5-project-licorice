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

function ReleaseInfo({ release }) {

  return (
    <Stack >
      <Image boxSize='350px' src={ release.artwork_url } alt={ release.title }/>
      <HStack >
        <Icon as={ AiFillHeart } />
        <Icon as={ AiFillClockCircle } />
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