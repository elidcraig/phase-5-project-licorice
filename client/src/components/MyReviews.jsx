import React, { useState, useEffect } from 'react';
import { List, ListItem } from '@chakra-ui/react'

function MyReviews() {
  const [releaseReviews, setReleaseReviews] = useState([])
  console.log(releaseReviews)

  useEffect(() => {
    getReleaseReviews()
  }, [])

  const getReleaseReviews = async () => {
    const response = await fetch('/me/release_reviews')
    const data = await response.json()
    setReleaseReviews(data)
  }

  return (
    <List>
      { releaseReviews.map(review => {
        return <ListItem key={review.id} >{ review.body }</ListItem>
      })}
    </List>
  );
}

export default MyReviews;