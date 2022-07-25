import React, { useState, useEffect } from 'react';
import { List, ListItem } from '@chakra-ui/react'

function Favorites() {
  const [favReleases, setFavReleases] = useState([])
  const [favArtists, setFavArtists] = useState([])

  useEffect(() => {
    getFavReleases()
    getFavArtists()
  }, [])

  const getFavReleases = async () => {
    const response = await fetch('/me/favorite_releases')
    const data = await response.json()
    setFavReleases(data)
  }

  const getFavArtists = async () => {
    const response = await fetch('/me/favorite_artists')
    const data = await response.json()
    setFavArtists(data)
  }

  return (
    <List>
      { favReleases.map(fav => <ListItem key={ fav.id } >{ fav.title }</ListItem>) }
      { favArtists.map(fav => <ListItem key={ fav.id }>{ fav.name }</ListItem>)}
    </List>
  );
}

export default Favorites;