import prisma from '@/../prisma/prisma'
import { Note } from '@prisma/client';


export async function getQuery(model: string, id: string): Promise<Note> {
  try {
    const res = await prisma[model].findUnique({
      where: {
        id,
      },
    })
    
    if (!res) {
      throw new Error('No data available')
    }
    
    return res;

  } catch (e) {
    throw e;
  }
}

export async function createQuery(model: string, formData: FormData) {
  await prisma[model].create({
    data: {
      title: formData.get('title'),
      content: formData.get('content'),
      created_date: new Date(),
      updated_date: new Date()
    }
  })
}

export async function updateQuery(model: string, id: string, formData: FormData) {
  await prisma[model].update({
    where: { id },
    data: {
      title: formData.get('title'),
      content: formData.get('content'),
      updated_date: new Date()
    },
  })
}

export async function deleteQuery(model: string, id: string) {
  await prisma[model].delete({
    where: {
      id,
    },
  })
}