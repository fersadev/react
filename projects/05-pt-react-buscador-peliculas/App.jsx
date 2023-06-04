import debounce from 'just-debounce-it'
import { useCallback, useState } from 'react'
import './app.css'
import { Movies } from './src/Components/ListMovies'
import { useMovies } from './src/Hooks/use_movies'
import { useSearch } from './src/Hooks/use_search'
export function App () {
  const [sort, setSort] = useState('')
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search, sort })
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
    getMovies({ search })
  }
  // Evita que se haga la búsqueda continuamente al escribir
  const debounceGetMovies = useCallback(debounce(search => {
    getMovies({ search })
  }, 400), [])

  // Haz que la búsqueda se haga automáticamente al escribir.
  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)
    debounceGetMovies(newQuery)
  }

  const handleSort = () => {
    setSort(!sort)
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form action='' className='form' onSubmit={handleSubmit}>
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <input onChange={handleChange} value={search} name='queryDOM' placeholder='Avenger,SuperMan' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}> {error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
