import styled from 'styled-components';
import { CardWrapper } from 'src/Components/styles/styles';
import MainPage from '../MainPage';

export const LogoutForm = styled(CardWrapper)`
  display: inline-block;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  position: absolute;
  right: 0;
`;
export const GenreCard = styled.div<{ isChecked?: boolean }>`
  width: 25%;
  background: ${(props) => (props.isChecked ? '#afd2ff' : '#e7eff9')};
  box-shadow: ${(props) => (props.isChecked ? '0px 0px 10px gray' : '0px')};
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
`;
export const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  justify-content: center;
`;

export const MovieWrapperBlock = styled.div`
  display: grid;
  margin-left: 2rem;
  margin-right: 2rem;
  grid-template-columns: repeat(4, 1fr);
`;

export const MovieWrapperList = styled.div<{ isBlockView: boolean }>`
  display: flex;
  ${(props) =>
    props.isBlockView ? 'flex-direction: column' : 'flex-direction: row'};
`;

export const MoviePresentBlock = styled.div<{ isWatched: boolean }>`
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 50px 20px;
  box-shadow: 0 0 2px;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  text-align: justify;
  opacity: ${(props) => (props.isWatched ? '0.5' : '1')};
`;

export const MoviePresentList = styled.div<{ isWatched: boolean, isBlockView: boolean }>`
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 50px 20px;
  box-shadow: 0 0 2px;
  width: 100%;
  ${(props) =>
    props.isBlockView ? 'flex-direction: column' : 'flex-direction: row'};
  opacity: ${(props) => (props.isWatched ? '0.5' : '1')};
`;

export const ButtonsWrapper = styled(LogoutForm)`
  display: inline-flex;
  position: static;
  justify-content: flex-end;
  margin-left: auto;
`;

export const MainPageButton = styled(GenreCard)`
  width: 30px;
  height: 30px;
`;

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
