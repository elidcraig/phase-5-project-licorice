import React from 'react';
import { Stack, Image, Text } from '@chakra-ui/react'

function ReleaseCard({ id, title, release_date, artwork_url, release_type }) {
  return (
    <Stack>
      <Image boxSize='150px' />
      <Text fontSize='xs' >{ title }</Text>
    </Stack>
  );
}

export default ReleaseCard;