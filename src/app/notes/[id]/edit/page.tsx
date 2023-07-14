import { Note } from '@/app/types/note'
import { getQuery, updateQuery } from '@/app/utils/prismaQuery'
import { redirect } from 'next/navigation'

export default async function Note({ params }: { params: { id: string } }) {
  const { id } = params
  const data = await getQuery('note', id)

  async function handleSubmit(formData: FormData) {
    'use server'
    updateQuery('note', id, formData)
    redirect('/notes/' + id)
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <form action={handleSubmit}>
          <div className="mb-2">
            <h1 className="font-medium">Edit Note #{params.id}</h1>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="title"
              defaultValue={data.title}
            ></input>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              rows="10"
              placeholder="Note"
              name="content"
              defaultValue={data.content}
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
