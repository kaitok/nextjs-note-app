const fs = require('fs')

function generateRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

function generateRandomTags() {
  const tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5']
  const tagCount = Math.floor(Math.random() * (tags.length + 1))
  const randomTags = []

  for (let i = 0; i < tagCount; i++) {
    const randomIndex = Math.floor(Math.random() * tags.length)
    randomTags.push(tags[randomIndex])
  }

  return randomTags
}

function generateRandomNotes(dataCount) {
  const notes = []
  const startDate = new Date(2023, 0, 1)
  const interval = 24 * 60 * 60 * 1000

  for (let i = 1; i <= dataCount; i++) {
    const createdDate = new Date(startDate.getTime() + (i - 1) * interval)
    const updatedDate = new Date(
      startDate.getTime() + (i - 1) * interval + Math.random() * interval
    )
    const note = {
      id: i,
      title: `Note ${i}`,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      created_date: createdDate.toISOString(),
      updated_date: updatedDate.toISOString(),
      tags: generateRandomTags(),
    }
    notes.push(note)
  }

  return notes
}

const dataCount = 50
const notesData = generateRandomNotes(dataCount)
const jsonData = JSON.stringify({ notes: notesData }, null, 2)

fs.writeFile('./mock/data/notesData.json', jsonData, (err) => {
  if (err) {
    console.error('Error writing JSON file:', err)
  } else {
    console.log(`Generated notesData.json with ${dataCount} notes.`)
  }
})
