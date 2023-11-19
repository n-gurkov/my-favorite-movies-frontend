import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ButtonsWrapper,
  CaptionWrapper,
  LogoutForm,
  LogoutLink,
  MainPageButton,
  MainPageWrapper,
} from './assets/styles'
import GenresSelector from './components/GenresSelector/GenresSelector'
import MyMovies from './components/MyMovies/MyMovies'
import block from './assets/block.svg'
import list from './assets/list.svg'
import plus from './assets/plus.svg'
import { clearLogInData } from 'src/utils'

const MainPage = () => {
  const user = localStorage.getItem('currentUser')

  const navigate = useNavigate()
  const { t } = useTranslation()
  const AddMovie = () => {
    navigate('/add-movie-page')
  }
  const [isBlockView, setView] = useState<boolean>(true)
  const logOut = () => {
    clearLogInData()
    navigate('/', { replace: true })
  }

  return (
    <MainPageWrapper>
      <LogoutForm>
        {t('mainPage.hello')}, {user}!
        <LogoutLink onClick={logOut}>{t('mainPage.logout')}</LogoutLink>
      </LogoutForm>

      <CaptionWrapper>
        <p>{t('mainPage.genres')}</p>
      </CaptionWrapper>

      <GenresSelector />

      <ButtonsWrapper>
        <MainPageButton onClick={AddMovie}>
          <img src={plus} alt={t('mainPage.addButton')} />
        </MainPageButton>
        <MainPageButton
          onClick={() => setView(isBlockView)}
          isChecked={isBlockView}
        >
          <img src={block} alt={t('mainPage.blockViewButton')} />
        </MainPageButton>
        <MainPageButton
          onClick={() => setView(!isBlockView)}
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
