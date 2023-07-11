'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { deleteData } from '../utils/apiRequest'

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter()

  const handleDelete = async () => {
    await deleteData('notes', id)
    router.replace('/')
  }
  return (
    <>
      <button
        type="button"
        className="flex items-center gap-1 py-2 px-4 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200"
        onClick={handleDelete}
      >
        <FontAwesomeIcon icon={faTrashCan} className="h-[12px]" />
        Delete
      </button>
    </>
  )
}
