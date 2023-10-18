const URL_CAT_FACT = 'https://catfact.ninja/fact'
export const getRandomFact = async () => {
  const res = await fetch(URL_CAT_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
