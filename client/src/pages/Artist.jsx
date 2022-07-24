import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import { getOneArtist } from '../requests/Artists'
import ArtistInfo from '../components/ArtistInfo'
import ReleaseContainer from '../components/ReleaseContainer'

function Artist() {
  const { id } = useParams()

  const artistQuery = useQuery(['artist'], () => getOneArtist(id))

  if (artistQuery.isLoading) return <h6>Loading...</h6>

  return (
    <>
      <ArtistInfo artist={ artistQuery.data } />
      <ReleaseContainer />
    </>
  );
}

export default Artist;