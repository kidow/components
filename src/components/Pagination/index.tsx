import type { FC } from 'react'
import { usePagination } from 'services'
import classnames from 'classnames'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export interface Props {
  currentPage: number
  totalCount: number
  pageSize: number
  onPageChange: (page: number) => void
}

const Pagination: FC<Props> = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize
  })
  if (currentPage === 0 || !paginationRange) return null

  if (paginationRange.length < 2) {
    return (
      <ul className="inline-flex divide-x divide-gray-300 rounded-md border border-gray-300 bg-white text-sm font-medium">
        <li className="inline-flex cursor-not-allowed items-center p-2 text-gray-300">
          <ChevronLeftIcon className="h-5 w-5" />
        </li>
        <li className="inline-flex cursor-pointer items-center bg-blue-50 px-3 py-2">
          1
        </li>
        <li className="inline-flex cursor-not-allowed items-center p-2 text-gray-300">
          <ChevronRightIcon className="h-5 w-5" />
        </li>
      </ul>
    )
  }

  return (
    <ul className="inline-flex select-none divide-x divide-gray-300 rounded-md border border-gray-300 bg-white text-sm font-medium">
      <li
        className={classnames(
          'inline-flex select-none items-center p-2',
          currentPage === 1
            ? 'cursor-not-allowed'
            : 'cursor-pointer hover:bg-blue-50'
        )}
        onClick={() => {
          if (currentPage === 1) return
          onPageChange(currentPage - 1)
        }}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </li>
      {paginationRange.map((pageNumber, key) => {
        if (pageNumber === '...') {
          return (
            <li key={key} className="inline-flex items-center p-2">
              &#8230;
            </li>
          )
        }

        return (
          <li
            className={classnames(
              'inline-flex cursor-pointer select-none items-center px-3 py-2 hover:bg-blue-50',
              {
                'bg-blue-100': pageNumber === currentPage
              }
            )}
            key={key}
            onClick={() => {
              if (pageNumber === currentPage) return
              onPageChange(pageNumber as number)
            }}
          >
            {pageNumber}
          </li>
        )
      })}
      <li
        className={classnames(
          'inline-flex select-none items-center p-2',
          totalCount < currentPage * pageSize
            ? 'cursor-not-allowed'
            : 'cursor-pointer hover:bg-blue-50'
        )}
        onClick={() => {
          if (totalCount < currentPage * pageSize) return
          onPageChange(currentPage + 1)
        }}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </li>
    </ul>
  )
}

export default Pagination
