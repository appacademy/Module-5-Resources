export async function getInfoFromRoute(route, options){
  const res = await fetch(route, options)
  const data = await res.json()
  return data
}