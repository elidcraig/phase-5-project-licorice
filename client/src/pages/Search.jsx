import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import { Box } from '@chakra-ui/react'
import { getReleaseFromSearch } from '../requests/Releases'

function Search() {
  const { queryInput } = useParams()
  console.log(queryInput)

  const searchQuery = useQuery(['search'], () => getReleaseFromSearch(queryInput))
  console.log(searchQuery.data)

  return (
    <Box>

    </Box>
  );
}

export default Search;