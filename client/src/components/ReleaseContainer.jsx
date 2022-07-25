import React from 'react';
import { Heading, Flex } from '@chakra-ui/react'
import ReleaseCard from './ReleaseCard';

function ReleaseContainer({ releases }) {

  const releaseCards = releases.map(release => <ReleaseCard key={ release.id } { ...release } />)

  return (
    <>
      <Heading>Releases</Heading>
      <Flex wrap='wrap' justify='space-around'>
        { releaseCards }
      </Flex>
    </>
  );
}

export default ReleaseContainer;