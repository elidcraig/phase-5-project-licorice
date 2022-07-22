export async function getRelease(id) {
  const response = await fetch(`/releases/${ id }`)
  return await response.json()
}