import prisma from '@/../prisma/prisma'

export async function getQuery(model: string, id: string) {
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

export async function updateQuery(model: string, id: string, formData: FormData) {
  await prisma[model].update({
    where: { id },
    data: {
      title: formData.get('title'),
      content: formData.get('content'),
    },
  });
}

export async function deleteQuery(model: string, id: string) {
  await prisma[model].delete({
    where: {
      id,
    },
  })
}