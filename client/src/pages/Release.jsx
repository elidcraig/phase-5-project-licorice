import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getRelease } from '../requests/Releases'
import ReleaseInfo from '../components/ReleaseInfo'

function Release() {
  const { id } = useParams()

  const releaseQuery = useQuery(['release'], () => getRelease(id))
  
  return (
    <div></div>
  );
}

export default Release;