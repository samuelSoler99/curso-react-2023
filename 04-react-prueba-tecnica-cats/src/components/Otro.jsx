import { useCatFact } from '../hooks/useCatFact.js'
import { useCatImage } from '../hooks/useCatImage.js'

export function Otro () {
  const { imgUrl } = useCatImage({ fact: 'cat' })

  return (<>
      {imgUrl && <img src={imgUrl}/>}
    </>)
}