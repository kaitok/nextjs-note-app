export interface Note {
  id: string
  title: string
  content: string
  created_date: Date
  updated_date: Date
  tags: [string]
}