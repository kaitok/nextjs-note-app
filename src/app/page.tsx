import Image from 'next/image'
import styles from './styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="m-10">
        <h1>Note</h1>
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
  )
}
