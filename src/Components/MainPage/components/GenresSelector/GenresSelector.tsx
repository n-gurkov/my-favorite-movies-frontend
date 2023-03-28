import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getGenresList, getLocalData, IGenre } from 'src/utils';
import GenresList from './components/GenresList/GenresList';

const GenresSelector = () => {
  const { i18n } = useTranslation();
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [genresId, setGenresId] = useState<IGenre[]>([]);
  useEffect(() => {
    getGenresList(i18n.language).then((data) => setGenres(data));
  }, [i18n.language]);

  const handleGenres = (id: IGenre) => {
    if (!genresId.includes(id)) {
      genresId.push(id);
    } else {
      const genreId = genresId.indexOf(id);
      genresId.splice(genreId, 1);
    }
    setGenresId([...genresId]);
    localStorage.setItem('userGenres', JSON.stringify(genres));
  };
  return (
    <GenresList
      genres={genres}
      genresId={genresId}
      handleGenres={handleGenres}
    />
  );
};
export default GenresSelector;
