import respResults from '../copies/with_results.json'

export function useMovies () {
  const movies = respResults.Search
  const mappedMovies = movies?.map(movie => (
    {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }
  ))
  return { movies: mappedMovies }
}
