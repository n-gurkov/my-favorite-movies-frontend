import React from 'react'
import { GenreCard, GenresWrapper } from './assets/styles'
import {
  IGenre,
  IGenreListProps,
} from '../../../../../../Components/Types/types'

const GenresList: React.FC<IGenreListProps> = ({
  genres,
  genresId,
  handleGenres,
}) => {
  return (
    <GenresWrapper>
      {genres.map((genre: IGenre) => {
        return (
          <GenreCard
            key={genre.id}
            isChecked={genresId.includes(genre.id)}
            onClick={() => handleGenres(genre.id)}
          >
            {genre.name}
          </GenreCard>
        )
      })}
    </GenresWrapper>
  )
}

export default GenresList
