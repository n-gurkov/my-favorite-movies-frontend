import BaseReactPaginate from 'react-paginate'
import styled from 'styled-components'

export const ReactPaginate = styled(BaseReactPaginate)`
  display: flex;
  list-style-type: none;
  gap: 20px;

  & > li {
    border: 1px solid gray;
    border-radius: 5px;
    background: #e7eff9;
    user-select: none;
    &.disabled {
      opacity: 0.5;
    }
    &.selected {
      background: #afd2ff;
      box-shadow: 0px 0px 10px gray;
    }

    cursor: pointer;
    & > a {
      width: 30px;
      height: 30px;
      align-items: center;
      justify-content: center;
      display: flex;
    }
  }
`
