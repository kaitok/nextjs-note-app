'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function Pagination({
  totalCount,
  itemsPerPage,
  paginationSize,
}: {
  totalCount: number
  itemsPerPage: number
  paginationSize: number
}) {
  const params = useSearchParams()
  const currentPage = Number(params.get('page')) || 1
  const totalPages = Math.ceil(totalCount / itemsPerPage)
  let startIndex = Math.max(1, currentPage - Math.floor(paginationSize / 2))
  const maxStartIndex = totalPages - paginationSize + 1
  startIndex = Math.min(startIndex, maxStartIndex)
  const itemCount = Math.min(paginationSize, totalPages)

  const item = (page: number, text?: string) => {
    return (
      <Link
        href={`?page=${page}`}
        key={page}
        className={`btn ${currentPage !== page ? '' : 'btn-active'}`}
        aria-current={currentPage === page ? 'page' : undefined}
      >
        {text || page}
      </Link>
    )
  }

  return (
    <div className="btn-group">
      {startIndex > 1 && item(1, '<<')}
      {Array.from({ length: itemCount }, (_, index) => index + startIndex).map(
        (page) => item(page)
      )}
      {startIndex < maxStartIndex && item(totalPages, '>>')}
    </div>
  )
}
