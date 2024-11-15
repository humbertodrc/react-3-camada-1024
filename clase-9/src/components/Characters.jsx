import { useEffect } from 'react'
import { useState } from 'react'
import { getCharacters } from '../services/getCharacters'

const Characters = () => {

  const [characters, setCharacters] = useState([])
  const [newFetch, setNewFetch] = useState(false)

  useEffect(() => {
    getCharacters().then(response => {
      setCharacters(response)
    })
  }, [newFetch])

  const handleNewFetch = () => {
    setNewFetch((prev) => !prev)
  }

  console.log(characters);

  return (
    <section>
      Characters
      {characters.map((character) => (
        <article key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </article>
      ))}
      <button
        onClick={handleNewFetch}
      >
        {newFetch ? 'Detener' : 'Iniciar'} Fetch
      </button>
    </section>
  )
}
export default Characters