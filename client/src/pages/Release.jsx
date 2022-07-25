import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import ReleaseInfo from '../components/ReleaseInfo'

function Release({ currentUser }) {
  const { id } = useParams()

  const [release, setRelease] = useState({})

  useEffect(() => {
    getRelease()
  }, [])

  async function getRelease() {
    const response = await fetch(`/releases/${ id }`)
    const data = await response.json()
    if (response.ok) setRelease(data)
  }

  if (!release.id) return <h6>Loading...</h6>

  return (
    <>
      <ReleaseInfo release={ release } currentUser={ currentUser }/>
    </>
  );
}

export default Release;