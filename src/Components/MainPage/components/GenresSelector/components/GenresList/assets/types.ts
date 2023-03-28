import React from 'react';
import { IGenre } from 'src/utils';

export interface IGenreListProps {
  genres: IGenre[];
  genresId: IGenre[];
  handleGenres: (index: IGenre) => void;
}
