import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts.js'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
import { Otro } from './components/Otro.jsx'



export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  const handleClick = async () => {
    console.log(imgUrl)
    refreshFact()
  }

  return (<main>
      <h1>App de gatos</h1>
      <section>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <p>{fact}</p>}
        {imgUrl && <img src={imgUrl} alt={`Image from caats api with a the fact: ${fact}`}/>}
      </section>
    </main>)
}