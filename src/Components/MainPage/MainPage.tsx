import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ButtonsWrapper,
  CaptionWrapper,
  Link,
  LogoutForm,
  LogoutButton,
  MainPageButton,
  MainPageWrapper,
} from './assets/styles'
import GenresSelector from './components/GenresSelector/GenresSelector'
import MyMovies from './components/MyMovies/MyMovies'
import block from './assets/block.svg'
import list from './assets/list.svg'
import plus from './assets/plus.svg'
import { clearLogInData, getLocalData } from 'src/utils'

const MainPage = () => {
  const user = getLocalData('currentUser')

  const navigate = useNavigate()
  const { t } = useTranslation()

  const [isBlockView, setIsBlockView] = useState<boolean>(true)
  const logOut = () => {
    clearLogInData()
    navigate('/', { replace: true })
  }
  const handleBlockViewButtonClick = () => setIsBlockView(true)
  const handleListViewButtonClick = () => setIsBlockView(false)

  return (
    <MainPageWrapper>
      <LogoutForm>
        {t('mainPage.hello')}, {user}!
        <LogoutButton onClick={logOut}>{t('mainPage.logout')}</LogoutButton>
      </LogoutForm>

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
      <MyMovies isBlockView={isBlockView} />
    </MainPageWrapper>
  )
}
export default MainPage
