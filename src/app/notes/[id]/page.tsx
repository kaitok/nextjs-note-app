import { get } from '@/app/utils/apiRequest'
import formatDate from '@/app/utils/formatDate'

interface Note {
  title: string
  created_date: string
  content: string
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
            <div>
              <p>{formatDate(data.created_date)}</p>
            </div>
            <div className="mt-10">
              <p>{data.content}</p>
            </div>
          </>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  )
}
