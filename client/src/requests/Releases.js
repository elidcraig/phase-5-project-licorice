export async function getOneRelease(id) {
  const response = await fetch(`/releases/${ id }`)
  return await response.json()
}

export async function getReleaseFromSearch(input) {
  const response = await fetch(`/releases/q=${ input }`)
  return await response.json()
}