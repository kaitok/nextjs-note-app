'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HandleRoute() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      router.push('/')
    }

    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])
  return null
}
