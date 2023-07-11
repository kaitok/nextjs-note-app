'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function EditButton() {
  return (
    <>
      <button
        type="button"
        className="flex items-center gap-1 py-2 px-4 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200"
      >
        <FontAwesomeIcon icon={faPenToSquare} className="h-[12px]" />
        Edit
      </button>
    </>
  )
}
