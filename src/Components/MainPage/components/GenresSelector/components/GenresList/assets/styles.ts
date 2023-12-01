import styled from 'styled-components'

export const GenreCard = styled.div<{ isChecked?: boolean }>`
  width: 25%;
  background: ${(props) => (props.isChecked ? '#afd2ff' : '#e7eff9')};
  box-shadow: ${(props) => (props.isChecked ? '0px 0px 10px gray' : 'none')};
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
`

export const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  justify-content: center;
`
