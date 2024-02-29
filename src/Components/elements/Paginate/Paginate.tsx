import { ReactElement } from 'react'
import { ReactPaginateProps } from 'react-paginate'
import { ReactPaginate } from './assets/styles'

interface IPageChange {
  selected: number
}

interface IPaginateProps extends Omit<ReactPaginateProps, 'onPageChange'> {
  onPageChange: (value: number) => void
}

export const Paginate = (props: IPaginateProps): ReactElement => {
  const { onPageChange } = props

  const handlePageChange = ({ selected }: IPageChange) => {
    onPageChange(selected)
  }
  return (
    <ReactPaginate
      {...props}
      nextLabel="->"
      previousLabel="<-"
      onPageChange={handlePageChange}
    />
  )
}
