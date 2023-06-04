export const searchMovies = async ({ search }) => {
  if (search === '') return
  try {
    const resp = await fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
    const json = await resp.json()
    const movies = json.Search
    return movies?.map(movie => (
      {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }))
  } catch (e) {
    throw new Error('Error buscando las películas')
  }
}
