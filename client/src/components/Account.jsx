import React, { useEffect } from 'react';

function Account() {

  useEffect(() => {
    fetch('http://localhost:3000/me')
    .then(res => res.json())
    .then(console.log)
  }, [])

  return (
    <div>ACCOUNT</div>
  );
}

export default Account;