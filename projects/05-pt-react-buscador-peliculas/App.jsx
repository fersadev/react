import { useEffect, useRef, useState } from 'react'
import './app.css'
import { Movies } from './src/Components/ListMovies'
import { useMovies } from './src/Hooks/use_movies'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

export function App () {
  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()
  const handleSubmit = (event) => {
    // gestión de formulario no controlada por y se controla a traves del DOM
    // es mejor no contratada es mas rápida hay menos errores y se aprende mas
    // javascript
    event.preventDefault()
    // obtener con un objeto todos los inputs de un form
    // const fields = Object.fromEntries(new window.FormData(event.target))
    const { queryDOM } = Object.fromEntries(new window.FormData(event.target))
    console.log({ queryDOM })
    // gestión de formulario controlado por react
    console.log(search)
  }
  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form action='' className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='queryDOM' placeholder='Avenger,SuperMan' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }} />}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
