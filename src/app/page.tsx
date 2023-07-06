import Image from 'next/image'
import styles from './styles/Home.module.css'
import Link from 'next/link'
import { getData } from '@/app/utils/apiRequest'
import formatDate from '@/app/utils/formatDate'

export default async function Home() {
  let res = await getData('notes', { _limit: 15, _sort: 'id', _order: 'desc' })
  return (
    <div>
      <div className="">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h1 className="font-medium">All Notes</h1>
          </div>
          <div>
            <Link href="/notes/new">
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
              >
                Create Note
              </button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2">
          {res.body.map((item, i) => (
            <Link
              href={`/notes/${item.id}`}
              key={item.id}
              className="note-link"
            >
              <div className="h-36 p-4 border border-gray-200 rounded-md">
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">
                  {formatDate(item.created_date)}
                </p>
                <p className="text-sm mt-3 line-clamp-3">{item.content}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
