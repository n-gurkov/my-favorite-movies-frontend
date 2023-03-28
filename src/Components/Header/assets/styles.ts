import styled from 'styled-components';
import { CardWrapper } from 'src/Components/styles/styles';

export const HeaderWrapper = styled(CardWrapper)`
  display: flex;
  margin: 1rem 15rem;
  justify-content: space-between;
  font-size: 25pt;
  padding: 0 1rem;
  user-select: none;
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  width: 55px;
  height: 55px;
`;
