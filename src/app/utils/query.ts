import prisma from '@/../prisma/prisma'

export async function getQuery(model: string, id: string) {
  try {
    const res = await prisma[model].findUnique({
      where: {
        id,
      },
    })
    
    // データが存在しない場合の処理
    if (!res) {
      // データがない場合の処理を記述する
      // 例: throw new Error('No data available')
    }
    
    return res;

  } catch (e) {
    throw e;
  }
}


export async function deleteQuery(model: string, id: string) {
  await prisma[model].delete({
    where: {
      id,
    },
  })
}