import { deleteQuery, getQuery } from '@/app/utils/query'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request,{ params }: { params: { id: string } }) {
  const { id } = params
  const data = await getQuery('note', id)
  if (data) {
    await deleteQuery('note', id)
    return NextResponse.json({ id });
  } else {
    return NextResponse.json({ message: 'Note not found' });
  }
}