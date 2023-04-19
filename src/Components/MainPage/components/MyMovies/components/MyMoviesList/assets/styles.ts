import { CardWrapper } from 'src/Components/styles/styles';
import styled from 'styled-components';

export const MovieWrapperList = styled.div<{ isBlockView: boolean }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.isBlockView ? 'row' : 'column')};
`;

export const MoviePresentList = styled(CardWrapper)<{
  isWatched: boolean;
  isBlockView: boolean;
}>`
  display: flex;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 2px;
  max-width: ${(props) => (props.isBlockView ? '300px' : 'none')};
  height: ${(props) => (props.isBlockView ? 'none' : '15rem')};
  flex-direction: ${(props) => (props.isBlockView ? 'column' : 'row')};
  opacity: ${(props) => (props.isWatched ? '0.5' : '1')};
  justify-content: ${(props) => (props.isBlockView ? 'space-between' : 'none')};
  flex-wrap: ${(props) => (props.isBlockView ? 'wrap' : 'none')};
  width: ${(props) => (props.isBlockView ? '30%;' : '98%;')};
`;

export const TextWrapper = styled.div<{ isBlockView: boolean }>`
  margin: ${(props) => (props.isBlockView ? '0.5rem' : '2rem')};
`;

export const MovieTitle = styled.div<{ isBlockView: boolean }>`
  font-size: 25pt;
  padding-bottom: 3rem;
`;

export const MovieCardButton = styled.button`
  border: 1px solid gray;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
