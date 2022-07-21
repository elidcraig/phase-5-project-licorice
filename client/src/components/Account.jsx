import React, { useEffect } from 'react';

function Account() {

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(console.log)
  }, [])

  return (
    <div>ACCOUNT</div>
  );
}

export default Account;