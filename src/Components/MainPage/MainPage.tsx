import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ButtonsWrapper,
  LogoutForm,
  MainPageButton,
  MainPageWrapper,
} from './assets/MainPageStyledComponents';
import { CaptionWrapper } from '../Header/assets/styles';
import GenresSelector from './components/GenresSelector/GenresSelector';
import MyMovies from './components/MyMovies/MyMovies';
import block from 'src/Components/MainPage/assets/block.svg';
import list from 'src/Components/MainPage/assets/list.svg';

const user = localStorage.getItem('currentUser');

const MainPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const AddMovie = () => {
    navigate('/AddMoviePage');
  };
  const [isBlockView, setView] = useState<boolean>(true);
  const LogOut = () => {
    localStorage.removeItem('currentUser');
    localStorage.setItem('isLogged', 'false');
    navigate('/', { replace: true });
  };
  return (
    <MainPageWrapper>
      <LogoutForm>
        {t('mainPage.hello')}, {user}!
        <button onClick={LogOut}>{t('mainPage.logout')}</button>
      </LogoutForm>

      <CaptionWrapper>
        <p>{t('mainPage.genres')}</p>
      </CaptionWrapper>
      <div>
        <GenresSelector />
      </div>
      <ButtonsWrapper>
        <MainPageButton onClick={AddMovie}>{t('mainPage.add')}</MainPageButton>

        <MainPageButton onClick={() => setView(true)} isChecked={isBlockView}>
          <img src={block} />
        </MainPageButton>
        <MainPageButton onClick={() => setView(false)} isChecked={!isBlockView}>
          <img src={list} />
        </MainPageButton>
      </ButtonsWrapper>
      <MyMovies isBlockView={isBlockView} />
    </MainPageWrapper>
  );
};
export default MainPage;
