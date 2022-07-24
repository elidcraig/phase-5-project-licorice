import React from 'react';
import { Heading, Image, Stack, Text, Icon } from '@chakra-ui/react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

function ArtistInfo({ artist }) {
  return (
    <Stack>
      <Image boxSize='350px' src={ artist.image_url } alt={ artist.name } />
      <Heading >{ artist.name }</Heading>
      <Icon as={ AiFillHeart } />
      <Text fontSize='sm'>{ artist.bio }Bio goes here...</Text>
    </Stack>
  );
}

export default ArtistInfo;