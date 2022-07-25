import React, { useState, useEffect } from 'react';
import { List, ListItem } from '@chakra-ui/react'

function Favorites() {
  const [faves, setFaves] = useState([])

  useEffect(() => {
    getFavReleases()
  }, [])

  const getFavReleases = async () => {
    const response = await fetch('/me/favorite_releases')
    const data = await response.json()
    setFaves(data)
  }
  return (
    <List>
      { faves.map(fave => <ListItem key={ fave.id } >{ fave.title }</ListItem>)}
    </List>
  );
}

export default Favorites;