import Image from 'next/image'
import styles from './styles/Home.module.css'
import Link from 'next/link'
import { getData } from '@/app/utils/getData'

export default async function Home() {
  const res = await getData('notes', {})
  console.log(res)
  return (
    <div>
      <div className="m-10">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-medium">All Notes</span>
          </div>
          <div>
            <Link href="/note">
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
              >
                Create Note
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full border-opacity-50 mt-5">
          {res.map((item, i) => {
            return (
              <div
                className="h-20 p-4 mb-5 border border-gray-200 rounded-md cursor-pointer"
                key={i}
              >
                <p>{item.title}</p>
                <p>{item.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
