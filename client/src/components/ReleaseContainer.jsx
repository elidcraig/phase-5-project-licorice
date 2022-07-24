import React from 'react';
import { Flex } from '@chakra-ui/react'
import ReleaseCard from './ReleaseCard';

function ReleaseContainer({ releases }) {

  const releaseCards = releases.map(release => <ReleaseCard key={ release.id } { ...release } />)

  return (
    <Flex wrap='wrap' >
      { releaseCards }
    </Flex>
  );
}

export default ReleaseContainer;