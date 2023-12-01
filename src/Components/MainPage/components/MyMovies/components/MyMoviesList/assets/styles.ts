import { CardWrapper } from 'src/Components/styles/styles'
import styled from 'styled-components'

export const MovieWrapperList = styled.div<{ isBlockView: boolean }>`
  display: flex;
  flex-wrap: wrap;
  padding: 0 2rem;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isBlockView ? 'row' : 'column')};
`

export const MoviePresentList = styled(CardWrapper)<{
  isWatched: boolean
  isBlockView: boolean
}>`
  display: ${(props) => (props.isBlockView ? 'grid' : 'flex')};
  grid-template-rows: 450px auto 60px;
  align-items: flex-start;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 2px;
  width: ${(props) => (props.isBlockView ? '19rem' : 'none')};
  height: ${(props) => (props.isBlockView ? 'none' : '15rem')};
  opacity: ${(props) => (props.isWatched ? '0.5' : '1')};
`

export const TextWrapper = styled.div<{ isBlockView: boolean }>`
  margin: ${(props) => (props.isBlockView ? '0.5rem' : '2rem')};
`

export const MovieTitle = styled.div<{ isBlockView: boolean }>`
  font-size: 25pt;
  padding-bottom: 3rem;
`

export const MovieCardButton = styled.button`
  border: 1px solid gray;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  width: 30px;
  height: 30px;
`
