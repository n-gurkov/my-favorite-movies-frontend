import {
  ButtonsWrapper,
  CaptionWrapper,
  MainPageButton,
  MainPageWrapper,
  PictureCard,
} from '../MainPage/assets/styles'
import GenresSelector from '../MainPage/components/GenresSelector/GenresSelector'
import { useCallback, useEffect, useState } from 'react'
import block from 'src/Components/assets/block.svg'
import list from 'src/Components/assets/list.svg'
import plus from 'src/Components/assets/plus.svg'
import { useTranslation } from 'react-i18next'
import LogoutForm from 'src/Components/elements/LogoutForm/LogoutForm'
import { moviesListUrl, posterUrl } from 'src/urls'
import { IMovie, IMoviesResponse } from 'src/Components/Types/types'
import useLanguage from 'src/Hooks/useLanguage'
import useMoviesContext from 'src/Providers/MoviesProvider/context'
import { debounce } from 'lodash'
import {
  MovieCardButton,
  MoviePresentList,
  MovieTitle,
  MovieWrapperList,
  TextWrapper,
} from '../MainPage/components/FavoriteMovieList/assets/styles'
import { getLocalData } from 'src/utils'
import { Paginate } from 'src/Components/elements/Paginate/Paginate'
import InputRange from './components/InputRange'
import { InputRangeLabel, InputWrapper, InputsWrapper } from './assets/styles'
import {
  currentYear,
  maxRatingValue,
  minRatingValue,
  minYearValue,
} from './constants/inputProps'

const getMoviesList = async (
  page: number,
  language?: string,
  withGenres?: string,
  year?: number,
  rating?: number
): Promise<IMoviesResponse> => {
  return fetch(
    `${moviesListUrl}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&with_genres=${withGenres}&year=${year}&vote_average.gte=${rating}&page=${page}`,

    { method: 'GET' }
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data
    })
    .catch(() => {
      return {}
    })
}
const debounced = debounce((callback) => callback(), 500)

const AddMoviePage = () => {
  const { t } = useTranslation()
  const lang = useLanguage()
  const { selectedGenresIds } = useMoviesContext()
  const [moviesIds, setMoviesIds] = useState(getLocalData('userMoviesIDs'))

  const [page, setPage] = useState(0)

  const handlePageChange = (value: number): void => setPage(value)

  const handleMoviesIds = (id: number) => {
    const movieId = moviesIds.indexOf(id)
    if (movieId < 0) {
      moviesIds.push(id)
    } else {
      moviesIds.splice(movieId, 1)
    }
    setMoviesIds([...moviesIds])
    localStorage.setItem('userMoviesIDs', JSON.stringify(moviesIds))
  }

  const [isBlockView, setIsBlockView] = useState<boolean>(true)
  const handleBlockViewButtonClick = () => setIsBlockView(true)
  const handleListViewButtonClick = () => setIsBlockView(false)
  const [ratingRange, setRatingRange] = useState(0)
  const [yearRange, setYearRange] = useState(1930)
  const [ratingFilter, setRatingFilter] = useState(0)
  const [yearFilter, setYearFilter] = useState(1930)

  const [movies, setMovies] = useState<IMovie[]>([])
  const [totalPages, setTotalPages] = useState(0)

  const handleRatingChange = (value: number): void => {
    setRatingRange(value)
    setPage(0)
    debounced(() => setRatingFilter(value))
  }

  const handleYearChange = (value: number): void => {
    setYearRange(value)
    setPage(0)
    debounced(() => setYearFilter(value))
  }

  const fetchAndFillMovies = useCallback(async () => {
    const genres = selectedGenresIds.join(', ')
    const movies = await getMoviesList(
      page + 1,
      lang,
      genres,
      yearFilter,
      ratingFilter
    )
    if (movies == null) return
    const { results, total_pages: totalPages } = movies
    const normalized = results.map((movie) => ({
      ...movie,
      posterPath: movie.poster_path,
    }))
    setMovies(normalized)
    setTotalPages(totalPages)
  }, [lang, page, ratingFilter, selectedGenresIds, yearFilter])

  useEffect(() => {
    void fetchAndFillMovies()
  }, [ratingFilter, yearFilter, lang, fetchAndFillMovies])

  return (
    <MainPageWrapper>
      <LogoutForm />
      <CaptionWrapper>
        <p>{t('mainPage.genres')}</p>
      </CaptionWrapper>
      <GenresSelector />
      <InputsWrapper>
        <InputWrapper>
          <InputRangeLabel>{t('mainPage.rating')}</InputRangeLabel>
          <InputRange
            value={ratingRange}
            min={minRatingValue}
            max={maxRatingValue}
            onChange={handleRatingChange}
          />
        </InputWrapper>

        <InputWrapper>
          <InputRangeLabel>{t('mainPage.year')}</InputRangeLabel>
          <InputRange
            value={yearRange}
            min={minYearValue}
            max={currentYear}
            onChange={handleYearChange}
          />
        </InputWrapper>
      </InputsWrapper>
      <ButtonsWrapper>
        <MainPageButton
          onClick={handleBlockViewButtonClick}
          isChecked={isBlockView}
        >
          <img src={block} alt={t('mainPage.blockViewButton')} />
        </MainPageButton>
        <MainPageButton
          onClick={handleListViewButtonClick}
          isChecked={!isBlockView}
        >
          <img src={list} alt={t('mainPage.listViewButton')} />
        </MainPageButton>
      </ButtonsWrapper>

      <MovieWrapperList isBlockView={isBlockView}>
        {movies.map((movie) => {
          return (
            <MoviePresentList
              isBlockView={isBlockView}
              key={movie.id}
              isWatched={moviesIds.includes(movie.id)}
            >
              <PictureCard
                img={posterUrl + movie.posterPath}
                isBlockView={isBlockView}
              />

              <TextWrapper isBlockView={isBlockView}>
                <MovieTitle isBlockView={isBlockView}>{movie.title}</MovieTitle>
                <span>{movie.overview}</span>
              </TextWrapper>

              <ButtonsWrapper>
                <MovieCardButton
                  onClick={() => {
                    handleMoviesIds(movie.id)
                  }}
                >
                  <img src={plus} />
                </MovieCardButton>
              </ButtonsWrapper>
            </MoviePresentList>
          )
        })}
      </MovieWrapperList>
      <Paginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
        initialPage={page}
      />
    </MainPageWrapper>
  )
}
export default AddMoviePage
