import GenresList from './components/GenresList/GenresList'
import useGenres from '../../../../Hooks/useGenres'

const GenresSelector = () => {
  const { genres, genresIds, handleGenres } = useGenres()

  return (
    <GenresList
      genres={genres}
      genresIds={genresIds}
      handleGenres={handleGenres}
    />
  )
}
export default GenresSelector
