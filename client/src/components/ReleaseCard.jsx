import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Image, Text } from '@chakra-ui/react'

function ReleaseCard({ id, title, release_date, artwork_url, release_type }) {

  const navigate = useNavigate()

  return (
    <Stack>
      <Image boxSize='150px' onClick={ () => navigate(`/release/${id}`) }/>
      <Text fontSize='xs' >{ title }</Text>
    </Stack>
  );
}

export default ReleaseCard;