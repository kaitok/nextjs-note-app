import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { redirect } from 'next/navigation'
import { deleteQuery } from '../utils/prismaQuery'

export default function DeleteButton({ id }: { id: string }) {
  const handleSubmit = async () => {
    'use server'
    await deleteQuery('note', id)
    redirect('/')
  }

  return (
    <>
      <form action={handleSubmit}>
        <button
          type="submit"
          className="flex items-center gap-1 py-2 px-4 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          <FontAwesomeIcon icon={faTrashCan} className="h-[12px]" />
          Delete
        </button>
      </form>
    </>
  )
}
