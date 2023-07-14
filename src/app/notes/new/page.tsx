import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { redirect } from 'next/navigation'
import { createQuery } from '@/app/utils/prismaQuery'

export default function Notes() {
  async function handleSubmit(formData: FormData) {
    'use server'
    createQuery('note', formData)
    redirect('/')
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <form action={handleSubmit}>
          <div className="mb-2">
            <h1 className="font-medium">Create Note</h1>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="title"
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
