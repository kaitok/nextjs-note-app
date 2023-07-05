'use client'
import { deleteData, get } from '@/app/utils/apiRequest'
import formatDate from '@/app/utils/formatDate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Note } from '@/app/types/note'

export default function Note({ params }: { params: { id: string } }) {
  const [data, setData] = useState<undefined | null | Note>(undefined)
  const router = useRouter()
  const { id } = params

  const fetchData = async () => {
    const res = await get('notes', { id })
    if (res.length !== 0) {
      setData(res[0])
    } else {
      setData({})
    }
  }

  const handleDelete = async () => {
    await deleteData('notes', id)
    router.replace('/')
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const handleRouteChange = () => {
      router.push('/')
    }

    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  if (data === undefined) {
    return <p>Loading...</p>
  }

  if (Object.keys(data).length === 0) {
    return <p>No data available.</p>
  }

  return (
    <>
      <div className="flex flex-col gap-1 mt-2">
        <div className="w-full flex justify-end gap-2">
          <Link href={`/notes/${data.id}/edit`}>
            <button
              type="button"
              className="flex items-center gap-1 py-2 px-4 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200"
            >
              <FontAwesomeIcon icon={faPenToSquare} className="h-[12px]" />
              Edit
            </button>
          </Link>
          <button
            type="button"
            className="flex items-center gap-1 py-2 px-4 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200"
            onClick={handleDelete}
          >
            <FontAwesomeIcon icon={faTrashCan} className="h-[12px]" />
            Delete
          </button>
        </div>
        {data && (
          <>
            <div>
              <h2 className="text-3xl font-medium">{data.title}</h2>
            </div>

            <div className="mt-10 h-96 min-h-[60vh]">
              <p>{data.content}</p>
            </div>

            <div className="fixed bottom-10 left-10 right-10 flex justify-between content-end items-center">
              <div className="flex gap-4">
                {data.tags &&
                  data.tags.map((tag) => (
                    <div key={tag} className="badge badge-ghost">
                      {tag}
                    </div>
                  ))}
              </div>
              <div className="text-xs text-gray-500">
                <p>Created Date: {formatDate(data.created_date)}</p>
                <p>Edit Date: {formatDate(data.updated_date)}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
