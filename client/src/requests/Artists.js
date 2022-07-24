export async function getOneArtist(id) {
  const response = await fetch(`/artists/${ id }`)
  return await response.json()
}