// 'use server'
// import { deleteData, getData } from '@/app/utils/apiRequest'
import formatDate from '@/app/utils/formatDate'

// import { useRouter } from 'next/navigation'
// import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Note } from '@/app/types/note'
import { getQuery, deleteQuery } from '@/app/utils/query'
import EditButton from '@/app/components/EditButton'
import DeleteButton from '@/app/components/DeleteButton'
import HandleRoute from '@/app/components/HandleRoute'

export default async function Note({ params }: { params: { id: string } }) {
  const { id } = params
  let res: Note

  try {
    res = await getQuery('note', id)
  } catch (e) {
    return <p>No data available.</p>
  }

  // const deleteData = async () => {
  //   await deleteQuery('note', id)
  // }

  return (
    <>
      <HandleRoute />
      <div className="flex flex-col gap-1 mt-2">
        {res && (
          <>
            <div className="w-full flex justify-end gap-2">
              <Link href={`/notes/${res.id}/edit`}>
                <EditButton />
              </Link>
              <DeleteButton id={res.id} />
            </div>
            <div>
              <h2 className="text-3xl font-medium">{res.title}</h2>
            </div>

            <div className="mt-10 h-96 min-h-[60vh]">
              <p>{res.content}</p>
            </div>

            <div className="fixed bottom-10 left-10 right-10 flex justify-between content-end items-center">
              <div className="flex gap-4">
                {res.tags &&
                  res.tags.map((tag) => (
                    <div key={tag} className="badge badge-ghost">
                      {tag}
                    </div>
                  ))}
              </div>
              <div className="text-xs text-gray-500">
                <p>Created Date: {formatDate(res.created_date)}</p>
                <p>Edit Date: {formatDate(res.updated_date)}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
