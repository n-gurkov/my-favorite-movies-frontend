import React from 'react';
import { IGenre } from 'src/utils';
import { GenreCard, GenresWrapper } from './assets/styles';
import { IGenreListProps } from './assets/types';

const GenresList: React.FC<IGenreListProps> = ({
  genres,
  genresId,
  handleGenres,
}) => {
  return (
    <GenresWrapper>
      {genres.map((genre: any) => {
        return (
          <GenreCard
            key={genre.id}
            isChecked={genresId.includes(genre.id)}
            onClick={() => handleGenres(genre.id)}
          >
            {genre.name}
          </GenreCard>
        );
      })}
    </GenresWrapper>
  );
};

export default GenresList;
