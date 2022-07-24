import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getOneRelease } from '../requests/Releases'
import ReleaseInfo from '../components/ReleaseInfo'

function Release() {
  const { id } = useParams()

  const releaseQuery = useQuery(['release'], () => getOneRelease(id))
  
  // stack:
  // image
  // button bar
  // heading
  // subheading
  // rating bar
  // tracklist
  if (releaseQuery.isLoading) return <h6>Loading...</h6>

  return (
    <>
      <ReleaseInfo release={ releaseQuery.data }/>
    </>
  );
}

export default Release;