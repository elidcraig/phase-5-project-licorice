import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import { Stack } from '@chakra-ui/react'
import { getReleasesFromSearch } from '../requests/Releases'
import ReleaseCard from '../components/ReleaseCard';

function Search() {
  const { queryInput } = useParams()
  console.log(queryInput)

  const { isLoading, data } = useQuery(['search'], () => getReleasesFromSearch(queryInput))
  console.log(data)

  if (isLoading) return <div>Loading...</div>

  

  return (
    <Stack>
      { data.map(release => <ReleaseCard key={ release.id } { ...release }/>) }
    </Stack>
  );
}

export default Search;