import type { QueryParams } from '@/app/types/queryParams'

export async function getData(path:string , params: QueryParams) {
  const queryParams = new URLSearchParams(params)
  const res = await fetch(`http://localhost:4000/${path}?` + queryParams, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}