import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArtistInfo from '../components/ArtistInfo'
import ReleaseContainer from '../components/ReleaseContainer'

function Artist() {
  const { id } = useParams()

  const [artist, setArtist] = useState({})

  useEffect(() => {
    getArtist()
  }, [])

  async function getArtist() {
    const response = await fetch(`/artists/${ id }`)
    const data = await response.json()
    if (response.ok) setArtist(data)
  }

  if (!artist.id) return <h6>Loading...</h6>

  console.log(artist)

  return (
    <>
      <ArtistInfo artist={ artist } />
      <ReleaseContainer releases={ artist.releases } />
    </>
  );
}

export default Artist;