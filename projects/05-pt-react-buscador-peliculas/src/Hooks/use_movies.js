import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/search_movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    // evitar que se haga la misma búsqueda seguida
    if (search === previousSearch.current) return
    previousSearch.current = search
    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  }, [])

  const sortedMovies = useMemo(() => {
    return (sort)
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))// compara sin importar acentos
      : movies
  }, [sort, movies])
  return { movies: sortedMovies, getMovies }
}
