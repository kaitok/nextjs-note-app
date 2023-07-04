import { get } from '@/app/utils/apiRequest'
import formatDate from '@/app/utils/formatDate'

interface Note {
  title: string
  content: string
  created_date: string
  updated_date: string
  tags: [string]
}

export default async function Note({ params }: { params: { slug: string } }) {
  const res = await get('notes', { id: params.id })
  let data: Note | undefined

  if (res.length !== 0) {
    data = res[0]
  }

  return (
    <>
      <div className="flex flex-col gap-1 mt-5">
        {data ? (
          <>
            <div>
              <h2 className="text-3xl font-medium">{data.title}</h2>
            </div>

            <div className="mt-10">
              <p>{data.content}</p>
            </div>

            <div className="mt-10 text-xs text-gray-500">
              <p>Created Date: {formatDate(data.created_date)}</p>
              <p>Edit Date: {formatDate(data.updated_date)}</p>
            </div>
            <div className="mt-3 flex gap-4">
              {data.tags &&
                data.tags.map((v) => (
                  <div className="badge badge-ghost">{v}</div>
                ))}
            </div>
          </>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  )
}