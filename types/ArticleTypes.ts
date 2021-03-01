import { AuthorType } from './UserTypes'
export interface articleReadType {
  title: string
  body: string
  slug: string
  description: string
  createdAt: string
  updatedAt: string
  tagList: []
  author: AuthorType
}

export interface articleWriteType {
  title: string
  description: string
  body: string
  tagList: string
}
