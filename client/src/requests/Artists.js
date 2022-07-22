export async function getArtist(id) {
  const response = await fetch(`/artists/${ id }`)
  return await response.json()
}