import styled from 'styled-components';
import { CardWrapper } from 'src/Components/styles/styles';

export const LogoutForm = styled(CardWrapper)`
  padding: 0.5rem 1rem;
  margin-left: auto;
`;

export const CaptionWrapper = styled(CardWrapper)`
  display: flex;
  padding: 0 1rem;
  font-size: 15pt;
  justify-content: center;
  margin: 1rem 20rem;
  width: auto;
  user-select: none;
  cursor: default;
`;

export const ButtonsWrapper = styled(CardWrapper)`
  padding: 0.5rem 1rem;
  display: inline-flex;
  position: static;
  justify-content: flex-end;
  margin-left: auto;
`;

export const MainPageButton = styled.button<{
  isChecked?: boolean;
}>`
  background: ${(props) => (props.isChecked ? '#afd2ff' : '#e7eff9')};
  box-shadow: ${(props) => (props.isChecked ? '0px 0px 10px gray' : 'none')};
  border: 1px solid gray;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PictureCard = styled.div<{
  img: string;
}>`
  content: url(${(props) => props.img});
  max-width: 100%;

  height: auto;
`;
