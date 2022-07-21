export async function postLogin(config) {
  const response = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(config)
  })
  return await response.json()
}

export async function postSignup(config) {
  const response = await fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(config)
  })
  return await response.json()
}

export async function getMe() {
  const response = await fetch('/me')
  return await response.json()
}

export async function deleteLogout() {
  return await fetch('/logout', { method: 'DELETE' })
}