import React from 'react';
import { Heading, Image, Stack, Text, Icon } from '@chakra-ui/react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

function ArtistInfo({ artist, currentUser }) {

  const postFavoriteArtist = async () => {
    const response = await fetch('/favorite_artists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ artist_id: artist.id, user_id: currentUser.id })
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <Stack>
      <Image boxSize='350px' src={ artist.image_url } alt={ artist.name } />
      <Heading >{ artist.name }</Heading>
      <Icon as={ AiFillHeart } onClick={ postFavoriteArtist } />
      <Text fontSize='sm'>{ artist.bio }Bio goes here...</Text>
    </Stack>
  );
}

export default ArtistInfo;