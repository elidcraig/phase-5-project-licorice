import React from 'react';

function ReleaseCard({ id, title, release_date, artwork_url, release_type, artist }) {
  return (
    <div>{title} by {artist.name}</div>
  );
}

export default ReleaseCard;