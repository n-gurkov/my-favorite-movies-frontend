import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ButtonsWrapper,
  CaptionWrapper,
  Link,
  MainPageButton,
  MainPageWrapper,
} from './assets/styles'
import GenresSelector from './components/GenresSelector/GenresSelector'
import block from 'src/Components/assets/block.svg'
import list from 'src/Components/assets/list.svg'
import plus from 'src/Components/assets/plus.svg'
import LogoutForm from 'src/Components/elements/LogoutForm/LogoutForm'
import { getLocalData } from 'src/utils'
import FavoriteMovieList from './components/FavoriteMovieList/FavoriteMovieList'

const MainPage = () => {
  const { t } = useTranslation()
  const [isBlockView, setIsBlockView] = useState<boolean>(
    getLocalData('isBlockView')
  )

  useEffect(() => {
    localStorage.setItem('isBlockView', JSON.stringify(isBlockView))
  }, [isBlockView])

  const handleBlockViewButtonClick = () => setIsBlockView(true)
  const handleListViewButtonClick = () => setIsBlockView(false)

  return (
    <MainPageWrapper>
      <LogoutForm />

      <CaptionWrapper>
        <p>{t('mainPage.genres')}</p>
      </CaptionWrapper>

      <GenresSelector />

      <ButtonsWrapper>
        <Link href="/add-movie-page">
          <img src={plus} alt={t('mainPage.addButton')} />
        </Link>
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
      <FavoriteMovieList isBlockView={isBlockView} />
    </MainPageWrapper>
  )
}
export default MainPage
