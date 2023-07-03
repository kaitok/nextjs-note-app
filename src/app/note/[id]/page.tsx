import { getData } from '@/app/utils/getData'

export default async function Note({ params }: { params: { slug: string } }) {
  const res = await getData('notes', { id: params.id })
  const data = res[0]
  return (
    <>
      <div className="flex flex-col gap-1 mt-5">
        <div>
          <h2 className="text-3xl font-medium">{data.title}</h2>
        </div>
        <div>
          <p>{data.created_date}</p>
        </div>
        <div className="mt-10">
          <p>{data.content}</p>
        </div>
      </div>
    </>
  )
}
