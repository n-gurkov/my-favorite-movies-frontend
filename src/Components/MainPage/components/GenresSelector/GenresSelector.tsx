import GenresList from './components/GenresList/GenresList'
import useGenres from '../../../../Hooks/useGenres'

const GenresSelector = () => {
  const { genres, genresId, handleGenres } = useGenres()

  return (
    <GenresList
      genres={genres}
      genresId={genresId}
      handleGenres={handleGenres}
    />
  )
}
export default GenresSelector
