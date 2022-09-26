import React from "react";
import {
  GenreCard,
  GenresWrapper,
} from "src/Components/MainPage/assets/MainPageStyledComponents";
import { IGenre } from "src/utils";

interface IGenreListProps {
  genres: IGenre[];
  genresId: IGenre[];
  handleGenres: (index: IGenre) => void;
}

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
            isChecked={genresId.includes(genre.id) ? true : false}
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
