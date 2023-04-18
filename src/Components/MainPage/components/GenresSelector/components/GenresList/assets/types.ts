import React from 'react';

export interface IGenre {
  id: number;
  name: string;
}

export interface IGenreListProps {
  genres: IGenre[];
  genresId: number[];
  handleGenres: (index: number) => void;
}
