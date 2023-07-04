import type { QueryParams } from '@/app/types/queryParams'

export async function get(path:string , params: QueryParams) {
  const queryParams = new URLSearchParams(params)
  const res = await fetch(`http://localhost:4000/${path}?` + queryParams, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function post(path:string , data: Object) {
  try {
    const response = await fetch(`http://localhost:4000/${path}?`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  
    if (!response.ok) {
      throw new Error("Failed to make POST request");
    }
  
    const result = await response.json();
    console.log("Post request successful:", result);
    return result
  } catch (error) {
    console.error("Error while making POST request:", error);
  }
}

