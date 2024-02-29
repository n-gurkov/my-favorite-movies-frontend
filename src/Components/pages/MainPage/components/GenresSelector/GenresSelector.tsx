import GenresList from './components/GenresList/GenresList'
import useMoviesContext from 'src/Providers/MoviesProvider/context'

const GenresSelector = () => {
  const { genres, selectedGenresIds, changeSelectedGenresIds } =
    useMoviesContext()

  return (
    <GenresList
      genres={genres}
      genresIds={selectedGenresIds}
      handleGenres={changeSelectedGenresIds}
    />
  )
}
export default GenresSelector
