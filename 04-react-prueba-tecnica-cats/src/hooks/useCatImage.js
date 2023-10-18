import { useEffect, useState } from 'react'
const BASE_URL_CAT_IMG = 'https://cataas.com/'
export function useCatImage({fact}) {
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstTreeWord = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firstTreeWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImgUrl(url)
      })
  }, [fact])

  return {imgUrl:`${BASE_URL_CAT_IMG}${imgUrl}`}
}
