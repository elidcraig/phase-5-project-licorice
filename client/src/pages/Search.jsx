import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack } from '@chakra-ui/react'
import ReleaseCard from '../components/ReleaseCard';

function Search() {
  const { query } = useParams()

  const [results, setResults] = useState([])

  useEffect(() => {
    getReleasesFromSearch()
  }, [query])

  async function getReleasesFromSearch() {
    const response = await fetch(`/releases/q=${ query }`)
    const data = await response.json()
    if (response.ok) setResults(data)
  }

  return (
    <Stack>
      { results.map(release => <ReleaseCard key={ release.id } { ...release } />) }
    </Stack>
  );
}

export default Search;