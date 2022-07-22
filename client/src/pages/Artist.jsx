import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import { getArtist } from '../requests/Artists'
import ArtistInfo from '../components/ArtistInfo'
import ReleaseContainer from '../components/ReleaseContainer'

function Artist() {
  const { id } = useParams()

  const artistQuery = useQuery(['artist'], () => getArtist(id))
  return (
    <div></div>
  );
}

export default Artist;