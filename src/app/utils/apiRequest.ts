import type { QueryParams } from '@/app/types/queryParams'

export async function getData(path: string, params: QueryParams) {
  const queryParams = new URLSearchParams(params)
  const res = await fetch(`http://localhost:4000/${path}?` + queryParams, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return {body: await res.json(), headers: res.headers}
}

export async function postData(path: string, data: Object) {
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

export async function deleteData(path: string, id: string) {
  try {
    const response = await fetch(`http://localhost:4000/${path}/${id}`, {
      method: 'DELETE',
      mode: 'cors'
    });

    if (!response.ok) {
      throw new Error('Failed to delete data.');
    }

    const deletedData = await response.json();
    console.log('Deleted data:', deletedData);
  } catch (error) {
    console.error('Error while deleting data:', error);
  }
}

export async function patchData(path: string, data: Object) {
  
  try {
    const response = await fetch(`http://localhost:4000/${path}/${data.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log("Update request successful.");
    } else {
      console.log("Failed to update data.");

    }
  } catch (error) {
    console.error('Error while updating data:', error);
  }
}