export function ListMovies ({ movies }) {
  return (
    <ul>
      {
          movies.map(movie => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.poster} alt={movie.title} />
            </li>

          ))
       }
    </ul>
  )
}

export function NoMoviesResults () {
  return (
    <p>Ninguna película encontrada  </p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    (hasMovies)
      ? (
        <ListMovies movies={movies} />
        )
      : (
        <NoMoviesResults />
        )
  )
}
