'use client'
import { useState, useEffect } from 'react'
import { patchData, getData } from '@/app/utils/apiRequest'
import { useRouter } from 'next/navigation'
import { Note } from '@/app/types/note'

export default function Note({ params }: { params: { id: string } }) {
  const [data, setData] = useState<undefined | null | Note>(undefined)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  })
  const router = useRouter()
  const { id } = params

  const fetchData = async () => {
    const res = await getData('notes', { id })
    if (res.body.length !== 0) {
      setFormData(res.body[0])
    } else {
      setFormData({})
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const updatedDate = new Date().toISOString()
    const requestData = {
      ...formData,
      updated_date: updatedDate,
    }

    try {
      const res = await patchData('notes', requestData)
      console.log('Form submitted successfully')
      router.replace(`/notes/${id}`)
    } catch (error) {
      console.error('Error while submitting form:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="flex flex-col gap-4">
        <form onSubmit={handleSubmit}>
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
              value={formData.title}
              onChange={handleChange}
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
              value={formData.content}
              onChange={handleChange}
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
