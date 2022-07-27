import React, { useState, useEffect } from 'react';
import { List, ListItem } from '@chakra-ui/react'

function ListenLater() {
  const [savedReleases, setSavedReleases] = useState([])

  useEffect(() => {
    getSavedReleases()
  }, [])

  const getSavedReleases = async () => {
    const response = await fetch('/me/saved_releases')
    const data = await response.json()
    setSavedReleases(data)
  }
  return (
    <List>
      { savedReleases.map(release => <ListItem key={release.id}>{ release.title }</ListItem>) }
    </List>
  );
}

export default ListenLater;